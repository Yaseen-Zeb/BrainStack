
# **General Topics**

## Table of Contents

1. **Ports**
2. **Firewall**
3. **Proxy**
4. **Encoding**
5. **Encryption**
6. **Hashing**
8. **Symmetric Encryption**
9. **Asymmetric Encryption**
7. **Why SSL/TLS?**
10. **SSL/TLS Handshake**
11. **Digital Signature vs Encryption/Decryption**
12. **How does the receiver know which algorithm to use?**
13. **Message Queue vs Pub Sub vs Kafka**
14. **Api vs Webhook**
15. **Debouncing vs Throttling**
16. **Currying**
17. **Bubbling, Capturing**
18. **What is a CDN**
19. **Session, Cookie and JWT Token**





# Ports
* **IP Address** = Building address (Computer address on the network)
* **Port** = Apartment number (Application/service address inside the computer)
When network traffic reaches a computer, the operating system uses the port number table to determine which application should receive the data.
## Note
Only networking applications can open **listening ports** and accept incoming connections.
## Examples
### Servers (Listening Ports)
- Web Server (Nginx/Apache) → Port 80, 443
- Node.js API Server → Port 3000
- Vite Development Server → Port 5173
- MySQL → Port 3306
- SSH Server → Port 22
### Clients (Usually Not Listening)
- Web Browser
- WhatsApp Desktop
- Discord
- Email Clients
These applications typically connect to remote servers rather than opening listening ports for incoming connections.
## Example:
Browser
↓
google.com:443
Your browser may temporarily use a random port such as:
192.168.1.100:52341 → google.com:443
The temporary port is assigned by the operating system and released when no longer needed.





# Real HTTPS Flow SSL
- Browser → Hello
- Server → Certificate + Public Key
- Browser verifies certificate
- Browser creates session key
- Browser encrypts session key using Public Key
- Server decrypts using Private Key
- Both use session key for communication





# Why SSL/TLS? 
## Without certificate verification
Client asks server for public key.
Attacker (MITM) intercepts.
Attacker sends AttackerPubKey instead of ServerPubKey.
Client generates SessionKey.
Client encrypts SessionKey with AttackerPubKey and sends it.
Attacker decrypts and learns SessionKey.
Attacker encrypts the same SessionKey (or a different one) with ServerPubKey and forwards it.
Server decrypts and gets SessionKey.
## Now:
Client has SessionKey
Server has SessionKey
Attacker has SessionKey





# With certificate verification
The server gets a certificate from a CA where the CA signs (hash of server domain + server public key) using the CA private key, and includes that signature in the certificate
The server sends this certificate to the client during the TLS handshake
The client verifies the certificate using the CA public key stored in the Root Certificate Store
Now, if an attacker replaces the server public key inside the certificate (e.g., puts their own public key instead of the real server’s)
The CA signature no longer matches the modified data because the signature was created for the original (server public key + domain)
When the client verifies the signature using the CA public key, it gets a mismatch
So the client detects tampering, rejects the certificate, and the TLS connection is not established (attack fails)





# Message Queue vs Pub Sub vs Kafka
## Message Queue
- One consumer gets each message
- Temporary storage
### Example:
- Send task assignment email to Ali


## Pub/Sub
- Multiple consumers get the same message
- Temporary storage
### Example:
- Send task assignment email to Ali + Notify Ali's manager + Send notification to Ali's team on one event.



## Kafka
- Multiple consumers get the same message
- Long retention (days/months/forever)
### Example:
- Order processing system where order can be used for analytics, audit logs, reporting, etc.
### Important Note
All three systems can be used in a streaming architecture because producers and consumers can work continuously.
### The difference:
- Message Queue: stores messages until delivery.
- Kafka: stores events even after delivery, according to the retention policy.





