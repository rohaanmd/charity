import React from "react";

export default function Listing_react() {

 var array1 = [
    { name: "hello world", val: 40 },
    { name: "hello earth", val: 45 },
    { name: "hello bboys", val: 60 },
    { name: "hhh", val: 76 },
]



	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>Where the money goes</h1>
					<h3>current oprations and program</h3>
					<ul style={{ color: "#ff6302" }}>
						{["hello", "world", "how are you", "ghjk", "kl,"].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary pill"
						style={{ backgroundColor: "#ff6302"}}
					>
						DONATE ABHI
					</button>
				</div>
				<div className="col-7">
					<div className="heignt-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
