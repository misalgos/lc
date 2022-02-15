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
    dfs(root, res);
    return res;
};

function dfs(root, res) {
    if(root) {
        dfs(root.left, res);
        res.push(root.val);
        dfs(root.right, res);
    }
}