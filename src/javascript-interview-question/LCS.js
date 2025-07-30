function longestCommonSubstring(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let maxLength = 0;
    let endingIndex = m;
    
    // Create a 2D array to store lengths of longest common suffixes
    let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    console.log(dp);
    // Build the dp array from bottom up
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endingIndex = i;
                }
            }
        }
    }
    if (maxLength === 0) return "";
    return str1.slice(endingIndex - maxLength, endingIndex);
}
function lcs(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    maxLength = 0;
    lastIndex = m;

    let dp = [];
    dp = Array(m+1).fill(0).map(() => {
        return Array(n+1).fill(0);
    });

    for(let i= 1; i<=m; i++) {
        for (let j=1; j<=n; j++) {
            if(str1[i -1] === str2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
                if(dp[i][j] > maxLength){
                    maxLength = dp[i][j];
                    lastIndex = i;
                }
            }
        }
    }
    return str1.slice(lastIndex - maxLength, maxLength);
}

console.log(lcs("abcdef", "zabcf")); // Output: "abc"