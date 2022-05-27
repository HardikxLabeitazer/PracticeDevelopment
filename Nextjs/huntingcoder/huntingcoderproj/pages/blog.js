import React from 'react'
import Link from 'next/link'
const Blog = () => {
  
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

        <div className='blogitem'>
          <Link href={'/blogpost/learn-javascript'}>
          <h2>How to learn javascript in 2022</h2></Link>
          <p>javascript is the language to design logic for the web</p>
        </div>
        <div className='blogitem'>
          <h2>How to learn javascript in 2022</h2>
          <p>javascript is the language to design logic for the web</p>
        </div>
        <div className='blogitem'>
          <h2>How to learn javascript in 2022</h2>
          <p>javascript is the language to design logic for the web</p>
        </div>
        <div className='blogitem'>
          <h2>How to learn javascript in 2022</h2>
          <p>javascript is the language to design logic for the web</p>
        </div>

      </div>


    </div>
  )
}

export default Blog