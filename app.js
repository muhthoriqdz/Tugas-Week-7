const fs = require("node:fs");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const app = {};

// contoh script pembuatan folder
app.makeFolder = () => {
  rl.question("Masukan Nama Folder : ", (folderName) => {
    fs.mkdir(__dirname + `/${folderName}`, () => {
      console.log("success created new folder");
    });
    rl.close();
  });
};

// To Do : lanjutkan pembuatan logic disini

// * **make-file** : digunakan untuk membuat sebuah file
app.makeFile = () => {
  rl.question("Masukan Nama Folder : ", (folder) => {
    rl.question("Masukan Nama File : ", (file) => {
      rl.question("Masukan Nama Extension : ", (ext) => {
        console.log(folder, file, ext);

        //jikadirectory/folder tidak ada
        if (!fs.existsSync(folder)) {
          // sebuah metod untuk membuat folder
          fs.mkdirSync(folder);
        }
        fs.writeFileSync(`${folder}/${file}.${ext}`, "");
        rl.close();
      });
    });
  });
};

module.exports = app;
