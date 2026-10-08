class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
 minWindow(s, t) {
    if (s.length < t.length) return '';

    const need = new Map();   // символ -> сколько нужно
    const window = new Map(); // символ -> сколько сейчас в окне

    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let matches = 0;          // сколько символов из need уже выполнены по количеству
    const required = need.size;

    let l = 0;
    let bestLen = Infinity;
    let bestL = 0;

    for (let r = 0; r < s.length; r++) {
        // 1. добавляем s[r]
        const ch = s[r];
        window.set(ch, (window.get(ch) || 0) + 1);

        if (need.has(ch) && window.get(ch) === need.get(ch)) {
            matches++;
        }

        // 2. пока окно валидно: фиксируем результат, потом сжимаем
        while (matches === required) {
            if (r - l + 1 < bestLen) {
                bestLen = r - l + 1;
                bestL = l;
            }

            const left = s[l];
            window.set(left, window.get(left) - 1);

            if (need.has(left) && window.get(left) < need.get(left)) {
                matches--;
            }
            l++;
        }
    }

    return bestLen === Infinity ? '' : s.slice(bestL, bestL + bestLen);
}
}