# Debouncing vs Throttling
Both are optimization techniques to control the rate of function calls.
## Debounce
Delay and wait for calm/break in inputs
``` js
const inp = document.querySelector("input");
let timer;

let debouncing = () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(inp.value);
  }, 2000);
};

inp.addEventListener("input", debouncing);


// User types 'a' → wait 200ms
// User types 'p' → reset timer, wait 200ms
// User types 'p' → reset timer, wait 200ms
// User types 'l' → reset timer, wait 200ms
// User types 'e' → reset timer, wait 200ms
// Now 200ms passed without input → call API

// Output: API called only ONCE
```
## Throttle
Fire once every 200ms
``` js
const inp = document.querySelector("input");
let timer;

let throttling = () => {
  if (timer) return;
  timer = setTimeout(() => {
    console.log(inp.value);
    timer = null;
  }, 2000);
};

inp.addEventListener("input", throttling);
      
// User types 'a' → call API immediately
// Wait 200ms (ignore all other inputs)
// User types 'p'
// User types 'p'
// User types 'l' 
// User types 'e' 
// 200ms passed → call API
// user types 'w' → call API
// user types 'w' → call API
// user types 'w' → call API
// user types 'w' → call API
// user types 'w' → call API
// user types 'w' → call API
// 200ms passed → call API


// Output: No breaks in between typing &  API called 2 times (in this case DB will get only 1 request insdead of 2 as it reset timer on every call)
```
## The Problem 
let say we also need the event properties in the callback of listner, in the above examples we are not able to access the event properties, like element, target, etc. 
In that case we can use the below approach fit for both debouncing and throttling:
```js
// for debouncing
function debounce(func, delay) {
  let timer;

  return function(...args) {
    const context = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
const debouncedLog = debounce((event) => console.log(event), 2000);
input.addEventListener("input", debouncedLog);

// for throttling
function throttle(func, delay) {
        let isThrottled = false;

        return function (...args) {
          if (isThrottled) return;
          func.apply(this, args);
          isThrottled = true;
          setTimeout(() => {
            isThrottled = false;
          }, delay);
        };
      }
      const throttledLog = throttle((event) => console.log(event), 2000);
      window.addEventListener("resize", throttledLog);
```

## When to use
### Debounce:
- Search suggestions
- Auto-save

### Throttle:
- Resize events
- Scroll events
- Mouse move
- API calls on infinite scroll





# Currying
Currying in JavaScript is a functional programming technique that transforms a function with multiple arguments into a sequence of nesting functions, each taking a single argument. Instead of passing all parameters simultaneously, it takes the first parameter and returns a new function. This returned function accepts the second parameter and returns another function, repeating this pattern until all expected arguments are provided and the final result is resolved.
```js
// normal function without currying
function add(a, b, c ,d) {
  return a + b + c + d;
}

console.log(add(5,10,15,20)); // 50
// here we pass both arguments at once (in single function call)


// with currying
function curriedAdd(a) {
  return function(b) {
    return function(c){
      return function(d){
        return a + b + c + d;
      }
    }
  };
}

const add5 = curriedAdd(5);
const add5and10 = add5(10); 
const add5and10and15 = add5and10(15); 
const add5and10and15and20 = add5and10and15(20); 
console.log(add5and10and15and20); // returns 50
// or we can do like this
console.log(curriedAdd(5)(10)(15)(20)); // returns 50
```

Now may seem currying is useless but it's not.
For example: 
```js
// Imagine you're building an e-commerce website.
// The tax is always 18%.
function calculatePrice(price, tax) {
  return price + (price * tax) / 100;
}

console.log(calculatePrice(100, 18));
console.log(calculatePrice(200, 18));
console.log(calculatePrice(500, 18));
// Notice something? We're repeating 18 again and again.


// Now the goal is to avoid this repetition:
function calculateTax(tax) {
  return function calculatePrice(price) {
    return price + (price * tax) / 100;
  }
}
const calculate18Tax = calculateTax(18);
console.log(calculate18Tax(100));
console.log(calculate18Tax(200));
console.log(calculate18Tax(500));

// Now let say we also need 10% and 20% tax. So with currying we can do like this:
const calculate10Tax = calculateTax(10);
const calculate20Tax = calculateTax(20);

console.log(calculate10Tax(100));
console.log(calculate10Tax(200));
console.log(calculate20Tax(500));
console.log(calculate20Tax(250));
```
### Note:
- Not necessary that currying function have single parameter
- Not every returned function is curried
- Every curried function have more than one returned function

```js
function a(x) {
  return function (y) {
    return x + y;
  };
}

console.log(a(1)(2)); // 3


function b(a) {
  return function (name) {
    console.log(name);
  };
}

// A ✅ Currying (it represents transforming add(x, y) into add(x)(y)).
// B ❌ Not currying (it's simply a function returning another function).
```





# Bubbling, Capturing
Bubbling and Capturing are the two phases of Event Propagation in the DOM. When an event (like a click) happens on a nested HTML element, it doesn't just trigger on that single element; it propagates through the document tree. The order in which this propagation travels determines whether it's bubbling or capturing.

## Capturing (Trickling)
During capturing phase, the event travels **downwards** from the window to the target element, passing through all parent elements on which event listeners are attached (until it reaches the target element).

