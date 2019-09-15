/*eslint-env es6*/
const express = require("express");
const path = require("path");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://fescobar:claveweb@web2-ugvjv.mongodb.net/test?retryWrites=true&w=majority";

const app = express();
app.use(express.static(path.join(__dirname, "front/build")));

function readEvents(resolve, reject){
  const client = new MongoClient(url);
  client.connect((err) => {
    if(err) {
      reject(err);
      throw err;
    }
  
    console.log("conectado");
    const db = client.db("capitalNights");
    const eventos = db.collection("events");
    eventos.find({})
      .toArray((err, events) => {
        if (err) {
          reject(err);
          throw err;
        }

        console.log("# eventos: " , events.length);
        resolve(events);
        client.close();
      });
  });
}


function readData(fnCBK, errCBK) {
  fs.readFile(
    "gananLosCorruptos.json",
    (err, data) => {
      if (err) {
        errCBK(err);
        return;
      }

      console.log("dos");
      const dataParsed = JSON.parse(data);
      console.log("got data", dataParsed.length);

      fnCBK(dataParsed);
    }
  );
}


app.get("/", (req, res) => {
  console.log("Got GET /");

  function fnCallbackData(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  readData(fnCallbackData, errCBK);

});

app.get("/eventos", (req, res) => {
  
  readEvents(
    (events) => res.json(events),
    (err) => res.json(err)
  );
});

//app.listen(PORT, () => {
//  console.log(`My app is running at http://localhost:${PORT}`);
//});

module.exports = app;
