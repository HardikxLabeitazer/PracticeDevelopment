import * as fs from 'fs'

export default async function handler(req,res){
    if(req.method=='POST'){
        res.status(200).json(["Post request"]);
        let data = await fs.promises.readdir('contactdata')
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`,JSON.stringify(req.body))
    }else{
        res.status(200).json(["all Blogs"])
    }
}