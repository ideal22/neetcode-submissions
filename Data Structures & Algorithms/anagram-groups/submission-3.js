class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    toSort(str){
        return str.split('').sort().join('')
    }

    // groupAnagrams(strs) {
    //     const strMap = new Map()
        
    //     for (let str of strs) {
    //         const sorted = this.toSort(str)
    //         if (!strMap.has(sorted)) {
    //             strMap.set(sorted, [])
    //         }
    //         strMap.get(sorted).push(str)
    //     }

    //     return Array.from(strMap.values())
    // }
    // groupAnagrams(strs) {
    //     const groups = new Map()

    //     for (const str of strs) {
    //         const count = new Array(26).fill(0)

    //         for (const ch of str) {
    //             count[ch.charCodeAt(0) - 97]++;
    //         }
    //         const key = count.join(',')

    //         if (!groups.has(key)) groups.set(key, [])
    //         groups.get(key).push(str)
    //     }
    //     return Array.from(groups.values())
    // }

    groupAnagrams(strs) {
        const groups = new Map()
        
        for (const str of strs) {
            const counts = new Array(26).fill(0)
            for (const ch of str) {
                counts[ch.charCodeAt(0) - 97]++
            }
            const key = counts.join(',')
            console.log(key)
            if (!groups.has(key)) {
                groups.set(key, [])
            }
            groups.get(key).push(str)
        }
        return Array.from(groups.values())
    }
}
