import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import * as fs from 'fs'
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  // useEffect(() => {
    
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json()
  //   })
  //     .then((data) => {

       
  //       setBlogs(data);
  //     })
  // }, [])


  return (
    <div>
      <style jsx>
        {`
          .blogs{
            background:lightgrey;
            min-height:75vh;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
          }
          .blogitem{
            padding:10px;
            text-align:center;
            cursor:pointer;
          }


        `}
      </style>
      <div className='blogs'>
        {
          blogs.map((blogitem) => {

            return <div className='blogitem' key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h2>{blogitem.title}</h2></Link>
              <p>{blogitem.metadsc.substr(0,200)}</p>
            </div>
          })
        }


      

      </div>


    </div>
  )
}

// export async function getServerSideProps(context){
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json();

    
//   return {
//     props:{allBlogs},
//   }
// }
export async function getStaticProps(context){
  let data = await fs.promises.readdir("blogdata");

  let myfile;
  let allBlogs =[];
  for(let index = 0;index<data.length;index++){
    const item = data[index];
   
    
    myfile = await fs.promises.readFile(('blogdata/'+ item),'utf-8');
    
    allBlogs.push(JSON.parse(myfile));
  }

    
  return {
    props:{allBlogs},
  }
}

// export async function getStaticPaths(){
//   return {
//     paths:[
//       {params:{}}
//     ],
//     fallback:true
//   }
// }
export default Blog