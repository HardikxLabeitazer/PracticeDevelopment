import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import * as fs from 'fs'
import styles from '../../styles/BlogPost.module.css'
const Slug = (props) => {

  function createMarkup(c){
    return {__html :c};
  }
  const [blog,setBlog]=useState(props.myblog)
  

  return (

    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title:{ blog && blog.slug}</h1>
        
          {blog && <p dangerouslySetInnerHTML={createMarkup(blog.content)}></p> }
        
        
      </main>
    </div>
  )
}

export async function getStaticPaths(){

  return {
    paths:[
      {params:{ slug:'how-to-learn-javascript'}},
      {params:{ slug:'how-to-learn-nextjs'}},
      {params:{ slug:'how-to-learn-reactjs'}},
    ],
    fallback:false
  };
}
export async function getStaticProps(context){

  const { slug }= context.params;
  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
   
   
  return {
    props:{myblog:JSON.parse(myblog)},
  }
}
// export async function getServerSideProps(context){

 

   
//   const { slug } = context.query;
//  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
// let myblog =await data.json();
// return {
//   props:{myblog},
// }
// }
export default Slug