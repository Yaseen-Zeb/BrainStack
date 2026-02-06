// Callbacks
//    ↓
// Promises
//    ↓
// async / await

// callback is a normal function which is pass to another function as parameter.
// Like :
function fun(cb) {
  cb("hey, i am callback");
}
fun(function (param) {
  console.log(param);
});

// Now why use callback? The real problem
// JavaScript cannot/does'nt wait for slow tasks like:
// API calls
// Database queries
// Timers
// File reading
// If JS waited, the entire app would freeze.
function timeTakerProccess(callback) {
  setTimeout(() => {
    callback("i completed my work");
  }, 3000);
}
timeTakerProccess((taskData) => console.log(taskData)); // here we need data only if the proccess is completed. we cant such tasks withput callbacks. (in case of promises,async/await the hood it’s still a callback)

// Now what is callback hell?
// Callback hell happens when you have multiple nested callbacks, making your code hard to read, maintain, and debug.
function getUser(id, callback) {
  const sql = "SELECT * FROM users WHERE id = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}

function getOrders(userId, callback) {
  const sql = "SELECT * FROM orders WHERE user_id = ?";
  connection.query(sql, [userId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

function getPayments(orderId, callback) {
  const sql = "SELECT * FROM payments WHERE order_id = ?";
  connection.query(sql, [orderId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

// callback hell
app.get("/users", (req, res) => {
  db.getUser(req.query.id, (err, user) => {
    if (err) return res.status(500).send(err);
    db.getOrders(user.id, (err, orders) => {
      if (err) return res.status(500).send(err);
      db.getPayments(user.id, (err, payments) => {
        if (err) return res.status(500).send(err);
        res.json({ user, orders, payments });
      });
    });
  });
});
// Every next step depends on the previous
// Each callback is inside the previous callback
// Makes the code hard to read, often called the “Pyramid of Doom”

// Why it happens
// Whenever you have asynchronous operations that depend on the previous one:
// Database queries
// API requests
// Timers / animations

// Promises
// To avoid callback hell js developers decided to make Promise to manage async tasks with clean code and thats how Promise come into picture
// A Promise in JavaScript is built on top of callbacks. Under the hood, a Promise is just a wrapper around a function that takes callbacks for success and failure.
const myPromise = new Promise((resolve, reject) => {
  // This function is called the "executor"
  // It runs immediately
  let success = true;
  if (success) {
    resolve("Task completed successfully"); // calls the success callback
  } else {
    reject("Task failed"); // calls the error callback
  }
});
myPromise
  .then((result) => {
    console.log(result); // success callback
  })
  .catch((error) => {
    console.error(error); // error callback
  });
// lets solve the above callback hell with promise
function getUser(id) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM orders WHERE user_id = ?";
    connection.query(sql, [userId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

function getPayments(orderId, callback) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM payments WHERE order_id = ?";
    connection.query(sql, [orderId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

// but this is still hell
app.get("/users", (req, res) => {
  db.getUser(req.query.id)
    .then((user) => {
      getOrders(user.id)
        .then((order) => {
          getPayments(order.id)
            .then((payment) => {
              res.end({ user, order, payment });
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
});

// correct way is
app.get("/users", (req, res) => {
  db.getUser(req.query.id)
    .then((user) => {
      return getOrders(user.id).then((order) => ({ user, order }));
    })
    .then(({ user, order }) => {
      return getPayments(order.id).then((payment) => ({
        user,
        order,
        payment,
      }));
    })
    .then(({ user, order, payment }) => {
      res.end({ user, order, payment });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

// async/await
// now the time taking tasks (mean async tasks) are managing easily and readibly but still developers decided that some more improvement needed to make it more easy so async/await come into picture
// async/await is syntactic sugar on top of Promises, allowing asynchronous code to be written in a linear, readable style while still being non-blocking and fully based on Promises
async function getUserData(id) {
  try {
    const user = await getUser(id);
    const orders = await getOrders(user.id);
    const payments = await getPayments(orders[0].id);
    console.log({ user, orders, payments });
  } catch (err) {
    console.error(err);
  }
}
getUserData(1);
// Looks synchronous
// Linear flow
// Easy to read
// Single try/catch for error handling

// What async/await solves over Promises
// | Problem with Promises                        | Solution with async/await           |
// | -------------------------------------------- | ----------------------------------- |
// | Nested `.then()` chains for sequential calls | Linear, readable code               |
// | Passing multiple values between `.then()`    | Just use variables like normal      |
// | Multiple `.catch()` scattered                | Single `try/catch`                  |
// | Hard to debug with stack traces              | Stack traces look synchronous       |
// | Mixing sync + async logic                    | Can write **mixed logic naturally** |

// Important theory: under the hood
// Even though await looks like synchronous code, it’s still async:
console.log("Start");
async function run() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve("Done"), 1000)
  );
  console.log(result);
}
run();
console.log("End");
// output
// Start
// End
// Done
