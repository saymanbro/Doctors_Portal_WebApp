const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs-extra')
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('doctors'));
app.use(fileUpload());

const uri = "mongodb+srv://doctor:doctorsPortal00@cluster0.enti9.mongodb.net/doctorsPortal?retryWrites=true&w=majority"

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("doctorsPortal").collection("appointments");
  const doctor = client.db("doctorsPortal").collection("doctors");
  app.post('/registeredAppointment',(req, res) => {
      const appointment = req.body;
      console.log(appointment);
      collection.insertOne(appointment)
      .then(result =>{
         res.send(result.insertedCount > 0)
      })
     
  })
   app.post('/AppointmentByDate',(req, res) => {
      const date = req.body;
 
      collection.find({date: date.date})
      .toArray((err,documents) =>{
            res.send(documents)
           
      })
      
  })
/// api to upload img //////////////////////////////////
  app.post('/addDoctor',(req, res) =>{
      const file = req.files.file
      const name = req.body.name
      const email = req.body.email
      console.log(name, email, file);
      const filePath = `${__dirname}/doctors/${file.name}`;
      file.mv(filePath ,err =>{
          if(err){
              console.log(err)
              return res.status(500).send('cant bor')
          }
          const newImg = fs.readFileSync(filePath)
          const enImg = newImg.toString('base64')
          var image = {
              contentType:req.files.file.mimetype,
              size:req.files.file.size,
              img: Buffer(enImg, 'base64')
          }
          doctor.insertOne({name, email, image})
          .then(result =>{
              fs.remove(filePath, error =>{
                  if(error){
                      console.log(error);
                  }
              })
              res.send(result.insertedCount > 0)
          })
        // return  res.send({name: file.name , path :`/${file.name}`})
      })

    
  })
  app.get('/doctors',(req, res)=>{
      doctor.find({})
      .toArray((err, documents)=>{
          res.send(documents)
      })
  })

app.get('/patients', (req, res) =>{
    collection.find({})
    .toArray((err,documents) =>{
        res.send(documents)
    })
})

  
});


app.get('/',(req,res)=>{
    res.send('hello bro Good morning')
})

app.listen(PORT);