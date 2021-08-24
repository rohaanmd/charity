import "./App.css";
import { useEffect } from "react";
import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import Hero from "./components/hero-div/index";
import Banner1 from "./components/banners/banner1";
import DonateInfo from "./components/donate-info/index";
import MiscHd1 from "./components/misc_component/header1";
import Card1 from "./components/card/card1";
import InfoBanner from "./components/misc_component/listing_react"
import Card2 from "./components/card/card2"
import Form from "./components/contactus/index";
import Teamslider from "./components/misc_component/teamslider";
import StateLearn from "./components/learnState/stateLearn";
import FormTest from "./components/form_in_depth/form"
import AxiosFile from "./components/INFORMATION ABOUT CONCEPT/AxiosFile";
import ReactAxios from "./components/INFORMATION ABOUT CONCEPT/routerAxios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,

} from "react-router-dom";
function App() {
	useEffect(() => {

		// alert("app.js is being loded again")

	}, [])


	return (
		<div className="App">




			<Router>

				<nav>
					ander wala
					<ul>
						<li>
							<Link to="/">Assigmnet5</Link>
						</li>
						<li>
							<Link to="/state">State Learn</Link>
						</li>
						<li>
							<Link to="/axios">axios</Link>
						</li>
						<li>
							<Link to="/login">Form Test</Link>
						</li>
					</ul>
				</nav>


				<Switch>

					<Route exact path="/:">
						<Header className="kuch" />
						<Navbar />
						<Hero />
						<Banner1 />
						<DonateInfo />
						<MiscHd1 />
						<Card1 />
						<InfoBanner />
						<Card2 />
						<Form />
						<Teamslider />
					</Route>

					<Route exact path="/state">
						<StateLearn />
					</Route>
					<Route path="/navbar/:name">
						<Navbar />
					</Route>
					<Route path="/singleuser/:id">
						<ReactAxios />
					</Route>

					<Route exact path="/axios">
						<AxiosFile />

					</Route>

					<Route exact path="/login">
						<FormTest />
					</Route>




				</Switch>

			</Router>







		</div>
	);
}

export default App;
