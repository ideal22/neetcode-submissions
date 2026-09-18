class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    binarySearch(arr, target) {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2)
            if (target === arr[mid]){
                return arr[mid]
            } else if (target < arr[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }

        return -1
    }
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
             if (this.binarySearch(matrix[i], target) === target) {
                return true
             }

        }

        return false
    }
}
