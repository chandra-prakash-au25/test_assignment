const posted = require("../model/blog");
const steps = require("../model/step");
const router = require("express").Router();


// Get All posts
const post_all = async (req, res) => {
  console.log('hhhhhh')
    try {
        const posts = await posted.find();
        res.json(posts);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single post
const post_details = async (req,res) => {
    try {
        console.log(req.params.postId)
        const post = await posted.findById(req.body.postId);
        res.json(post);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New post
const post_create = async (req, res) => {
    console.log(req.file,'tyuio')
    const userspost = new posted({
        title: req.body.title,
        post: req.body.data,
        image: req.file.path,
      });
    
      try {
        const savedPost = await userspost.save();
        res.send(savedPost);
      } catch (error) {
        res.status(400).send(error);
      }
};



// Delete post
const post_delete = async (req, res) => {
    try {
        const r_post = await posted.findByIdAndDelete(req.body.postId);
        res.json(r_post);
      } catch (error) {
        res.json({ message: error });
      }
};


const step_create = async (req, res) => {

  var num1=req.body.first
  var num2=req.body.second
  if(num1.length!=num2.length){
    while(num1.length!=num2.length){
      if(num1.length>num2.length){
        num2=("0"+num2)
      }
      else{
        num1=("0"+num1)
      }
    }
  }
  var datastore="";
  var carry=0;
  var sumstr=''
  var carrystr=''
  for(let i=0;i<num1.length;i+=1){
    const index=(num1.length-i)-1
    number1=parseInt(num1[index])
    number2=parseInt(num2[index])
    sum=String(number1+number2+carry)
    car=''
    for(let j=0;j<sum.length-1;j+=1){
      car+=sum[j]
    }

    SumString=parseInt(sum[(sum.length)-1])
    if(index==0){
     SumString=parseInt(sum)
    }
    if(car!=""){
    carry=parseInt(car)
    car=car+'_'
    }
    else{
      carry=0
      car=car+String(carry)+'_'

    }
    if(index!=0){
      sumstr=SumString+sumstr
      carrystr=carry+carrystr
    }
    else{
      sumstr=SumString+sumstr

    }
    data="{ carryString:"+carrystr+"_,SumString:"+sumstr+"} +"
    //console.log((data))
    datastore+=(data)
  }

  console.log(datastore)
  const steppost = new steps({
    steps:datastore
  });
  
    try {
      const savedstep = await steppost.save();
      res.send(savedstep);
    } catch (error) {
      res.status(400).send(error);
    }
};


module.exports = {
  step_create,
    post_all, 
    post_details, 
    post_create, 
    post_delete
  }