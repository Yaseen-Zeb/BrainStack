const fs = require("fs");

let addedContent;
const fileController = {
  createFile(path) {
    fs.open(path, "r", (error, readfd) => {
      if (!error) {
        fs.close(readfd, () => {});
        return console.log("file already exist");
      }

      fs.open(path, "w", (error, writefd) => {
        if (error) throw error;
        console.log("file created");
        fs.close(writefd, () => {});
      });
    });
  },

  deleteFile(path) {
    fs.unlink(path, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          return console.log("file not found");
        }
        throw err;
      }
      console.log("file deleted");
    });
  },

  renameFile(oldFilePath, newFilePath) {
    if (!oldFilePath || !newFilePath) {
      return console.log("Incorrect command");
    }
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          return console.log("file not found");
        }
        throw err;
      }
      console.log("file renamed");
    });
  },

  addToFile(path, content) {
    if (addedContent === content) return;
    if (!path) {
      return console.log("Incorrect command");
    }
    fs.open(path, "a", (error, fd) => {
      if (error) throw error;
      fs.write(fd, content, (error) => {
        if (error) throw error;
        fs.close(fd, () => {
          addedContent = content;
          console.log("content added");
        });
      });
    });
  },
};

module.exports = fileController;
