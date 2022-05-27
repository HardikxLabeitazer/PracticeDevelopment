import React from 'react'

 const About = () => {
  return (
    <div className='maincontainer'>
      <style jsx>
        {`
          .maincontainer{
            background:lightgrey;
            min-height:50vh;
            display:flex;
            justify-content:center;
            align-items:center;
          }
          .container{
            text-align:center;
          }
        `}
      </style>
      <div className='container'>
        <h1>HUNTING CODER</h1>
        <p>Website for finding bugs</p>
      </div>


    </div>
  )
}
export default About