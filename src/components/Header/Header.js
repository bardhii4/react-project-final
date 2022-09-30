import { useState } from "react";
import "./Header.css"

function Header() {

    const [value,setValue] = useState('none')
 
    const searchButtonHandler = () => {
        setValue('block')

        if(value == 'block'){
            setValue('none')
        }
    }

    let header = document.querySelector('header');

    window.addEventListener('scroll' , () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
    
    

    return (
     <header >
        <div className="nav container">
        <i className='bx bx-menu' id="menu-icon"></i>
        <a href="#" className="logo">Car<span>Rent</span></a>
        <ul className="navbar">
            <li><a  href="#home" className="active"></a>Home</li>
            <li><a  href="#cars"></a>Cars</li>
            <li><a  href="#about"></a>About</li>
            <li><a  href="#parts"></a>Parts</li>
            <li><a  href="#blog"></a>Our Blog</li>
        </ul>
        <i className='bx bx-search' id="search-icon" onClick={searchButtonHandler}></i>
        <div className="search-box container" style={{display: value}}>
            <input typeof="search" name="" id="" placeholder="Search heree"></input>
        </div>
        </div>
     </header>
    );
  }
  
  export default Header;