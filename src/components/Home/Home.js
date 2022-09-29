import "./Home.css"
import homeImg from "../../images/background-3.jpg"


function Home() {


    return (
      <section className="home" id="home" style={{backgroundImage: `url(${homeImg})`}}>
        <div className="home-text">
            <h1>We Have Every <br></br> Types Of <span>Car</span> You Need </h1>
            <p>It is a long established fact that a reader will be <br></br> distracted by the readable content of a page when looking at its layout.</p>
            <a href="#" className="btn">Discover Now</a>
        </div>
        <div className="home-img">
        
        <iframe width="100%" height="494" src="https://www.youtube.com/embed/EDlR70L8S-E" title="Bugatti Vision GT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      
    );
  }
  
  export default Home;