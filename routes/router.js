const express = require('express');
const router = express.Router();
const pool = require('../database/postDB.js');
const faker = require('faker');



router.get('/database',(req,res)=>{

  pool.query("SELECT * FROM clothing WHERE id =1")
  .then((data)=>{
    res.send(data.rows);
  })
  .catch((err)=>{
    console.log(err)
    res.send(err)
  })

})

router.get('/database/range',(req,res)=>{
  pool.query('SELECT * FROM clothing WHERE id BETWEEN 1 AND 100')
    .then((data)=>{
      res.send(data.rows)
    })
    .catch((err)=>{
      res.send(err);
    })
})

router.post('/database',(req,res)=>{

  pool.query("SELECT MAX(id) FROM clothing;")
    .then((data)=>{
      var index = Number(data.rows[0].max)+1;
      console.log(index);
      pool.query(`INSERT INTO clothing(id,feature1,feature2,feature3,feature4,feature5,description,activitydetail,familydetail,genderdetail,legaldetail,featuresdetail,materialspec,heightspec,widthspec,depthspec,volumespec,weigthspec,additionalcare,productid,image)VALUES(${index},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png')`)
        .then((data)=>{
          res.send(data);
        })
        .catch((err)=>{
          res.send(err);
        })
    })
    .catch((err)=>{
      res.send(err);
    })

})


router.put('/database',(req,res)=>{
  res.send('works three')
})
router.delete('/database',(req,res)=>{
  res.send('works four')
})

module.exports = router;