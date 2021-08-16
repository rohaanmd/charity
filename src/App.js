import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index"
import Navbar from "./components/navbar/index"
import Hero from "./components/hero-div/index"
import Banner1 from "./components/banners/banner1"
import DonateInfo from "./components/donate-info/index"
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar /> 
      <Hero />
      <Banner1 />
      <DonateInfo />
      
    </div>
  );
}

export default App;
