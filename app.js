'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}

/* n = 40 での実行時間
real    0m0.243s
user    0m0.236s
sys     0m0.004s */