### Capturing Flow:
Window → Document → html → body → parent → child (Target)

### Example
```js
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => console.log("Grandparent"), true);
parent.addEventListener("click", () => console.log("Parent"), {capture:true});
child.addEventListener("click", () => console.log("Child"), true);
// true or {capture:true} indicates capturing phase

// Output: 
// Grandparent
// Parent
// Child
```

## Bubbling
During bubbling phase, the event travels **upwards** from the target element to the window, passing through all parent elements on which event listeners are attached (until it reaches the window).

### Bubbling Flow:
Child (Target) → parent → grandparent → body → html → Document → window

### Example
```js
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => console.log("Grandparent"));
parent.addEventListener("click", () => console.log("Parent"));
child.addEventListener("click", () => console.log("Child"));
// Default phase is bubbling (no need to pass true or {capture:false})

// Output:
// Child
// Parent
// Grandparent
```

### Important Note
Flow of capturing and bubbling is:
- Window → Document → html → body → parent → child (Target) → parent → grandparent → body → html → Document → window
- So the event reach to target it will obviously pass through all parent (capture phase), and during passing if there a capture event listener run if not continue the step down journy, when reach to target it execute target event listener and then again start journy to top of window (bubble phase), and during passing if there a bubble event listener run if not continue the step up journy.

See some more examples on internet that how capturing and bubbling works with different different elements and in combination with each other, and try to understand it clearly.

## Stop Propagation
Stop Propagation is a method that stops the propagation of an event to the parent and grandparent elements (both bubbling and capturing phases).
```js
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => console.log("Grandparent"));
parent.addEventListener("click", () => console.log("Parent"), {capture:true});
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child")
}, true);

// Output:
// Child
```

## Event Delegation
Event delegation is a technique that allows you to handle events on multiple elements by attaching a single event listener to their common ancestor.

### Example
```html
<div id="parent">
<p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Button 4</button>
  <button>Button 5</button>
</div>
```
```js
const parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.textContent + " clicked");
  }
});

// Output:
// Button x clicked

// Explaintion
// Step 1 User clicks Button 2
// Step 2 Browser starts the Capturing Phase, Internally Window → Document → html → body → parent → Button 2.
// as there is no capture phase listener addEventListener("click", ..., true);
// Step 3 Target Phase: Button 2, Now it checks "Does Button 2 have a click listener?", No. Nothing runs.
// Step 4: Next, Bubbling Phase starts automatically Button 2 → parent → body → html → Document → Window.
// While moving upward it asks each element "Do you have a click listener?".
// Button 2 → No. Continue.
// parent → Yes!. Execute: callback(); e.target Still Button 2
// body → No. Continue.
// html → No. Continue.
// Document → No. Continue.
// Window → No. Continue.
```





# What is a CDN?
CDN (Content Delivery Network) is a network of servers distributed around the world.
Instead of every user downloading files from your main (origin) server, users download them from the nearest CDN server.
          Origin Server
              |
   ----------------------------
   |            |            |
CDN USA      CDN Europe    CDN Asia
   |            |            |
Users        Users         Users
The goals are:
- Faster loading
- Lower latency
- Less work for the origin server
- Handle millions of users

## But what if nobody ever requests the same file?
Excellent question.
Suppose
1000 users
1000 different photos
Each photo requested exactly once.
Then
photo1
photo2
photo3
...
photo1000
Every request is a cache miss.
In this case
The CDN provides almost no caching benefit and hit main server for every request.
This actually happens.

## Then why use a CDN?
Because websites contain many shared static files.
For example
logo.png
favicon.ico
bootstrap.css
main.css
app.js
React bundle
Fonts
Icons
Images
Videos
And at first every visitor will download these files once.
So first request will be cache miss, and then next time it will be cache hit.
Which is very good for website performance.

## What about Netflix or YouTube?
You may think
Everyone watches different videos.
Not really.
Trending content is watched by millions.
Example
New Marvel Trailer
Millions request
trailer.mp4
The CDN already has it.
Same for
Popular YouTube videos
The first few requests fetch it.
After that
CDN -> User
### What about unpopular videos?
Suppose someone watches
A random video uploaded 3 years ago
Maybe no CDN has it.
User
   |
CDN
   |
(Cache miss)
   |
Origin
The CDN downloads it.
If nobody watches it again,
the CDN may later remove it.

