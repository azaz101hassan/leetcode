import { ListNode } from "./utils/classes/ListNode";

// Solution 1
// Input
// l1 =
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// l2 =
// [5,6,4]

// Use Testcase
// Output
// [6,2,4,4,8,2,0,4,2,4,8,6,4,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// Expected
// [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// This doesn't support visualization.

// const getNumber = (node: ListNode) => {
//   let number = "";

//   while (node) {
//     number = node.val + number;
//     node = node.next;
//   }

//   if (!number) return 0;

//   return Number(number);
// };

// const addTwoNumbers = (
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null => {
//   let sumNumber: number = getNumber(l1) + getNumber(l2);
//   const head = new ListNode(sumNumber % 10, null);
//   sumNumber = Math.floor(sumNumber / 10);
//   let prevNode = head;
//   while (sumNumber) {
//     const newNode = new ListNode(sumNumber % 10, null);
//     prevNode.next = newNode;
//     prevNode = newNode;
//     sumNumber = Math.floor(sumNumber / 10);
//   }

//   return head;
// };

// Solution 2
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const l13 = new ListNode(3, null);
const l12 = new ListNode(4, l13);
const list11 = new ListNode(2, l12);

const l23 = new ListNode(4, null);
const l22 = new ListNode(6, l23);
const list21 = new ListNode(5, l22);

console.log(addTwoNumbers(list11, list21));
console.log(addTwoNumbers(new ListNode(0, null), new ListNode(0, null)));
