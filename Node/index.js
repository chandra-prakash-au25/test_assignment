
const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const userpost = require("./routes/routes");
const cors=require('cors')
app.use(cors())
const multer =require('multer')
const upload = multer({ dest: './images' })
app.use('/images',express.static('./images'))

try {
    mongoose.connect('mongodb+srv://chandra:chandra@cluster0.wpffovp.mongodb.net/?retryWrites=true&w=majority',  () =>
    console.log("connected"));    
    }
catch (error) { 
    console.log("could not connect");    
    }

app.get("/post", userpost.post_all);
app.post("/create_post",upload.single('image'), userpost.post_create);
app.post("/post/single", userpost.post_details);
app.post("/post/single/del", userpost.post_delete);
app.post("/steps/step", userpost.step_create);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})