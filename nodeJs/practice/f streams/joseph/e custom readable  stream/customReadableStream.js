const stream = require("stream");
const fs = require("fs");

class MyReadable extends stream.Readable {
  constructor(filePath) {
    super();
    this.current = 1;
    this.filePath = filePath;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filePath, (err, fd) => {
      if (err) throw err;
      this.fd = fd;
      callback();
    });
  }

  _read(size) {
    console.log("from read");
    
    fs.read(this.fd, (err, bytesRead, buffer) => {
      if (bytesRead === 0) {
        this.push(null); // EOF
        return;
      }
      if (err) throw err;
      console.log(buffer);

      this.push(buffer);
    });
  }

  _destroy() {
    fs.close(this.fd, () => {});
  }
}

const r = new MyReadable("./text.txt");
// r.read()
r.on("data", (chunk) => console.log(chunk.toString()));
// r.on("end", chunk => console.log("ended"));
