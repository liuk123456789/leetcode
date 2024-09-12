# 记录下leetcode 刷题

### 关于二分算法

**三种区间的大致结构**

下面的代码类似于伪代码，仅用于说明。

左闭右闭

```js
// 左闭右闭
while(left <= right) // <--
{
    middle = (left + right) >> 1;//去小数部分，靠近left
    // 为了防止溢出可以这样：middle = (right - left) >> 2 + left; 
    if(条件A)
        left = middle + 1;
    if(条件B)
        right = middle - 1;
    /*可能有：
    if(条件C)
        return middle;
    */
}
```

左闭右开

```js
while(left < right)
{
    middle = (left + right) >> 1;//去小数部分，靠近left
    // 为了防止溢出可以这样：middle = (right - left) >> 2 + left;
    if(条件A)
        left = middle + 1;
    if(条件B)
        right = middle;
    /*可能有：
    if(条件C)
        return middle;
    */
}
return --left;//或return --right;
```

左开右闭

```js
while(left < right)
{
    middle = (left + right + 1) >> 1;//去小数，进1位，靠近right
    // 为了防止溢出可以这样：middle = (right - left + 1) >> 2 + left; 
    if(条件A)
        left = middle;
    if(条件B)
        right = middle - 1;
    /*可能有：
    if(条件C)
        return middle;
    */
}
return left;//或return right;
```



左开可以保证，left可以一直不动，且left不会向前越界。

```
关于middle的计算
以上在“左闭右开”和“左开右闭”中middle的计算不太一样
middle = (left + right) >> 1;//左闭右开，靠近left
middle = (left + right + 1) >> 1;//左开右闭，靠近right
这为了防止死循环，为了方便理解，可以考虑left=1，right=2的情况。

//此时
middle = (left + right) >> 1;//结果为1
    // 如果还是left=middle，陷入死循环
    // 所以只能用在right=middle, left=middle+1的情况
middle = (left + right + 1) >> 1;//结果为2
    // 如果还是right=middle，陷入死循环
    // 所以只能用在left=middle, right=middle-1的情况
```


结论
优先考虑使用左闭右开的原则吧，如果第一个元素有特殊情况，或担心向前越界的情况，考虑使用左开右闭。

### 二叉树的三种遍历方式

**前序遍历**

**中 左 右**

```js
function inorderTraversal(root: TreeNode | null): number[] {
    if(!root) return []
    return [
       root.val,
      ...(root.left ? inorderTraversal(root.left) : []),
      ...(root.right ? inorderTraversal(root.right) : [])
    ]
};
```

**中序遍历**

**左 根 右**

```js
function inorderTraversal(root: TreeNode | null): number[] {
    if(!root) return []
    return [
      ...(root.left ? inorderTraversal(root.left) : []),
      root.val,
      ...(root.right ? inorderTraversal(root.right) : [])
    ]
};
```

**后序遍历**

**中 右 左**

```js
function inorderTraversal(root: TreeNode | null): number[] {
    if(!root) return []
    return [
       root.val,
      ...(root.left ? inorderTraversal(root.left) : []),
      ...(root.right ? inorderTraversal(root.right) : [])
    ]
};
```

