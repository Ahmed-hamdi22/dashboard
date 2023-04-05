import React from 'react'
import { Link } from 'react-router-dom'

function handellogout() {
  window.localStorage.removeItem('email');
  window.location.pathname='/'

}
const Header = () => {
  return (
    <div className=' container'>
    <nav style={{display:"flex",
alignItems:"center",
justifyContent:"space-between"
    
    }}>
      <div
        style={{display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
            
            }}>
       
  
     <h6 style={{  margin:"10px"}}>home</h6>
     {/* <Link to="/home" style={{  margin:"10px"}}>home</Link> */}
        <h6>about</h6>
     </div>
     
  <div  
  style={{display:"flex",
  alignItems:"center",
  justifyContent:"space-between"
      
      }}>
  
 { !window.localStorage.getItem('email')?<>
 <Link to="/register" style={{textAlign:"center"}} className="register-nav">
          Register</Link>
 
 
 <Link to="/login" style={{textAlign:"center"}} className="register-nav">
         login </Link>
         </>:<div className='register-nav' onClick={ handellogout}>logout</div>}

  </div>
    </nav>
    </div>
  )
}

export default Header
