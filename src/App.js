import "./App.css";
import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import Hero from "./components/hero-div/index";
import Banner1 from "./components/banners/banner1";
import DonateInfo from "./components/donate-info/index";
import MiscHd1 from "./components/misc_component/header1";
import Card1 from "./components/card/card1";
import InfoBanner from "./components/misc_component/listing_react"
import Card2 from "./components/card/card2"


function App() {
	return (
		<div className="App">
			<Header className="kuch" />
			<Navbar />
			<Hero />
			<Banner1 />
			<DonateInfo />
			<MiscHd1 />
			<Card1 />
      <InfoBanner />
	  <Card2 />
		</div>
	);
}

export default App;
