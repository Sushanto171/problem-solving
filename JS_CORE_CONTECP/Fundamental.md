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





## 2. Hoisting কি?

Hoisting হলো JavaScript এর একটা default behavior যেখানে execution phase এর আগে অর্থাৎ creation phase এ variable এবং function declarations কে তাদের scope এর top এ তুলে নিয়ে যায় (conceptually)। মানে একটা variable নিচে declare করলেও, JavaScript internally সেটাকে উপরে নিয়ে 

### কী কী Hoist হয়?
1. Variable Declarations (var, let, const)
2. Function Declarations
3. Function Expressions (partially)
4. Class Declarations (with TDZ)

### 1. Variable Declarations (var, let, const)
- ### var Hoisting - বিস্তারিত
    `var` declarations scope এর top এ hoist হয় এবং `undefined` দিয়ে initialize হয়। এটাই `var` এর সবচেয়ে confusing behavior।
- ### let এবং const Hoisting - বিস্তারিত
    `let` এবং `const` ও hoist হয়, কিন্তু initialize হয় না। এরা Temporal Dead Zone (TDZ) এ থাকে declaration line 
    
### 2. Function Declaration Hoisting - বিস্তারিত
Function declarations সম্পূর্ণভাবে hoist হয় - declaration এবং definition দুটোই। তাই function কে define করার আগেই call করা যায়।

### 3. Function Expression Hoisting - বিস্তারিত
- ### Function expression
    Function expressions variable এর মতো hoist হয়। Variable declaration hoist হয় কিন্তু assignment (function) হয় 
- ### Arrow Function 
    Arrow functions ও function expressions এর মতো behave করে। Variable hoisted হয় কিন্তু function assignment হয় না।

### 4. Class Hoisting - বিস্তারিত
Classes hoist হয় কিন্তু `let`/`const` এর মতো TDZ তে থাকে। Declaration আগে use করা যায় না।

## 3.Temporal Death Zone (TDZ) কি?
 Temporal Death Zone হলো Javascript এর behavior যেখানে variables declare করার আগে access করলে reference error দেয়।

 JavaScript Code execution এ hoisting এর মাধমে variables গুলোকে scope এর top নিয়ে যায়। এক্ষেত্রে `let`, `const` দ্বারা declare কৃত variables গুলো uninitialize অবস্থায় থাকে যতক্ষণ না code execution declaration line এ পৌছায়। আর এই hoisting থেকে actual declaration line পর্যন্ত মধ্যবর্তী zone এই হল Temporal Death Zone (TDZ)।

## 4. JIT কী?
JIT মানে হলো *"Just-In-Time Compilation"* - এটা একটা compilation technique যেখানে code run করার সময়ই (runtime এ) compile হয়। JavaScript engine code কে machine code এ convert করে execution এর ঠিক আগ মুহূর্তে, যখন দরকার তখন।

## 5. JavaScript concurrency কি?
  Concurrency মানে হলো একই সময়ে multiple tasks handle করার capability। এটা এমন যেন তুমি একসাথে গান শুনছো, পড়াশোনা করছো আর খাচ্ছো - মনে হয় সব একসাথে হচ্ছে, কিন্তু আসলে তুমি দ্রুত tasks এর মধ্যে switch করছো।
### Technical ব্যাখ্যা:
Concurrency হলো একটা programming concept যেখানে multiple tasks একসাথে progress করে। JavaScript এ এটা asynchronous programming এর মাধ্যমে achieve করা হয়, যদিও JavaScript single-threaded।
``` javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
```

**Step-by-step Execution:**
```
Step 1: console.log("1")
┌──────────────┐
│ Call Stack   │
│ console.log  │  → Output: "1"
└──────────────┘

Step 2: setTimeout() 
┌──────────────┐         ┌────────────────┐
│ Call Stack   │         │   Web API      │
│ setTimeout   │────────▶│  Timer (0ms)   │
└──────────────┘         └────────────────┘
                                │
                                │ After 0ms
                                ▼
                         ┌────────────────┐
                         │ Callback Queue │
                         │ [callback]     │
                         └────────────────┘

Step 3: console.log("3")
┌──────────────┐
│ Call Stack   │
│ console.log  │  → Output: "3"
└──────────────┘

Step 4: Call Stack empty, Event Loop picks callback
┌──────────────┐         ┌────────────────┐
│ Call Stack   │  ◀────  │ Callback Queue │
│ callback     │         │                │
└──────────────┘         └────────────────┘
                         → Output: "2"
```

**Output:**
```
1
3
2
```

### Core Components বিস্তারিত (Event Loop)
1. Call Stack (Execution Context):
JavaScript code execute করার জায়গা। LIFO (Last In, First Out) principle follow করে।
2. Web APIs (Browser/Node.js Runtime):
Browser বা Node.js যে features provide করে, যেগুলো JavaScript engine এর বাইরে run হয়।
    #### Examples:
      - setTimeout() / setInterval()
      - fetch() / XMLHttpRequest
      - DOM Events (click, scroll, etc.)
      - Promise
      - File I/O (Node.js)

      👉 Important: এগুলো asynchronously run হয়, main thread block করে না।
3. Callback Queue (Task Queue):
Asynchronous operations complete হলে তাদের callbacks এখানে wait করে। FIFO (First In, First Out) order follow করে।
    #### Types:
    - a. Macro Task Queue (Task Queue)

    - b. Micro Task Queue (Job Queue) - Higher Priority!
    #### Priority Order:

     - Call Stack (highest)
     - Microtask Queue
     - Macrotask Queue (lowest)

4. Event Loop:
Continuously `Call Stack` এবং `Queues` monitor করে , আর callbacks কে Call stack এ push করে।

