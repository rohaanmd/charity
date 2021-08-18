import React from "react";
import Img from "../../resources/images/transparent.png"

export default function ConatctUs() {
	return (
		<div>
			<div className="row custom-misc-2-con-chart" style={{position:"relative"}}>
				<div className="col-6">
					<h1>
						GET IN TOUCH
						<br />
						<strong>CONTACT US!</strong>
					</h1>

					<div style={{ margin: "15px auto 15px 0" }} className="line2"></div>

					<form action="">
						<div className="row p-2">
							<div className="col-6">
								<input
									type="text"
									placeholder="Full name"
									defaultValue="fullname"
								/>
							</div>
							<div className="col-6">
								<span className="form-icon">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email"  />
                                {/* <input type="email" placeholder="Email" value="gg@mm.com" /> */}
						
                                </span>
                                
                                	</div>

								</div>
                                <div className="row p-2">
                                <div className="col-6">
								<input type="text" placeholder="Address" />
							</div>
							<div className="col-6">
								<input type="tel" name="" id="" placeholder="Phone" />
							</div>
					
                                </div>

						<div className="row p-2">
							<div className="col-12">
								<textarea
									name=""
									id=""
									style={{ width: "100%" }}
									placeholder="description"
								>
									Default value
								</textarea>
							</div>
							<div className="col-12">
								<button className="btn btn-primary pill" type="submit">SEND NOW</button>
							</div>
			
							{/* 
                    <input type="button" value="hello" />
                        <input type="checkbox" name="" id="" />
                        <input type="color" name="" id="" />
                        <input type="date" name="" id="" />
                        <input type="file" name="" id="" />
                        <input type="password" name="" id="" />
                        <input type="range" name="" id=""  />
                        
                        <input type="radio" name="name" id="" />
                        <input type="radio" name="name" id="" />
                        <input type="radio" name="name" id="" />
                        <input type="reset" value="deafult" />
                         */}
						</div>

						{/* <label htmlFor="id">name</label> <input type="text" id="id" /> */}
					</form>
				</div>
			<img src={Img} alt="" className="transaprent-kid" />
            
            </div>
		</div>
	);
}
