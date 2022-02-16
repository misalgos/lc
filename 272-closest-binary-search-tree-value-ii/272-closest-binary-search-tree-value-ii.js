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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    let result = [];
    let path = [];
    inOrder(root, path);
    let left = 0;
    let right = path.length-1;
    while(left < right) {
        let mid = Math.floor((right+left)/2);
        if(target - path[mid] > path[mid+k] - target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    for(let i = left; i < left+k; i++) {
        result.push(path[i]);
    }
    return result;
};

function inOrder(root, path) {
    if(root) {
        inOrder(root.left, path);
        path.push(root.val);
        inOrder(root.right, path);
    } 
}


/*

1) Inorder traverse tree and find closest


//BAD
1) BFS/DFS-Iterate the tree and put all nodes in a minHeap
2) Dequeue the minHeap and push k elements until the result array reaches k size.


*/