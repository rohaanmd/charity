import React from "react";
// import Logo from "../../resources/images/logo.svg";

import { ReactComponent as Logo2 } from "../../resources/images/logo.svg";

export default function Header1() {
	return (
		<div>
			<div className="row">
				<div className="col-12 text-center">
					<Logo2 className="custom-logo-misc img-thumbnail" />{" "}
				</div>

				<div className="col-12">
					<h1 className="custom-misc-h1-1 text-secondary text-center">
						<span>52165215</span> numbers of supporters worldwide
					</h1>
				</div>

				{/*line */}
				<span className="line2"></span>
			</div>

			{/* <img src={Logo} alt="" className=" custom-logo img-thumbnail"  /> */}
		</div>
	);
}
