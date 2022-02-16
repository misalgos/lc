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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return null;
    
    let node = root;
    while(node) {
        /*Find the immediate left node's right most node*/
        if(node.left) {
            let rightMost = node.left;
            /*Keep going until we find the right most node of this current left node*/
            while(rightMost.right) {
                rightMost = rightMost.right;
            }
            /*Rewire the connections once we find it. The current node's right gets attached to the  right of the rightMost                                     node, and this newly attached right (that came from the current node's right), gets the current node's left attached to it's right side. Since we have attached the left node to the right of the current node, we can finally get rid of it, and set it to null.*/
            rightMost.right = node.right;
            node.right = node.left;
            node.left = null;
        }
        /*Move the current node to reference it's right node, which contains all of the left nodes that we attached to its right side.*/
        node  = node.right;
    }
};



/*

Morris Traversal

 The first left, find it's right most child, and make it the current node's right. Make the current node's former right
child become the new right's right.


*/