import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"



export default function AxiosFile() {
const [UserData, setUserData] = useState(null)
const [Kuch, setKuch] = useState("jj");




// redux
// usecontext 
// practice library
// canvas


// UserData will always be array

// syntax
// useEffect(()=>{

//     console.log("thi is useeffect")


// },[UserData,Kuch])


useEffect(() => {
    GetData()
// setUserData([{avatar: "https://reqres.in/img/faces/1-image.jpg",
// email: "george.bluth@reqres.in",
// first_name: "George",
// id: 1,
// last_name: "Bluth"}])

}, [])

const GetData=()=>{

axios.get ("https://reqres.in/api/users/").then(res=>{

// console.log(res.data.data);
setUserData(res.data.data); 
})
    // alert("fun called")

}

const AddFriend = (id) =>{
setKuch("poiphjon")
// axios.get(`addmeasfroend.com/${id}`)
// axios.post("addmeasfroend.com/",id)

    alert(`${id} added`)

}

const DeleteFriend = (id) =>{
    axios.delete(`https://reqres.in/api/users/${id}`).then(res=>{

        console.log(res);
        // setUserData(res.data.data); 
        })

    // alert(`${id} added`)

}

    return (
        <div>
<a  className="btn btn-danger p-2" href="/login">Back from a tag</a>
<Link className="btn btn-danger p-2" to="/login">Back from link component</Link>
<Link className="btn btn-danger p-2" to="https://www.google.com">google pr jao via Link component </Link>
<a  className="btn btn-danger p-2" href="https://www.google.com">google pr jao lekin anchor tag se</a>

            <div className="justify-content-evenly checkMedia" >
            {   
    UserData?UserData.map(d=>{
        return (<div className="card" style={{width: "18rem"}}>


        <img src={d.avatar} className="card-img-top" alt="avtar" />
        <div className="card-body">
          <h5 className="card-title">{d.first_name} {d.last_name}</h5>
          <div className="card-tex">Email: {d.email}</div>
          <button onClick={()=>AddFriend(d.id)}  className="btn btn-primary">ADD ID {d.id} as FRIEND</button>
          <button onClick={()=>DeleteFriend(d.id)}  className="btn btn-danger">delete friend</button>
        </div>
        </div>
        )
    }):<div>you do not have any data</div>
}
            {/* {
    UserData?.map(data=>{
        return (<div className="card" style={{width: "18rem"}}>


        <img src="https://reqres.in/img/faces/1-image.jpg" className="card-img-top" alt="avtar" />
        <div className="card-body">
          <h5 className="card-title">name1 name2</h5>
          <a href="#" className="btn btn-primary">ADD ID 1 as FRIEND</a>
        </div>
        </div>
        )
    })
} */}

        
            </div>


<button className={"btn btn-danger"} onClick={GetData}>GET DATA</button>

        </div>
    )
}
