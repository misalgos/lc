/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = new Map();
    //Keep track of indices of vals in preorder
    inorder.forEach((e,i)=>map.set(e,i));
    let idx = 0;//Index to keep track of the current root node from the preorder list.
    function recurse(start, end) {
        if(start > end) return null;
        //Remove first preorder element and create a "root" node with it
        const root = new TreeNode(preorder[idx]);
        idx++;
        //Its left child contains the nodes between the current start and inorder index of root's val -1
        root.left = recurse(start, map.get(root.val)-1);
        //Its right child contains the nodes between the inorder index of rootval + 1 and the current end
        root.right = recurse(map.get(root.val)+1, end);
        //Return the current root. These nodes being returned are what's being attached from each recursive call.
        return root;
    }
    return recurse(0, inorder.length-1);
};