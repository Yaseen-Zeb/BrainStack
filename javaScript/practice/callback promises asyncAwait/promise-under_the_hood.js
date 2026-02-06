class MyPromise {
  constructor(executor) {
    // 1. Internal state
    this.state = "pending";     // pending | fulfilled | rejected
    this.value = undefined;
    this.reason = undefined;

    // 2. Callback queues
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // 3. Resolve function
    const resolve = (value) => {
      if (this.state !== "pending") return;

      this.state = "fulfilled";
      this.value = value;

      // run stored success callbacks
      this.onFulfilledCallbacks.forEach(cb => cb(value));
    };

    // 4. Reject function
    const reject = (reason) => {
      if (this.state !== "pending") return;

      this.state = "rejected";
      this.reason = reason;

      // run stored error callbacks
      this.onRejectedCallbacks.forEach(cb => cb(reason));
    };

    // 5. Execute executor immediately
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // 6. then method
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {

      const handleFulfilled = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      const handleRejected = (reason) => {
        try {
          if (onRejected) {
            const result = onRejected(reason);
            resolve(result);
          } else {
            reject(reason);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "fulfilled") {
        queueMicrotask(() => handleFulfilled(this.value));
      }

      if (this.state === "rejected") {
        queueMicrotask(() => handleRejected(this.reason));
      }

      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  // 7. catch method
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}


const p = new MyPromise((resolve, reject) => {
  resolve(10);
});

p.then(v => {
  console.log(v);
  return v * 2;
}).then(v => {
  console.log(v);
});
