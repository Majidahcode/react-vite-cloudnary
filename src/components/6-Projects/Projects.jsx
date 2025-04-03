import React, { useEffect } from 'react';
// import "./Projects.css";
// import "../../../public/css-projects/font-awesome.min.css"
// import "../../../public/css-projects/templatemo_misc.css"
// import "../../../public/css-projects/templatemo_style.css"
import "../../assets/style-projects.css"

export default function Projects() {
   
    
    
      
      
  return (
    <>
 <div className="wrapper">
    

    {/* <div><img className='bg-img-1' src="/public/images-projects/6698edit-removebg-preview.png" alt="" /></div> */}
    <div><video src="/public/images-projects/8303104-hd_1920_1080_24fps.mp4" autoPlay loop></video></div>
  <div className="container-projects">
    <input type="radio" name="slide" id="c1" defaultChecked="" />
    <label htmlFor="c1" className="card-project">
      <div className="row">
        {/* <div className="icon">1</div>
        <div className="desc">
          <h4>Mountain</h4>
          <p>Subscribe To NP Coding</p>
        </div> */}
      </div>
    </label>
    <input type="radio" name="slide" id="c2" />
    <label htmlFor="c2" className="card-project">
      <div className="row">
        {/* <div className="icon">2</div>
        <div className="desc">
          <h4>Nature</h4>
          <p>Subscribe To NP Coding</p>
        </div> */}
      </div>
    </label>
    <input type="radio" name="slide" id="c3" />
    <label htmlFor="c3" className="card-project">
      <div className="row">
        {/* <div className="icon">3</div>
        <div className="desc">
          <h4>Winter</h4>
          <p>Subscribe To NP Coding</p>
        </div> */}
      </div>
    </label>
    <input type="radio" name="slide" id="c4" />
    <label htmlFor="c4" className="card-project">
      <div className="row">
        {/* <div className="icon">4</div>
        <div className="desc">
          <h4>Lake</h4>
          <p>Subscribe To NP Coding</p>
        </div> */}
      </div>
    </label>
    <input type="radio" name="slide" id="c5" />
    <label htmlFor="c5" className="card-project">
      <div className="row">
        {/* <div className="icon">5</div>
        <div className="desc">
          <h4>Lake</h4>
          <p>Subscribe To NP Coding</p>
        </div> */}
      </div>
    </label>
    <input type="radio" name="slide" id="c6" />
    <label htmlFor="c6" className="card-project">
      <div className="row">
        {/* <div className="icon">6</div>
        <div className="desc">
          <h4>Lake</h4>
          <p>Subscribe To NP Coding</p>
        </div> */}
      </div>
    </label>
  </div>
</div>

    </>
  );
}
<script src="/src/assets/app.js"></script>
{/* <><script src="js-projects/jquery-1.11.1.min.js"></script><script src="js-projects/jquery.lightbox.js"></script><script src="js-projects/templatemo_custom.js"></script></> */}