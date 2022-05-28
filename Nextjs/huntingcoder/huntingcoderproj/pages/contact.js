import React,{useState} from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [desc,setDesc]=useState("")

  const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(phone,email,name,desc);
    const data = {phone,name,email,desc};
  fetch('http://localhost:3000/api/postcontact',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  })
    .then(response=>response.json())
    .then(data=>{
      console.log("Success",data)
      setDesc("");
      setEmail("");
      setName("");
      setPhone("");
    })
    .catch((err)=>console.log("Error:"+err))
}
const handleChange=(e)=>{
  if(e.target.name=='phone'){
    setPhone(e.target.value)
  }
  else if(e.target.name=='name'){
    setName(e.target.value)
  }
  else if(e.target.name=='email'){
    setEmail(e.target.value)
  }
  else if(e.target.name=='desc'){
    setDesc(e.target.value)
  }
}
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
          <label htmlFor="exampleInputname">Enter your Name</label>
          <input type="text" value={name} onChange={handleChange} name="name" className={styles.formlabel} id="name" aria-describedby="namehelp" />
          <small id="namehelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
        </div>
       
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" value={email} name="email" onChange={handleChange} className={styles.formlabel} id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> 
        <div className={styles.mb3}>
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" value={phone}  onChange={handleChange} name="phone" className={styles.formlabel}  id="phone" aria-describedby="namehelp" />
          <small id="phone" className="form-text text-muted">We'll never share your phone number with anyone else.</small>
        </div>
        <div className={styles.mb3}>
          <textarea  type="textarea" value={desc}  onChange={handleChange} placeholder='Enter your concern here' className="form-check-input" id="desc" name='desc' />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact