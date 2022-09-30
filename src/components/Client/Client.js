import "./Client.css"
import clientImg from '../../images/client.jpg';
import womanImg from '../../images/woman-1.jpg';
import woman2Img from '../../images/woman-2.jpg';
import woman3Img from '../../images/woman-3.jpg';
import { Link } from "react-router-dom";



function Client() {
    return (
      <section className="vehicles" id="vehicles">
        <h1 className="headeing">Client`s <span> review</span></h1>
        <div className="parts-container container">
        <div className="box">
            <img src={clientImg} alt="clientImg"></img>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <h3>John Devo</h3>
              <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              </div>
            </div>
            </div>
            <div className="box">
            <img src={womanImg} alt="womanImg"></img>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <h3>Margaret Smyth</h3>
              <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              </div>
            </div>
            </div>
            <div className="box">
            <img src={clientImg} alt="clientImg"></img>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <h3>John Devo</h3>
              <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              </div>
            </div>
            </div>
            <div className="box">
            <img src={woman2Img} alt="woman2Img"></img>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <h3>Margaret Smyth</h3>
              <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              </div>
            </div>
            </div>
            <div className="box">
            <img src={clientImg} alt="clientImg"></img>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <h3>John Devo</h3>
              <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              </div>
            </div>
            </div>
            <div className="box">
            <img src={woman3Img} alt="woman3Img"></img>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              <h3>Margaret Smyth</h3>
              <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              </div>
            </div>
            </div>
      </div>
              <div className="click-btn">
              <button>
              <Link to={"/contact"}>
              Contact Us
              </Link>
            </button>
            </div>
    </section>
    );
  }
  
  export default Client;