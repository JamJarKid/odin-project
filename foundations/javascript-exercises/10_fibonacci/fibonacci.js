const fibonacci = function(n, memo) {
    memo = memo || {0:0, 1:1};
    if (n in memo) {
        return memo[n];
    }
    memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);

    return memo[n]
};

// Do not edit below this line
module.exports = fibonacci;
