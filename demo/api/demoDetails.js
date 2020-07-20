var express = require('express');
var db = require('../config');
const router = express.Router();


//Add Demo Details
router.post("/addDemoDetails", (req, res) =>{
    var demoDetails={
        title:req.body.title,
        description:req.body.description
    }
    let sql =`insert into tbl_demo set ?;`;
    db.query(sql,demoDetails, (err, result) =>{
        if (err) {
            res.json({ status:-1, message:"Error Occured", error:err});
        } else{
            res.json({ status:1, message:"Data Submitted Successfully"});
        }
    });
});

//Edit Demo Details By Id
router.put("/editDemoDetails/:id", (req, res) =>{
    var demoDetails={
        title:req.body.title,
        description:req.body.description
    }
    let sql =`update tbl_demo set ? where id=${req.params.id}`;
    db.query(sql,demoDetails, (err, result) =>{
        if (err) {
            res.json({ status:-1, message:"Error Occured", error:err});
        } else{
            res.json({ status:1, message:"Data Updated Successfully"});
        }
    });
});

//Get All Demo Details
router.get("/getDemoDetails", (req, res) =>{
    let sql = `select * from tbl_demo where isActive=1;`;
    db.query(sql, (err, result) =>{
        if (err) {
            res.json({ status:-1, message:"Error Occured", error:err})
        } else{
            console.log(result)
            res.json({status:-1, message:"All Data Fetched Successfully", result:result})
        }
    })
})

//Get Single Demo Details By Id
router.get("/getDemoDetails/:id", (req, res) =>{
    let sql = `select * from tbl_demo where id=${req.params.id} and isActive=1;`;
    db.query(sql, (err, result) =>{
        if (err) {
            res.json({ status:-1, message:"Error Occured", error:err})
        } else{
            res.json({status:-1, message:"Data Fetched Successfully", result:result})
        }
    })
})

//Delete Demo Details By ID
router.delete("/deleteDemoDetails/:id", (req, res) =>{
    let sql =`update tbl_demo set isActive=0 where id = ${req.params.id}`;
    db.query(sql, (err, result) =>{
        if (err) {
            errorLog(err);
            res.json({status:-1, message:"Error Occured", error:err});
        } else{
            res.json({ status:1, message:"Data deleted Successfully"});
        }
    });
}); 

//insert a array through stored procedure
router.post('/addarray', function (req, res){
    var insarray=[
        {
            title:"kuchi1",
            description:"uddyuff",
        },
        {
            title:"kuchi2",
            description:"uddyuff",
        },
        {
            title:"kuchi3",
            description:"uddyuff",
        },
        {
            title:"kuchi4",
            description:"uddyuff",
        },
        {
            title:"kuchi5",
            description:"uddyuff",
        }
            ]
            insarray.forEach((data,key) => {
                var data = {
                    title: data.title,
                    description: data.description,
                }
                let sql = 'INSERT INTO tbl_demo SET ? ';
                db.query(sql, data, (err, result) => {
                    if (err) {
                        res.json({ status: -1, message: "Error Occured", error: err })
                    }if ((key+1) == insarray.length) {
                        res.json({ status:1,message:"Data Added Successfully"})
                    } 
                    
                })  
            });
})


router.post('/addarray1', function (req, res){
    db.query(`call sp_insarray('${req.body.title}','${req.body.description}');`, function (err, result) {
        if (err) {
            res.json({ status: -1, message: 'Error Occure', error: err })
        } else {
            res.json({ status: 1, message: 'Data Submitted Successfully' })
        }
    })
})







module.exports = router;