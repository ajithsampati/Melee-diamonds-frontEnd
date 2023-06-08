import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Icon1 from './images/1.png';
import Icon2 from './images/2.png';
import Icon3 from './images/3.png';
import Icon4 from './images/4.png';
import Icon5 from './images/5.png';
import Icon6 from './images/6.png';
import Icon7 from './images/7.png';
import Slider from "react-slick";
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Heeraicons extends Component {


    render() {
        var Coursel = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 5,
            slidesToScroll: 3
          };

          
        return (
            <div className='container'>
              
              
              <Slider {...Coursel}>
      <div>
      <img src= {Icon1} alt="Icon1" id='Icons'/>
       
      </div>
      <div>
      <img src={Icon2}  alt="Icon2"  id='Icons'/>
      
      </div>
      <div>
      <img src= {Icon3} alt="Icon3" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon4} alt="Icon4" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon5} alt="Icon5" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon6}  alt="Icon6" id='Icons'/>
       
      </div>
      <div>
      <img src= {Icon7}  alt="Icon7" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon5}  alt="Icon5" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon4}  alt="Icon4" id='Icons'/>
       
      </div>
      <div>
      <img src= {Icon3}  alt="Icon3" id='Icons'/>
       
      </div>
      <div>
      <img src= {Icon2}  alt="Icon2" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon1}  alt="Icon1" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon7}  alt="Icon7" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon4}  alt="Icon4" id='Icons'/>
        
      </div>
      <div>
      <img src= {Icon6}  alt="Icon6" id='Icons'/>
       
      </div>

    </Slider>
            </div>
        );
    }
} 

export default Heeraicons;