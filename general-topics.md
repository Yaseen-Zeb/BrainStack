
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