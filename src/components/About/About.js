import "./About.css";
import audiCars from '../../images/audi.jpg';

function About() {
    

    return (
      <section className="about container" id="about">
        <div className="about-img">
        <img src={audiCars} alt="audiCars"></img>
        </div>
        <div className="about-text">
            <span>About Us</span>
            <h2>Lorem Ipsum is simply dummy <br></br> text of the printing and typesetting industry.</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="#" className="btn">Learn More</a>
        </div>
      </section>
    );
  }
  
  export default About;