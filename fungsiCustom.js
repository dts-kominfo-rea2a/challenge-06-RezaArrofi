// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCb) => {
  let arrHasil = [];

  // baca data pertama
  fs.readFile(
    file1, {encoding:"utf8"}, (err, data) => {
      if(err){
        return fnCb(err, null);
      }

      const hasilData = JSON.parse(data);
      arrHasil.push(hasilData.message.split(" ")[1]);
    }
  );

  // baca file kedua
  fs.readFile(
    file2, {encoding: "utf-8"}, (err, data) => {
      if(err){
        return fnCb(err, null);
      } 
      
      const hasilData = JSON.parse(data);
      arrHasil.push(hasilData[0].message.split(" ")[1]);  
    }
  )

  // baca file ketiga
  fs.readFile(
    file3, { encoding: "utf8" }, (err, data) => {
      if (err) {
        return fnCb(err, null);
      }

      const hasilData = JSON.parse(data);
      arrHasil.push(hasilData[0].data.message.split(" ")[1]);
      fnCb(null, arrHasil);
    }
  )

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
