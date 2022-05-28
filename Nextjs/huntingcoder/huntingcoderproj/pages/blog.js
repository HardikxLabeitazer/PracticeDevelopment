import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  const [count,setCount]=useState(0);
  // useEffect(() => {

  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json()
  //   })
  //     .then((data) => {


  //       setBlogs(data);
  //     })
  // }, [])

  const fetchData =async  () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setCount(count + 2)
    let data = await d.json();
    setBlogs(data)
  };


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

        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {
            blogs.map((blogitem) => {

            return <div className='blogitem' key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h2>{blogitem.title}</h2></Link>
              <p>{blogitem.metadsc.substr(0, 200)}</p>
            </div>
          }) }
        </InfiniteScroll>
        {/* {
          blogs.map((blogitem) => {

            return <div className='blogitem' key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h2>{blogitem.title}</h2></Link>
              <p>{blogitem.metadsc.substr(0, 200)}</p>
            </div>
          })
        } */}




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
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
 let allcount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 3; index++) {
    const item = data[index];


    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');

    allBlogs.push(JSON.parse(myfile));
  }


  return {
    props: { allBlogs,allcount },
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