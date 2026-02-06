const fs = require("fs");
const fileController = require("./fileController");

const commandFilePath = "./command.txt";
const watcher = fs.watch(commandFilePath);
const CREATE_FILE = "create a file";
const DELETE_FILE = "delete a file";
const RENAME_FILE = "rename a file";
const ADD_TO_FILE = "add to file";

watcher.on("change", (eventType, filename) => {
  fs.open(commandFilePath, "r", (error, fd) => {
    if (error) throw error;
    fs.stat(commandFilePath, (er, stats) => {
      if (er) throw er;

      const buffer = Buffer.alloc(stats.size); // Buffer to store bytes
      const offset = 0; // Where to start writing in the buffer (usually 0)
      const length = buffer.byteLength; // Number of bytes to read (usually buffer.length)
      const position = 0; // Where to start reading in file (0 for beginning)

      fs.read(fd, buffer, offset, length, position, (err, bytesRead, buff) => {
        if (err) throw err;
        // console.log(bytesRead, buff.toString("utf-8"));
        const command = buffer.toString("utf-8");

        // create file:
        // create <path>
        if (command.includes(CREATE_FILE)) {
          const path = command.substring(CREATE_FILE.length + 1);
          fileController.createFile(path);
        }

        // delete file:
        // delete <path>
        if (command.includes(DELETE_FILE)) {
          const path = command.substring(DELETE_FILE.length + 1);
          fileController.deleteFile(path);
        }

        // rename file:
        // rename <path> to <new-path>
        if (command.includes(RENAME_FILE)) {
          //   const paths = command.substring(RENAME_FILE.length + 1).split(" to ");
          //   const oldFilepath = paths[0];
          //   const newFilepath = paths[1];

          const _idx = command.indexOf(" to ");
          const oldFilepath = command.substring(RENAME_FILE.length + 1, _idx);
          const newFilepath = command.substring(_idx + 4);
          fileController.renameFile(oldFilepath, newFilepath);
        }

        // add to file:
        // add to file <path> this content: <file-content>
        if (command.includes(ADD_TO_FILE)) {
          //   const paths = command.substring(ADD_TO_FILE.length + 1).split(" to ");
          //   const oldFilepath = paths[0];
          //   const newFilepath = paths[1];

          const _idx = command.indexOf(" this content: ");
          const path = command.substring(ADD_TO_FILE.length + 1, _idx);
          const content = command.substring(_idx + 15);
          fileController.addToFile(path, content);
        }
      });
    });
  });
});
