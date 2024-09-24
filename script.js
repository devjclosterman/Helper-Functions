//Main function to find max subarray
function maxSubArray(nums) {
    return kadane(nums)
}

// Helper function (Kadanes algo)
function kadane(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];

    for (let i = 0; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
    }
    return globalMax;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6


///////////////////recursive fibonacci sequence with helper function//////////////////

//Main function to get n-th Fibonacci number 
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibHelper(n, 0, 1, 2);
}

//Helper function for fibonacci recursion with memoization
function fibHelper(n, prev, current, step) {
    if (step > n) {
        return current;
    }
    return fibHelper(n, current, prev + current, step + 1);
} 

console.log(fibonacci(10)); //Output: 55

////////////Remove nth Node from End of List with Helper function /////////

//Main function to remove nth node
function removeNthFromEnd(head, n) {
    let length = getListLength(head); //using helper to get length
    return removeNode(head, length - n); //Using helper to remove the node
}

//Helper function to calculate the length of the linked list
function getListLength(node) {
    let length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    return length;
}

//Helper function to remove the node
function removeNode(head, index) {
    let dummy = { next: head };
    let current = dummy;

    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return dummy.next;
}

let head = {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null }}}}
};
console.log(removeNthFromEnd(head, 2));

//////// Binary Search Tree (BST) is Valid with helper function ////////////////////////////
// Main function to validate BST
function isValidBST(root) {
    return validateBST(root, -Infinity, Infinity);
}

// Helper function for validation
function validateBST(node, min, max) {
    if (!node) return true; // Base case: if node is null, it's valid
    
    if (node.val <= min || node.val >= max) return false; // Not valid
    
    // Recursively validate the left and right subtrees
    return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max);
}

// Example Usage (Assuming TreeNode is already defined)
let tree = {
    val: 5,
    left: { val: 1, left: null, right: null },
    right: { val: 8, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null }}
};
console.log(isValidBST(tree)); // Output: true
