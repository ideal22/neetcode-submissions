class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let low = 0;
        let high = numbers.length - 1;

        while (low <= high) {
            const twoSum = numbers[low] + numbers[high]

            if (twoSum === target) return [low + 1, high + 1]

            if (twoSum > target) {
                high--
            } else {
                low++
            }
        }
    }
}
