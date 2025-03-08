// GET
// PUT
// POST
// DELETE
// fetch
// axios
import {useEffect, useState} from "react"
import axios from "axios"
function Sample(){

   const [data,setData]=  useState({
    name:"",
    email:""
   });

   const [apiData,setApiData]=useState([])
   const [isEditable,setIsEditable]=useState(false)
   const [editableId,setEditableId]=useState("");

   function handleInput(e){
      const {name,value}=e.target;
      setData({...data,[name]:value})
   }

   async function getData(){

    try{
      const response= await axios.get("https://67a2227d409de5ed52546afe.mockapi.io/login");
      setApiData(response.data)
      
    }catch(error){
       console.log(error.message)
    }
    }
 
    useEffect(()=>{
     getData();
    },[])

   async function handleSubmit(e){
    e.preventDefault();
     if(isEditable){
      // replace with new data -edit mode
      
      const response= await axios.put(`https://67a2227d409de5ed52546afe.mockapi.io/login/${editableId}`,data)
      console.log(response)
      getData();

     }else{
       // create new data
        const response= await axios.post("https://67a2227d409de5ed52546afe.mockapi.io/login",data);
        console.log(response);
        getData();
     }
   }

 

   

  async function handleEdit(id){
    setIsEditable(true);
    setEditableId(id);
   const response= await axios.get(`https://67a2227d409de5ed52546afe.mockapi.io/login/${id}`);
   

   setData(
    {
      name:response.data.name,
      email:response.data.email
    }
   )
    
   }
    return(
        <>
          <div>
              <form onSubmit={handleSubmit}>
                  <div>
                    <label>Name : </label>
                    <input type="text" value={data.name} name="name" onChange={handleInput}/>
                  </div>
                  <div>
                    <label>Email : </label>
                    <input type="text" value={data.email} name="email" onChange={handleInput} />
                  </div>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
              </form>
          </div>
          <div>
            <table border="1">
             <thead>
               <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Actions</th>
               </tr>
             </thead>
             <tbody>
                {apiData.map((obj)=>(
                  <tr key={obj.id}>
                     <td>{obj.id}</td>
                     <td>{obj.name}</td>
                     <td>{obj.email}</td>
                     <td>
                      <button onClick={()=>handleEdit(obj.id)}>Edit</button>
                      <button>Delete</button>
                     </td>

                  </tr>

                ))}
             </tbody>
            </table>
          </div>
        </>
    )
}

export default Sample;