## CDN caches are limited
A CDN cannot store the entire internet.
It has limited storage.
So it uses cache eviction algorithms like
Least Recently Used (LRU)
Least Frequently Used (LFU)
Example
Cache Size
100 GB
Popular files stay.
Old unused files are removed.
Popular
- logo.png
- app.js
- React bundle
Removed
- old_video.mp4
- unused_image.png

## What about dynamic data?
Suppose you visit
Your bank account
The page contains
Balance: $5,214
Should a CDN cache it?
No.
Otherwise another user might receive your balance, which would be a serious security issue.
Dynamic or personalized data is usually fetched from the origin server (or cached with very strict rules).
Examples:
- Bank balances
- Shopping carts
- User dashboards
- Notifications
- Messages
As these are personalized data we can use the browser cache.





# Session, Cookie and JWT Token
This is one of the most important concepts in web development.
## The problem
HTTP is stateless, each request to the server is independent of the others. This means that the server cannot remember anything about previous requests from the same user, and thus cannot maintain a consistent state across multiple requests.
Example:
Request 1
GET /login
↓
Server responds
Later...
Request 2
GET /profile
The server has no memory of Request 1 (as it already logged in).
It treats every request like this:
"Hello stranger."
Even if the same browser sends thousands of requests.

Now engineers came up with a solutions **Session & Cookies**.

### Session & Cookies
#### Session
Session are created on the server side and are used to store information about the user. We can store session on:
- Server Memory (efficient but not persistent, can be lost if server restarts)
- Database (persistent but slow as each request will hit database)
- Redis (persistent, fast but more costly than memory and add new layer added just for session)
- etc.
#### Cookies
Cookies are small pieces of data stored on the client side (in the user's browser) and automatically sent with every request to the server. 
The intersting things is we can set cookie from server and from client as well.
#### How Cookies and Session works together:
- User logs in
- Server creates a session what it mean is stores user data in some memory or database (its upto developer how much data to store in session like user id, username, email, role, etc. and generate a unique random string as Session ID)
```javascript
// For example what the data the server stores in session
"sid_abc123": {
    "user_id": 123,
    "username": "john_doe",
    "email": "[EMAIL_ADDRESS]",
    "role": "user",
    "iat": 1678886400,
    "exp": 1678886400
}
// Incase of databse it will be the same but instead of storing in memory it will be stored in database table.
```
- Server sends that Session ID to the client in response or sets `Set-Cookie` header and client stores it in a cookie
- As the session stores in browser cookie, on every request, client sends the Session ID
- Server searches for the session data using the Session ID.
- And that how server identifies the user.
#### Few Problems with Session Cookies
1.  **Stateful Architecture**: It is stateful, it requires server to store session data for every active user, which can consume significant memory and storage resources. In large-scale applications with many users, this will need search for session data in memory or database or redis affecting the response time.
2.  **Scalability Issues with Multiple Servers**: In a distributed system with multiple servers, session state needs to be synchronized across all servers, often requiring a shared session store like Redis or a database. This adds complexity and additional cost.


### JWT Token
JWT (JSON Web Token) use a secret key to create a signed(signature) token using some data(like user id, username, email, role, etc.), which is then sent to the client. The client can then send the token back to the server with each request, and the server can verify the token using the same secret key.
It may seem confusing lets break it down.
- User logs in and enters username and password
- The server checks the database and if found.
- Now the server creates a JWT using user `data` and `secret key`.
- JWT does something like this (conceptually):
- - Payload
- - {id:25,role:"admin"} + secret_key 
- - ↓
- - Signature (A8f2Ksd9lP...)
- - Then JWT combines everything.
- - Header.Payload.Signature
- - Example
- - xxxxx.yyyyy.zzzzz
- This whole string is the JWT
- Server sends it to the browser.
- Browser stores it in some storage like:
    - LocalStorage
    - SessionStorage
    - HttpOnly Cookie
- Now on every request, client sends the JWT to the server and server verifies it using the secret key and if valid, it sends the response if not then it will reject the request.
#### How verification is done?
- As we disscissed the signature is created using user data and secret key and this signature become part of the JWT Header.Payload.Signature.
- According to the Signature definition, it checks the integrity of the data (mean if we pass the same data and secret key to it, it will generate the same signature. or if we pass the different data or secret key it will generate different signature.)
- Now here comes the verification part. Server splits the JWT into Header, Payload and Signature and decodes the Header and Payload. And then using the Header and Payload and the secret key it generates a new signature. And if the generated signature matches with the original signature (that we got from decoding) then the JWT is valid and server sends the response. Otherwise it rejects the request.
**Note**: JWT proccess is statless, as it does not store any thing, it does not search any thngs. it just verify the signature.
