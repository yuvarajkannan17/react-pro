import { useSelector } from "react-redux";


function Profile(){
   const userValue= useSelector(state=>state.user.value);
   console.log(userValue)
    return(
        <>
         <h2>Profile</h2>
         <div>
            <p>Name : {userValue.name}</p>
            <p>Email : {userValue.email}</p>
         </div>
         
         
         
        </>
    )
}

export default Profile;