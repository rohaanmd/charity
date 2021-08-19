import React, { useState } from "react";
import axios from "axios";
import { roles } from "aria-query";

export default function Form() {
	// const [Var,setVar] = useState({dataType:"anything"});
	const [FormData, setFormData] = useState({});
	const [ResData, setResData] = useState(null);
	const [Errors, setErrors] = useState(null);

	const Login = () => {
		// REST API METHODS
		// rest use : curd oprations (Create,Update,Read,Delete)
		// get : to get data from backend
		// post : give data to backend via body(JSON is nothing but js object) or body(form-data/multipart-data)
		// put / patch : to update data by giving data to backend via body(JSON is nothing but js object) or body(form-data/multipart-data)
		// delete : to delete a data info from backend.

		// stntax

		// axios.get(url,{headers})
		// axios.post(url,{json body or multipart form},{header})
		// axios.put(url,{json body or multipart form},{header})
		// axios.delete(url,{headers})

		axios
			.post("https://reqres.in/api/users/", FormData)
			.then((response) => {
				console.log(response);
				setResData(response.data);
			})
			.catch((err) => {
				console.log({ err });
				// if(err.statusCode===401)
				setErrors({ error: err.response.data.detail });
			});
	};

	// fun tarika 2

	const Changed = (e) => {
		// var dhdh = "lol"

		// agar mere pas ye hei  var FormDt= {
		//     name:"po",
		// KEY : VALUE,
		//     pas:"pop"
		// } ye kya hei -> objct hei

		// var Obj = {
		//     ...FormDt, spred oprator
		// newVALUE : "New"
		// }
		// // equals to
		// var Obj = {
		//      name:"po",
		// KEY : VALUE,
		//     pas:"pop",
		// newVALUE : "New",

		// }

		// console.log(e.target.name);

		// var vari ="namewweww"

		var Obj = {
			...FormData,

			[e.target.name]: e.target.value,

			// [vari]:"dekho samjho isse"
		};

		setFormData(Obj);

		// console.log({ formData: FormData });

		// setFormData(Obj)

		// console.log({event: e.target.value});

		// console.log("event");

		// console.log(document.getElementById("email").value);

		// console.log(document.getElementById("email").value);
	};

	// fun tarika 1

	function Change2(e) {
		console.log(e.target.value);
	}

	// these are events
	// onBlur
	// onChange
	// onInput
	// onKeyDown
	// onKeyUp
	// contentEditable={true}

	return (
		<div>
			{/* {Var}

            <button onClick={()=>setVar({dataType:"anythuing more"})}>change me</button> */}

			<h1>SIGN UP</h1>

			<form>
				<div className="row">
					<div className="col-6">
						{" "}
						<label htmlFor="name1">First NAME</label>{" "}
						<input
							onKeyUp={Changed}
							maxLength={500}
							className="form-control"
							type="text"
							id="name1"
							name="first_name"
						/>
					</div>
					<div className="col-6">
						{" "}
						<label htmlFor="email">EMAIL</label>{" "}
						<input
							onKeyUp={(e) => {
								Changed(e);
							}}
							className="form-control"
							type="email"
							id="email"
							name="email"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						{" "}
						<label htmlFor="avatar">AVATAR</label>{" "}
						<input
							onChange={Changed}
							className="form-control-file"
							type="file"
							name="avatar"
						/>
					</div>
					<div className="col-6">
						{" "}
						<label htmlFor="name2">LAST Name </label>{" "}
						<input
							onKeyUp={Changed}
							className="form-control"
							type="text"
							id="name2"
							name="last_name"
						/>
					</div>

					<div className="col-12 text-center">
						<button
							type="reset"
							onClick={() => {
								setFormData({});
							}}
						>
							RESET
						</button>{" "}
						<button type="button" onClick={Login}>
							Login
						</button>
					</div>
				</div>
			</form>

			<div className="row">
				<div className="col-12">
					<h1>
						{" "}
						{ResData
							? `Welcome ${ResData.first_name} you were created at ${ResData.createdAt}`
							: "You are not LOGED In"}
					</h1>
					<h2> {Errors ? Errors.error : null} </h2>
				</div>
			</div>
		</div>
	);
}
