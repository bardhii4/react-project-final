import "./Model.css"
import rollroyceCars from '../../images/roll-royce.webp';
import bmwCars from '../../images/bmw.webp';
import mercedesCars from '../../images/mercedes.webp';
import bentlyCars from '../../images/bently.jpg';
import audiCars from '../../images/audi.jpg';
import golfCars from '../../images/golf.jpg';

import { Splide,SplideSlide } from "@splidejs/react-splide";

function Model() {
 
    return (
    <section className="vehicles" id="vehicles">
        <h1 className="headeing">Our <span> vehicles</span></h1>
        <div className="parts-container container">
          <div className="box">
          <img src={rollroyceCars} alt="rollroyceCars"></img>
          <h3>New Model</h3>
          <span>100$</span>
          <i class='bx bxs-star'></i>
          <a href="#" className="btn">Rent now</a>
          <a href="#" className="details">View details</a>
          </div>
          <div className="box">
          <img src={bmwCars} alt="bmwCars"></img>
          <h3>New Model</h3>
          <span>95$</span>
          <i class='bx bxs-star'></i>
          <a href="#" className="btn">Rent now</a>
          <a href="#" className="details">View details</a>
          </div>
          <div className="box">
          <img src={mercedesCars} alt="mercedesCars"></img>
          <h3>New Model</h3>
          <span>70$</span>
          <i class='bx bxs-star'></i>
          <a href="#" className="btn">Rent now</a>
          <a href="#" className="details">View details</a>
          </div>
          <div className="box">
          <img src={bentlyCars} alt="bentlyCars"></img>
          <h3>New Model</h3>
          <span>120$</span>
          <i class='bx bxs-star'></i>
          <a href="#" className="btn">Rent now</a>
          <a href="#" className="details">View details</a>
          </div>
          <div className="box">
          <img src={audiCars} alt="audiCars"></img>
          <h3>New Model</h3>
          <span>90$</span>
          <i class='bx bxs-star'></i>
          <a href="#" className="btn">Rent now</a>
          <a href="#" className="details">View details</a>
          </div>
          <div className="box">
          <img src={golfCars} alt="golfCars"></img>
          <h3>New Model</h3>
          <span>80$</span>
          <i class='bx bxs-star'></i>
          <a href="#" className="btn">Rent now</a>
          <a href="#" className="details">View details</a>
          </div>
      </div>
    </section>
    );
  }
  
  export default Model;
  