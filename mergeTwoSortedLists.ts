import { ListNode } from "./utils/classes/ListNode";

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const dummyHead = new ListNode(null, null);

  let list1Ref = list1;
  let list2Ref = list2;
  let iterativeListRef = dummyHead;
  while (list1Ref || list2Ref) {
    if (list1Ref !== null && list2Ref !== null) {
      if (list1Ref.val < list2Ref.val) {
        iterativeListRef.next = list1Ref;
        list1Ref = list1Ref.next;
      } else {
        iterativeListRef.next = list2Ref;
        list2Ref = list2Ref.next;
      }
    } else if (list1Ref !== null) {
      iterativeListRef.next = list1Ref;
      list1Ref = list1Ref.next;
    } else {
      iterativeListRef.next = list2Ref;
      list2Ref = list2Ref.next;
    }
    iterativeListRef = iterativeListRef.next;
  }
  return dummyHead.next;
};

const l13 = new ListNode(4, null);
const l12 = new ListNode(2, l13);
const list11 = new ListNode(1, l12);

const l23 = new ListNode(4, null);
const l22 = new ListNode(3, l23);
const list21 = new ListNode(1, l22);

console.log(mergeTwoLists(list11, list21));
console.log(mergeTwoLists(null, new ListNode(0, null)));
console.log(mergeTwoLists(new ListNode(2, null), new ListNode(1, null)));
