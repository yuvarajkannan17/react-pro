import {useState} from "react"

function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
      function onSubmit(){
        if(email==="yuvaraj@gmail.com" && password==="yuvaraj123"){
             setMessage("Successfully Login!!!")
        }else{
            setMessage("Invalid Credentials");
        }
      }
    return(
        <div>
             <h1>Login</h1>
            <div>
                <label htmlFor="email" >Email : </label>
                <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password" >Password : </label>
                <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" onClick={onSubmit}>Sigin</button>
            <p>{message}</p>

        </div>
    )
}

export default Login;