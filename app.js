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

app.extSorter = () => {
  const res = fs.readdirSync("unorganize_folder");
  console.log(res);

  for (let index = 0; index < res.length; index++) {
    const element = res[index];
    const ext = element.split(".")[element.split(".").length - 1];
    // text
    if (["txt", "pdf", "md"].includes(ext)) {
      fs.mkdir(__dirname + `/text`, () => {
        console.log("success created new folder text");
        fs.rename(
          __dirname + `/unorganize_folder` + "/" + element,
          __dirname + `/text` + "/" + element,
          (err) => {
            if (err) throw err;
            console.log("Rename text complete!");
          }
        );
      });
    } else if (["jpg", "png"].includes(ext)) {
      // image
      fs.mkdir(__dirname + `/image`, () => {
        console.log("success created new folder image");
        fs.rename(
          __dirname + `/unorganize_folder` + "/" + element,
          __dirname + `/image` + "/" + element,
          (err) => {
            if (err) throw err;
            console.log("Rename Image complete!");
          }
        );
      });
    } else {
      // lainnya
      fs.mkdir(__dirname + `/undefined_type`, () => {
        console.log("success created new folder undifined type");
        fs.rename(
          __dirname + `/unorganize_folder` + "/" + element,
          __dirname + `/undefined_type` + "/" + element,
          (err) => {
            if (err) throw err;
            console.log("Rename undefined type complete!");
          }
        );
      });
    }
  }
  rl.close();
  return;
};

module.exports = app;
