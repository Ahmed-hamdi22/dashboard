import React,{useState} from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import"./index.css"
import Header from './component/Header';
const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [reppass,setreppass] = useState("");
    const  [accept, setaccpet] = useState(false);
    const [EmailError ,setEmailError]  = useState("");
    // const  [flag, setflag] = useState(false);
    // console.log(name);
 async function submit (e){
    let flag= true;
  e.preventDefault();
  setaccpet(true)
  if (name === ""|| password.length<8||reppass!==password){
  flag=false
  } else flag = true;
  try{
  if( flag ){

   let res= await axios.post("http://127.0.0.1:8000/api/register",{
      name:name,
      email:email,
      password:password,
      password_confirmation:reppass,
    });
    if(res.status===200){
      window.localStorage.setItem("email",email)
      window.location.pathname="/"
    }
  } 
} catch (err){
    setEmailError(err.respons.status);
 
 }
  }   

 
  return (
    <>
      <Header/>
    <div className='parent' >
    <div className='register '>
      <form onSubmit={submit}>
        <label htmlFor='name'>name</label>
        <input
        id='name'  placeholder='name'type='text' value={name}
        onChange={(e)=>setname(e.target.value)}
        
        />
        {
        name.length ==="" && accept&&
        (<p>user</p>)
       }
         <label htmlFor='email'>email</label>
        <input id='email' placeholder='email' type='email'   value={email}
        onChange={(e)=>setemail(e.target.value)}
/>
{accept &&EmailError === 422 &&
  <p> email already token</p>}
<label htmlFor='password'>password</label>
        <input
        id='password'
        placeholder='password'
        type='password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
             {
              password.length < 8 && accept&&(<p style={{color:"red"}}>password must be more 8 ch</p>)}


        <label htmlFor='reppass'>reptpass</label>
        <input
        id='reppass'
        placeholder='reppass'
        type='password'
        value={reppass}
        onChange={(e)=>setreppass(e.target.value)}
        />
        {
            reppass!==password&&accept&&<p style={{color:"red"}}>repetpassword must be=password</p>
        }
         <div  style={{textAlign:"center"
       
        }}>
           <button type='submit' >Register</button>
 </div>
      </form>
      </div>
  </div>
  </>
  )
}

export default Signup



  // if(res.status === 200){
    //   window.localStorage.setItem('email',email)
    //   window.location.pathname="/"
    // }







// import React,{useState} from 'react'

// const Signup = () => {
//   const [fname, setfname] = useState("")
//   const [email, setemail] = useState("")
//   const [password, setpassword] = useState("")
//   const [repassword, setrepassword] = useState("")
//   const  [accept, setaccpet] = useState(false) 
//   console.log(fname);
// const submit =(e)=>{
// e.preventDefualt();
// setaccpet(true)
// }
//   return (
//     <div className='parent' >
//  <div className='register '>
//  <form onSubmit={submit}>
//         <label htmlFor='fname'>frist</label>
//        <input type="text"
//         placeholder='fname'
//        value={fname}
//        onChange={(e)=>setfname(e.target.value)}
//        />
//        {
//         fname.length ==="" &&accept&&<p>user</p>
//        }
//        <label htmlFor='email'>email</label>
//        <input type="email"
//         placeholder='email'
//         id='email'
//         value={email}
//         onChange={(e)=>setemail(e.target.value)}

//         />
        
//        <label htmlFor='repassword'>password</label>
//        <input 
//        type="password"
//         placeholder='password'
//         value={password}
//         id='password'
//         onChange={(e)=>setpassword(e.target.value)}
//         />
//      { password.length < 8 && accept&&(<p>password must be more 8 ch</p>)}
//        <label htmlFor='repassword'>repassword</label>
//        <input type="password"
//         placeholder='repassword'
//         value={repassword}
//         onChange={(e)=>setrepassword(e.target.value)}
//         id='repassword'/>
//         {
//             repassword!==password&&accept&&<p>repet !=pass</p>
//         }
//     <div style={{textAlign:"center"}}>
//     <button type='submit'>register</button>
//     </div>
//       </form>
//  </div>
//     </div>
//   )
// }

// export default Signup
