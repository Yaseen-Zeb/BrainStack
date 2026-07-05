
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

