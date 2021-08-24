import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import { useParams } from 'react-router'


export default function AxiosFile() {
const [UserData, setUserData] = useState(null)
const [Kuch, setKuch] = useState("jj");

const {id} = useParams();


// useEffect(() => {
    
//     GetData()
// }, [])

useEffect(() => {
    
    GetData()
}, [id])

const GetData=()=>{

axios.get(`https://reqres.in/api/users/${id}`).then(res=>{

setUserData(res.data.data); 
})
    

}

const AddFriend = (id) =>{
setKuch("poiphjon")
    alert(`${id} added`)

}

console.log(UserData);

const DeleteFriend = (id) =>{
    axios.delete(`https://reqres.in/api/users/${id}`)
}

    return (
        <div>


            <div className="justify-content-evenly checkMedia" >
            { UserData?  

        <div className="card" style={{width: "18rem"}}>
        <img src={UserData.avatar} className="card-img-top" alt="avtar" />
        <div className="card-body">
          <h5 className="card-title">{UserData.first_name} {UserData.last_name}</h5>
          <div className="card-tex">Email: {UserData.email}</div>
          <button onClick={()=>AddFriend(UserData.id)}  className="btn btn-primary">ADD ID {UserData.id} as FRIEND</button>
          <button onClick={()=>DeleteFriend(UserData.id)}  className="btn btn-danger">delete friend</button>
        </div>
        </div>
        :
        
    <div>you do not have any data</div>
}
    

        
            </div>


<button className={"btn btn-danger m-2"} onClick={GetData}>GET DATA</button>

<Link  className={"btn btn-danger m-2"} to={`/singleuser/${parseInt(id)-1}`}> Previous</Link>
<Link  className={"btn btn-danger m-2"} to={`/singleuser/${parseInt(id)+1}`}> NExt</Link>
        </div>
    )
}
