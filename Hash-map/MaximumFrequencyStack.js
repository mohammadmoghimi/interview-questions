// Design a stack-like data structure to push 
// elements to the stack and pop the most frequent 
// element from the stack.

// Implement the FreqStack class:

// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val 
// onto the top of the stack.
// int pop() removes and returns the most 
// frequent element in the stack.
// If there is a tie for the most frequent 
// element, the element closest to the 
// stack's top is removed and returned.
 

// Example 1:

// Input
// ["FreqStack", "push", "push", "push", "push", 
// "push", "push", "pop", "pop", "pop", "pop"]
// [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]

// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most 
// frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the 
// most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most 
// frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the 
// most frequent, but 4 is closest to the top. The stack becomes [5,7].

class FreqStack {
    constructor() {
        this.freqMap = new Map();
        this.group = new Map();
        this.maxFreq = 0; // Initialize maxFreq as a number, not an object
    }
}

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if (!this.freqMap.has(val)) {
        this.freqMap.set(val, 0);
    }
    const freq = this.freqMap.get(val) + 1;
    this.freqMap.set(val, freq);

    if (freq > this.maxFreq) {
        this.maxFreq = freq;
    }

    if (!this.group.has(freq)) {
        this.group.set(freq, []);
    }
    this.group.get(freq).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    if (!this.group.has(this.maxFreq)) return null;

    const elements = this.group.get(this.maxFreq);
    const element = elements.pop();

    if (elements.length === 0) {
        this.group.delete(this.maxFreq);
        this.maxFreq--;
    }

    const freq = this.freqMap.get(element) - 1;
    this.freqMap.set(element, freq);

    return element;
};