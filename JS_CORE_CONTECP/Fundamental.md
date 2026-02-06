## 1. Scope কি?
Scope মানে হলো একটা variable বা function কোথায় কোথায় accessible, আর কোথায় accessible না। এটা একটা boundary বা সীমানা যেটা define করে কোন code এর কোন অংশ থেকে কোন variable access করা যাবে।

### Scope এর Types
JavaScript এ মূলত ৪ ধরনের Scope আছে:
 1. Global Scope
 2. Function Scope (Local Scope)
 3. Block Scope
 4. Lexical Scope (Closure সাথে related)

### 1. Global Scope - বিস্তারিত

যে variables বা functions কোনো function বা block এর বাইরে declare করা হয় সেগুলো global scope এ থাকে। এগুলো code এর যেকোনো জায়গা থেকে access করা যায়।
#### কীভাবে কাজ করে:
Browser এ global scope মানে window object, Node.js এ global object। Global variables এই object এর property হয়ে।

#### Examples

``` Javascript

// Global variables
var globalVar = "I'm global";
let globalLet = "Also global";
const API_URL = "https://api.example.com";

function globalFunction() {
    console.log("Global function");
}

// এগুলো সব জায়গা থেকে access করা যাবে
function test() {
    console.log(globalVar); // ✅ Accessible
    console.log(API_URL);   // ✅ Accessible
}

if (true) {
    console.log(globalLet); // ✅ Accessible
}

// Browser এ
console.log(window.globalVar); // ✅ "I'm global"

```

### 2. Function Scope (Local Scope) - বিস্তারিত

Function এর ভিতরে declare করা variables শুধুমাত্র ওই function এর মধ্যেই accessible। Function শেষ হলে variables destroy হয়ে যায়।
#### কীভাবে কাজ করে:
প্রতিটা function তার নিজের execution context তৈরি করে। `var` keyword function scope follow করে।

#### Examples: 
``` Javascript

function calculateTotal() {
    var price = 100;        // Function scoped
    var quantity = 5;       // Function scoped
    var tax = 0.15;         // Function scoped
    
    var total = price * quantity * (1 + tax);
    return total;
}

console.log(calculateTotal()); // ✅ 575
console.log(price);            // ❌ ReferenceError: price is not defined

```

### 3. Block Scope - বিস্তারিত

ES6 থেকে `let` এবং `const` introduce হওয়ার পর block scope এসেছে। Curly braces `{}` এর মধ্যে declare করা variables শুধু ওই block এর মধ্যে accessible।
##### কীভাবে কাজ করে:
`if`, `for`, `while`, বা যেকোনো `{}` block একটা scope তৈরি করে। `let` এবং `const` এই scope follow করে, `var` করে না।
##### Use Cases:

- Loop variables যেগুলো loop এর বাইরে দরকার নেই
- Conditional variables
- Temporary data in specific code blocks
- Switch case এ variable isolation

Examples:
```javascript
{
    let blockVar = "I'm in block";
    const PI = 3.14;
    var leaky = "I leak out!";

    console.log(blockVar); // ✅ Accessible
}

console.log(blockVar); // ❌ ReferenceError
console.log(PI);       // ❌ ReferenceError
console.log(leaky);   // ✅ "I leak out!" (var এর কারণে)


```

### 4. Lexical Scope (Static Scope) - বিস্তারিত

Lexical scope মানে একটা function তার definition এর সময় যেখানে ছিল সেই scope access করতে পারে, execution এর সময় যেখান থেকে call হলো সেটা matter করে না। এটা Closure এর foundation।
#### কীভাবে কাজ করে:
JavaScript engine code parse করার সময়ই determine করে কোন variable কোথায় accessible হবে, based on code structure (lexical structure)।
#### Scope Chain:
Inner function → Outer function → Global scope এই chain follow করে variable খোঁজে।

#### Examples: 

```javascript 

const global = "Global";

function outer() {
    const outerVar = "Outer";
    
    function inner() {
        const innerVar = "Inner";
        
        console.log(innerVar);  // ✅ Own scope
        console.log(outerVar);  // ✅ Parent scope
        console.log(global);    // ✅ Global scope
    }
    
    inner();
}

outer();

```

## 2. TDZ কি?
 Temporal Death Zone হলো Javascript এর behavior যেখানে variables declare করার আগে access করলে reference error দেয়।

 JavaScript Code execution এ hoisting এর মাধমে variables গুলোকে scope এর top নিয়ে যায়। এক্ষেত্রে `let`, `const` দ্বারা declare কৃত variables গুলো uninitialize অবস্থায় থাকে যতক্ষণ না code execution declaration line এ পৌছায়। আর এই hoisting থেকে actual declaration line পর্যন্ত মধ্যবর্তী zone এই হল Temporal Death Zone (TDZ)।

