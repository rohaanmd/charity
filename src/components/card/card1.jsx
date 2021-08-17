import React from 'react'
import Img from "../../resources/images/card1.jpg"
export default function card1() {
    return (
        <div>
            <div className="row card-1-custom-con" >
<div className="col-6 custom-card-img">
<img src={Img} alt="" className="img-fluid" />

</div>
<div className="col-6" style={{backgroundColor:"#02b24f"}}>
<div className="row">
<div className="col-12">
    <h1 className="text-white text-center">Our Missiom</h1>
</div>
<div className="col-12">
    <p className="text-white text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nesciunt hic aliquid mollitia quo. Dolore, amet eius sapiente repellat magnam tempore qui, sit totam maiores laudantium quos molestiae quas nesciunt?</p>
</div>
<div className="col-12 text-center">

<button className="btn btn-primary custom-card-btn" >Learn more</button>

</div>

</div>

</div>

            </div>
        </div>
    )
}
