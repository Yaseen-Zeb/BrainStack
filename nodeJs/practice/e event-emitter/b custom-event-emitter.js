const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "Yaseen");

// More standerd way for custom function names

class ChatApp extends EventEmitter {
  // can also use module pattern import/export
  sendMessage(user, message) {
    this.emit("message", { user, message });
  }
}

const chat = new ChatApp();

chat.on("message", ({ user, message }) => {
  console.log(`${user} says: ${message}`);
});

chat.sendMessage("Alice", "Hi everyone!");
chat.sendMessage("Alice", "Share updates");
