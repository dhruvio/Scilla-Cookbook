---
tags:
  - List
---

# List

A list is a data type which can hold several instances of a singular type.

Consider the below definition of creating a List of Uint256.

```ocaml
(* transition with Option argumen *)
transition OptionTest(option: Option Uint32)
  ev = {_eventname: "OptionTest"; option: option };
  event ev
end
```

## Example List Contract

```ocaml
scilla_version 0
(***************************************************)
(* List operations                                 *)
(***************************************************)
import ListUtils BoolUtils

library List

let empty_list = Nil {Uint32}

let one   = Uint32 1 (* numbers 1, 2 and 3 to use below *)
let two   = Uint32 2
let three = Uint32 3

let create_3el_list = (* utility to create a list with 3 elements *)
  fun (e1 : Uint32) =>
  fun (e2 : Uint32) =>
  fun (e3 : Uint32) =>
  let nil = empty_list in
      let le3 = Cons {Uint32} e3 empty_list in (* insert in front *)
      let le2e3 = Cons {Uint32} e2 le3 in
      Cons {Uint32} e1 le2e3 (* [e1, e2, e3] *)

let equal = fun (a: Uint32) => fun(b: Uint32) =>
  builtin eq a b

let not_equal = fun (a: Uint32) => fun(b: Uint32) =>
  let equal = builtin eq a b in
  negb equal (* from BoolUtils *)

contract List()

field list : List Uint32 = empty_list
field doubles : Map Uint32 Uint32 = Emp Uint32 Uint32 (* doubles[l[i]]=2*l[i] *)

(* create a list [1,2,3] and store in field list *)
transition Create123()
  l = create_3el_list one two three; (* [1, 2, 3] *)
  list := l
end

(* access n-th element of a list using list_nth, and emit it *)
transition ElementAtPosition(n: Uint32)
  l <- list;
  el_opt =
    let nth = @list_nth Uint32 in (* from ListUtils *)
    nth n l; (* note that indexing starts at 0 *)
  match el_opt with (* Option is None if no element with index i in list *)
  | None => (* index is out of bounds: no such element *)
    ev = {_eventname: "ElementAtPositionFailure"};
    event ev
  | Some el => (* list[i] = el *)
    ev = {_eventname: "ElementAtPositionSuccess"; index: n; element: el};
    event ev
  end
end

(* remove elements from list that equal to value *)
transition RemoveIfEqualtTo(value: Uint32)
  f = not_equal value;
  filterUint32 = @list_filter Uint32; (* from ListUtils *)
  l <- list;
  list_without_values = filterUint32 f l;
  list := list_without_values
end

(* compare the lists [1,2,3] and [3 2 1] *)
transition Compare123To321()
  l123 = create_3el_list one two three; (* [1, 2, 3] *)
  l321 = create_3el_list three two one; (* [3, 2, 1] *)
  list_zip_eq_with = @list_zip_with Uint32 Uint32 Bool; (* from ListUtils *)
  r = list_zip_eq_with equal l123 l321;
  ev = {_eventname : "Compare123To321"; result: r};
  event ev
end

(* compute the element wise difference of 2 lists *)
transition Difference321Minus111()
    l321 = create_3el_list three two one; (* [3, 2, 1] *)
    l111 = create_3el_list one one one; (* [1, 1, 1] *)
    list_zip_diff = @list_zip_with Uint32 Uint32 Uint32; (* from ListUtils *)
    r = let diff = fun (a: Uint32) => fun(b: Uint32) => builtin sub a b in (* diff = a - b *)
      list_zip_diff diff l321 l111;
    ev = {_eventname: "Difference321Minus111"; result: r};
    event ev
end

(* compute 2*l[i] and store in doubles[l[i]] *)
procedure Twice(v: Uint32)
  res =
    let two = Uint32 2 in (* res = 2 * v *)
    builtin mul v two;
  doubles[v] := res (* store in map *)
end
transition ComputeDoubles()
  l <- list;
  forall l Twice (* apply Twice(.) to each element *)
end

(* sum the elements of a list using a left fold: res = 1 + 1 + 2 = 4 *)
transition SumElements112()
  l = create_3el_list one one two; (* [1, 1, 2] *)
  folder = @list_foldl Uint32 Uint32; (* accumulator and list elements are of type Uint32 *)
  sum_of_elements =
    let init = Uint32 0 in (* initialize the accumulator at 0 *)
    let addition = (* add elements to accumulator: a + b *)
      fun(a: Uint32) => fun(b: Uint32) =>
        builtin add a b in
    folder addition init l;
  ev = {_eventname: "SumElements112"; sum: sum_of_elements};
  event ev
end
```

## User Defined List Functions

The below snippets are user defined library snippets which involve the List type.

### listByStr20Contains

```ocaml
let listByStr20Contains =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let listMemByStr20 = @list_mem ByStr20 in
      listMemByStr20 eqByStr20 bs list
```

### listByStr20Excludes

```ocaml
let listByStr20Excludes =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let b = listByStr20Contains list bs in negb b
```

### listByStr20FilterOut

```ocaml
let listByStr20FilterOut =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let listByStr20Filter = @list_filter ByStr20 in
    let fn = fun(v: ByStr20) =>
      let b = builtin eq v bs in
       negb b in
      listByStr20Filter fn list
```

## Further Reading