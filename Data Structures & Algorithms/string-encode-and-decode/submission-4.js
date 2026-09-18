class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //["Hello","World"]

        // return '4#Hello4#World

        let encoded = ''

        for (const str of strs) {
            encoded += `${str.length}#${str}`
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         //'5#Hello5#World
        const result = [];
        let i = 0;

        while (i < str.length) {
            const hashIndex = str.indexOf('#', i);
            const length = Number(str.slice(i, hashIndex));
            const word = str.slice(hashIndex + 1, hashIndex + 1 + length);
            result.push(word);
            i = hashIndex + 1 + length;
        }

        return result;
    }
}
