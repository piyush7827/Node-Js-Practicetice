// const app = require("./app")
// console.log(app.z());

// const fs = require("fs");
// fs.writeFileSync("hello1.txt", "Goooooood!!!");

// // api creation
// const http = require("http");
// const data = require("./data")
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data))
//     res.end()

// }).listen(4500)

// creating multiple files

// const fs = require("fs")
// const path = require('path')
// const dirpath = path.join(__dirname,"files")
// console.log(dirpath);

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirpath +"/hello"+i+".txt", "A simple file")

//     // fs.writeFileSync(`hello${i}.txt`, "A simple file")

// }

// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
// console.log(item);
//     })

// })

// CRUD with file system

// const fs = require("fs");
// const path = require("path");
// const dirpath = path.join(__dirname, "crud");
// const filePath = `${dirpath}/apple.txt`;

// create
// fs.writeFileSync(filePath, "this is file system")

// read
// fs.readFile(filePath,"utf-8",(err,item)=>{

//     console.log(item)
// })
// update
// fs.appendFile(filePath,"and file name is apple.txt",(err)=>{
//     if(!err) console.log("file is updated");
// })

// rename file name

// fs.rename(filePath, `${dirpath}/banana.txt`, (err)=>{
//     if(!err) console.log("file name is updated");
// })

// Delete
// fs.unlinkSync(`${dirpath}/banana.txt`)

// promise

// let a = 20;
// let b = 0;

// setTimeout(()=>{

//     let b = 30
// },2000)
// console.log(a+b);
// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });
// waitingData.then((data) => {
//   b = data;
//   console.log(a + b);
// });

// const express = require("express");
// const app = express();

// app.get("", (req, resp) => {
//   resp.send("Hello, this is home page");
// });

// app.get("/about", (req, resp) => {
//     resp.send(`<h1>Welcome to About Page</h1> <a href="/help">GO TO Help Page</a>`);
//   });

//   app.get("/help", (req, resp) => {
//     resp.send(`<input type="text" value="${req.query.name}"/>
//     <a href="/about">
//     <button>Click me</button></a>
//     `);
//   });
//   app.get("/history", (req, resp) => {
//     resp.send([
//       {
//         name:"piyush",
//         email:"piyush123@gmail.com"

//             },
//             {
//               name:"shukla",
//               email:"shukla123@gmail.com"

//                   }
//     ]);
//   });
//   app.listen(4500)

// extension remove in HTML page
// const express = require("express");
// const app = express();
// const path = require("path")
// const publicPath = path.join(__dirname,"public")
// console.log(publicPath);

// app.set("view engine","ejs")

// app.use(express.static(publicPath));

// app.get("/about",(_,res)=>{
//   res.sendFile(`${publicPath}/about.html`)

// })
// app.get("/aboutus",(_,res)=>{
//   res.sendFile(`${publicPath}/about.html`)

// })
// app.get("/profile",(_,res)=>{

//   const user={
//     name:"piyush",
//     email:"piyush1234@gmail.com",
//     city:"katni",
//     skills:["js","react","node"]
//   }
//   res.render(`profile`,{user})

// })

// app.get("/login",(_,res)=>{
//   res.sendFile(`${publicPath}/login.html`)

//   res.render(`login`)
// })
// app.get("*",(_,res)=>{
//   res.sendFile(`${publicPath}/404.html`)

// })

//   app.listen(4500)

// // middleware in expressjs (application level middleware)

// const express = require("express");
// const app = express();
// const reqFilter = (req, resp, next) => {
//   // console.log("reqFilter");
//   if (!req.query.age) {
//     resp.send("Please provide age")

//   }
//   else  if (req.query.age < 18) {
//     resp.send("You can not access this page")

//   }

//   else{
//     next()
//   }

// };

// app.use(reqFilter)

// app.get("/", (req, resp) => {
//   resp.send("Welcome to home page");
// });
// app.get("/users", (req, resp) => {
//   resp.send("Welcome to User page");
// });

// app.listen(5000);

// middleware in expressjs (route level middleware)

// const express = require("express");
// const reqFilter = require("./middleware.js")
// const app = express();
// const route= express.Router()

//   // console.log("reqFilter");

// // app.use(reqFilter)
// route.use(reqFilter)
// app.get("/", (req, resp) => {
//   resp.send("Welcome to home page");
// });

// // app.get("/users", reqFilter,(req, resp) => {
// //   resp.send("Welcome to User page");
// // });
// route.get("/about", (req, resp) => {
//   resp.send("Welcome to about page");
// });
// route.get("/contact", (req, resp) => {
//   resp.send("Contact Us  page");
// });

// app.use("/",route)
// app.listen(5000);


// mongodb read data 
// const dbConnect = require("./mongodb") 
// promise handle 


// dbConnect().then((res) => {
//   res
//     .find({ name: "14pro" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });
// console.log(dbConnect())

// using async-await
// const main =async ()=> {
//   // console.log("main function called");
//   let data =  await dbConnect();
//   data= await data.find().toArray();
//   console.log(data);

// }

// main()



const mongoose = require("mongoose")


const saveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  })

  const ProductsModel = mongoose.model("products", ProductSchema)
  let data = await ProductsModel({ name: "m 120", price: 1000, brand: "unknown", category: "Mobile" })
  let result = await data.save()
  console.log(result);

}

saveInDB()