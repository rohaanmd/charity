import React, { useState } from "react";

export default function StateLearn() {
	
    const [Name, setName] = useState(["no-one", "popop"]);
	const [Name1, setName1] = useState("");
	const [LoginState, setLoginState] = useState(null);
    
	const Login = (e) => {
		if (Name1.length > 5) 
            setLoginState(true);
		else setLoginState(false);
		// setName1()
	};

	const ChangeMe = (event) => {
		// console.log({changes:event.target.value});
		setName1(event.target.value);
	};

	console.log(Name1);

	return (
		<div>
			{/* {
            Name.map(data=><h1>hello {data} </h1>)
        } */}

			{LoginState ? (
				<h1>YOU ARE LOGED IN by = {Name1}</h1>
			) : (
				<h1>PLEASE LOG IN</h1>
			)}

			{/* {true?"true statement":"false statement"} */}

			{/* <h1>hello {Name1}</h1> */}

			<form>
				<input
					onChange={ChangeMe}
					type="text"
					placeholder="name"
					name="full-name"
				/>
				<button onClick={Login} type="button">
					login
				</button>
			</form>

			{/* <button onClick={Login} >Login</button> */}
		</div>
	);
}
