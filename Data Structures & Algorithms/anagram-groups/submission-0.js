class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    toSort(str){
        return str.split('').sort().join('')
    }

    groupAnagrams(strs) {
        const strMap = new Map()
        
        for (let str of strs) {
            const sorted = this.toSort(str)
            if (!strMap.has(sorted)) {
                strMap.set(sorted, [])
            }
            strMap.get(sorted).push(str)
        }

        return Array.from(strMap.values())
    }
}
