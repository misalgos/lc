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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root, -Infinity, Infinity);
};

function dfs(root, low, high) { 
    if(root.val <= low || root.val >= high) return false;
    if(root.left && !dfs(root.left, low, root.val)) return false;
    if(root.right && !dfs(root.right, root.val, high)) return false;
    return true;
}