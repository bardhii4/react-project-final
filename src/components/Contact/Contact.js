import "./Contact.css"

function Contact() {
    return (
     <section className="footer">
      <div className="footer-container container">
        <div className="footer-box">
          <a href="#" className="logo">Car <span>Rent</span></a>
          <div className="social">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Page</h3>
          <a href="#">Home</a>
          <a href="#">Cars</a>
          <a href="#">Parts</a>
          <a href="#">Sales</a>
        </div>
        <div className="footer-box">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="footer-box">
          <h3>Contact</h3>
          <p>United States</p>
          <p>Kosovo</p>
          <p>Germany</p>
          <p>Japan</p>
        </div>
      </div>
     </section>
    );
  }
  
  export default Contact;