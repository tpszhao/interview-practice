Given two strings `S` and `T`, determine if they generate the same result when typed into the text editor. Treat `#` as back space.

```
Input: Input: S = "ab##", T = "c#d#"
Output: true
Explanation: both strings generate ""
```

```
Input: Input: S = "a#b", T = "c#b"
Output: true
Explanation: both strings generate "b"
```

Note:

- consider this as the behavor as the text editor, e.g `####` returns `""`
- case sensitivity matters

I personally don't like the optimal solution although it saves space because I wasn't figure out a way to make it readable.

[LeetCode Link](https://leetcode.com/problems/backspace-string-compare/)
