import Header from "../Header/Header";
import Home from "../Home/Home"
import Car from "../Car/Car"
import About from "../About/About"
import Map from "../Map/Map"
import Client from "../Client/Client"
import Contact from "../Contact/Contact"
import Copy from "../Copy/Copy"
import Model from "../Model/Model"


function HomePage() {
    return (
      <div>
    <Header></Header>
     <Home></Home>
     <Car></Car>
     <About></About>
     <Model></Model>
     <Map></Map>
     <Client></Client>
     <Contact></Contact>
     <Copy></Copy>
      </div>
    );
  }
  
  export default HomePage;
  