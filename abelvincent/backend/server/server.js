import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('error',()=>{
    console.error('Connection unsuccessful')
})

app.listen(config.port,(err)=>{
    if(err) console.log(err);
    console.info('Server stared on port %s.',config.port);
})