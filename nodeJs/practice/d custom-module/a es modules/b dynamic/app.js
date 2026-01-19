let isAdmin = true;

if (isAdmin) {
  const adminModule = await import("./admin.js");
  adminModule.initAdmin();
} else {
  const userModule = await import("./user.js");
  userModule.initUser();
}

// Why is this dynamic?
// Because:
// It runs when the code reaches that line
// The path can be computed

// Used heavily in:
// React
// Vue
// Angular
// Large Node apps