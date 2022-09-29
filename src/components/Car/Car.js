import "./Car.css"
import rollroyceCars from '../../images/roll-royce.webp';
import bmwCars from '../../images/bmw.webp';
import mercedesCars from '../../images/mercedes.webp';
import bentlyCars from '../../images/bently.jpg';
import audiCars from '../../images/audi.jpg';
import golfCars from '../../images/golf.jpg';

import { Splide,SplideSlide } from "@splidejs/react-splide";


function Car() {
    return (
      <section className="cars" id="cars">
        <div className="heading">
            <span>All Cars</span>
            <h2>We Have All Types Cars</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
            <div className="cars-container container">

                    <div className="box">
                        <img src={bmwCars} alt="bmwCars"></img>
                        <h2>BMW</h2>
                    </div>


                <div className="box">
                <img src={mercedesCars} alt="mercedesCars"></img>
                    <h2>Mercedes</h2>
                </div>


                <div className="box">
                <img src={audiCars} alt="audiCars"></img>
                    <h2>Audi</h2>
                </div>


                <div className="box">
                <img src={rollroyceCars} alt="rollroyceCars"></img>
                    <h2>Roll Royc</h2>
                </div>

                <div className="box">
                <img src={bentlyCars} alt="bentlyCars"></img>
                    <h2>Bently</h2>
                </div>

                <div className="box">
                <img src={golfCars} alt="golfCars"></img>
                    <h2>Golf</h2>
                </div>
            </div>


      </section>
    );
  }
  
  export default Car;