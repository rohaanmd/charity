import React from "react";

export default function Header(props) {


	return (
		<div className={`row header_container_dark ${props.className?props.className:null}`}>
			<div className="col-6 d-flex ">
				<div className="icon">
					<i class="fab fa-facebook-f"></i>
					<i class="fab fa-linkedin-in"></i>
				</div>

				<div className="phone_head">+912222222222</div>
			</div>

			<div className="col-6">
				<div className="login_signup_container">
					{/* dropdown here */}

					<button>
						<i class="far fa-user"></i>
						&nbsp;
						{/* space */}
						SIGNUP
					</button>
					<button>
						<i class="fas fa-lock"></i> &nbsp; LOGIN
					</button>
				</div>
			</div>
		</div>
	);
}
