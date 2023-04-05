import{useState} from 'react'
import axios from 'axios'
import Header from './component/Header'
const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const  [accept, setaccpet] = useState(false);
    const [EmailError ,setEmailError]  = useState("");
  async function submit (e){
    let flag= true;
  e.preventDefault();
  setaccpet(true)
  if (password.length<8){
  flag=false
  } else flag = true;
  try{
  if( flag ){
   let res= await axios.post("http://127.0.0.1:8000/api/login",{
      email:email,
      password:password,
    
    });
    if(res.status === 200){
      window.localStorage.setItem('email',email);
      window.location.pathname="/"
    }
  }
  }catch(err){
    setEmailError(err.response.status);
  }
  }
  return (
    <>  <Header/>
    <div className='parent' >
     
    <div className='register '>
     
      <form onSubmit={submit}>

         <label htmlFor='email'>email</label>
        <input id='email' placeholder='email' type='email'   value={email}
        onChange={(e)=>setemail(e.target.value)}
/>{accept &&EmailError === 422 &&
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


      
         <div style={{textAlign:"center"}}>
          <button type='submit' >login</button>
 </div>
      </form>
      </div>
  </div>
  </>
  )
}


export default Login