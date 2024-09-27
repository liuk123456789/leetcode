/**
    请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
    实现 MyStack 类：

    void push(int x) 将元素 x 压入栈顶。
    int pop() 移除并返回栈顶元素。
    int top() 返回栈顶元素。
    boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

    注意：

    你只能使用队列的标准操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
    你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
*/
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];//备份的队列
};

MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

MyStack.prototype.pop = function() {
  	// 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
    if(!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while(this.queue1.length > 1) {//当队列1的元素数量大于1的时候不断将元素push进备份队列
        this.queue2.push(this.queue1.shift());
    }
    return this.queue1.shift();//最后将队列1最后一个元素出队
};

MyStack.prototype.top = function() {
    const x = this.pop();//查看栈顶，队列出队，然后在push进队列1
    this.queue1.push(x);
    return x;
};

MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
