var express = require("express");
var sever = express();

sever.use(express.static(__dirname+"/index_01"));

sever.get("/profolio", (req,res)=>{     
      //DB        
      res.send("Profolio");  
});

var DB = require("nedb-promises"); 
var Profolio = DB.create(__dirname+"/profolio.db");  
Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})

sever.listen(80,()=>{
    console.log("Sever is running at port 80.");
})

