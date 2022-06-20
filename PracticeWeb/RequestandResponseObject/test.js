
var express = require("express")
var app = express();

app.get('/headers',function(req,res){
    res.set('Content-Type','text/plain');
    var s = '';
    for(var name in req.headers) s += name +':'+req.headers[name] +'\n';
    res.send(s);
});

app.get('/about',function(req,res){
    res.render('about');
});

app.get('/error',function(req,res){
    res.status(500);
    res.render('error');
});

app.get('/greetings',function(req,res){
    res.render('about',{
        message:'welcome',
        style: req.query.style,
        userid:req.cookies.userid,
        username :req.session.username,
    });
});
app.get('/Alert',function(req,res){

    res.render('about',{

        message:'welcome',

        style: req.query.style,

        userid:req.cookies.userid,

        username :req.session.username,

    });

});


app.get('/no-layout',function(req,res){
    res.render('no-layout',{layout:null});
});

app.get('/custom-layout',function(req,res){
    res.render('custom-layout',{layout:'custom'});
});

app.get('text/plain',function(req,res){
    res.type('text/plain');
    res.send('This is a test');
});

app.use(function(err,req,res,next){
  console.log(err.stack);
  res.status(500).render('error');
});

app.use(function(req,res){
    res.status(404).render('not found');
});
