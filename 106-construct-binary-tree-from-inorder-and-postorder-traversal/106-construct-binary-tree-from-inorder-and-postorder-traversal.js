/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = new Map();
    inorder.forEach((e, i)=> map.set(e, i));
    let idx = postorder.length-1;
    function recurse(start, end) {
        if(start > end) return null;
        const root = new TreeNode(postorder[idx]);
        idx--;
        root.right = recurse(map.get(root.val)+1, end);
        root.left = recurse(start, map.get(root.val)-1);
    
        return root;
    }
    return recurse(0, postorder.length-1);
};