import express from 'express';
//import bodyParser from "body-parser";
const app = express();

app.use(express.static("C:/Users/AMITA/OneDrive/שולחן העבודה/לימודים אמיתי/אינטרנטיות/Memory card/Server/node"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.redirect('/home');
});

app.get("/home", (req, res) => {//landing page
  res.render('log-in');  
});

app.get("/admin", (req, res) => {//admin
  const {uname} = req.query;
  if(!uname){
    alert("error, please enter your User Name")
    res.redirect('/home');
  }
  if(uname == "admin"){
    res.render('admin');
  }
  else{
    res.render('board');
  }
});

app.get("/board", (req, res) => {//game
  res.render('board');
});



/*
// add the files with static
app.use(express.static(__dirname));

// getting the forms data
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {//landing page
  //res.sendFile(__dirname + "/startMenu.html");
  //username = req.body.uname;
  //if(`${username}` == "amitai"){
    res.redirect('/test');
  //}
});

app.get("/test", (req, res) => {//landing page
  res.send("I'm king");
});

app.post("/", (req, res) => {

    res.sendFile(__dirname + "/admin.html");
    var num = req.body.card_count;
    if(num!=0 || !username){
      console.log(`${username}  start to play with  ${num} cards`);
    }
  });
  app.get("/play", (req, res)=>{
    res.sendFile(__dirname + "/admin.html");
  })

  
  */
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
