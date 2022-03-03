
var express = require('express');
var app = express();

var handlebars = require('express3-handlebars')
                     .create({defaultLayout:'main'})
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);


app.get('/',function(req,res){
    res.render('C:\\Users\\hardi\\Desktop\\competitive\\PracticeWeb\\Meadowl\\views\\home');
})


app.get('/about',function(req,res){
    res.render('C:\\Users\\hardi\\Desktop\\competitive\\PracticeWeb\\Meadowl\\views\\about');

});

app.use(function(req,res){
    
    res.status(404);
    res.render('C:\\Users\\hardi\\Desktop\\competitive\\PracticeWeb\\Meadowl\\views\\404');
  
});


app.use(function(err,req,res,next){
console.error(err.stack);

res.status(500);
res.render('C:\\Users\\hardi\\Desktop\\competitive\\PracticeWeb\\Meadowl\\views\\500');
});

app.listen(app.get('port'),
function(){
    console.log('Express started on http://localhost :' + app.get('port') +' ;press Ctrl-C to terminate.');

});
//Done
