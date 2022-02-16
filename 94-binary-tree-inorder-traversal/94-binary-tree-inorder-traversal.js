/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    let stack = [];
    let curr = root;
    //Also , because stack.length isn't true in first iter, while 'curr is true'
    while(curr || stack.length) {
        while(curr) {
            //from the current position, keep adding all the left nodes until left-most is reached.
            stack.push(curr);
            curr = curr.left;
        }
        //Begin popping nodes from top of stack (should be left-most, from curr pos)
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};

