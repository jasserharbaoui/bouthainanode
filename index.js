var fs = require("fs");


fs.writeFile('welcom.txt', 'welcom node!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   
   
   fs.readFile('welcom.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});