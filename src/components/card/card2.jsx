import React from 'react'
import Cards from "./component/cards"
import Img1 from "../../resources/images/happy_kid1.jpeg";
export default function Card2() {


    

    var array1 = [
        {
        link:Img1,
        title:"hero1",
        des:"dretyuuioipdasdasdas",
        val:40
    
    },
        {link:"https://picsum.photos/200/300",
        title:"3",
        des:"dkasfdsadasdasdasdasdas",
        val:90
    
    },
        {link:"https://picsum.photos/200/300",
        title:"hero4",
        des:"fsdgargaeaef",
        val:17
    
    
    },
    
    ]

    return (
        <div>
            <div className="row">
                <div className="col-12">
                <div className="d-flex justify-content-around">

{/* normal coder */}

{/* {[
    {link:Img1,
    title:"hero1",
    des:"dretyuuioipdasdasdas",
    val:40

},
    {
    link:"https://picsum.photos/200/300",
    title:"3",
    des:"dkasfdsadasdasdasdasdas",
    val:90

},
    {
    link:"https://picsum.photos/200/300",
    title:"hero4",
    des:"fsdgargaeaef",
    val:17


},

].map(data=><Cards link={data.link} title={data.title} des={data.des} val={data.val}   />    )


} */}



{/* mentos coder */}

{array1.map(ok=><Cards {...ok} /> )}




                </div>

                </div>
            </div>
        </div>
    )
}
