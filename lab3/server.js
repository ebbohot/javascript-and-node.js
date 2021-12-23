
//===========START REQUIRES==============
const chalk = require('chalk') 
const ninjadb = require('ninjadb')
const tododb=ninjadb.create('tododb')
const express = require('express')
const app=express()
const port=3000
//===========END REQUIRES==============

app.use(express.static('public'))

//********************START url to home,about,contact,404,addtodo,database*******************************

app.get('/' ,(req,res)=>res.sendFile(__dirname +'/public/index.html'))
app.get('/home' ,(req,res)=>res.sendFile(__dirname +'/public/index.html'))
app.get('/about' ,(req,res)=>res.sendFile(__dirname +'/public/about.html'))
app.get('/contact' ,(req,res)=>res.sendFile(__dirname +'/public/contact.html'))
app.get('/404',(req,res)=>res.sendFile (__dirname +'/public/404/help.html'))
//===========START READ VARIABLE FROM URL DISPLAY ON BROWSER AND SAVE TO DATABASE==
app.get('/addtodo' ,(req,res)=>{
    res.send({
        status:'success',
        the_word:req.query.text
    })
    tododb.push({
        the_word:req.query.text
    })   
console.log('the url text is :' + req.query.text)
})
//===========END READ VARIABLE FROM URL DISPLAY ON BROWSER AND SAVE TO DATABASE====
//===========START DISPLAY tododb DATABASE ON BROWSER AND TO CONSOLE===============
app.get('/database',(req,res)=>{
    const alldatabase=tododb.filter()
    res.send(alldatabase)
    console.log(alldatabase)
})
//===========END DISPLAY DATABASE ON BROWSER AND TO CONSOLE========================

//********************END url to home,about,contact,404,addtodo,database*********************************
app.listen(port,()=>console.log(chalk.green('server is working from port '+port+'!')))


