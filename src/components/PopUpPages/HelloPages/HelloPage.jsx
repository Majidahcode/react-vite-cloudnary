import React, { useEffect,useState } from 'react'
import "./HelloPage.css" 
function HelloPage() {
    const [hello, setHello] = useState(false)
    const toggleHello = () =>{
        setHello(!hello)
    }
    const [close, setClose] = useState(false)
    const toggleClose = () =>{
        setClose(!close)
    }
//  useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY < 300) {
//         setshowScrollBTN(true);
//       } else {
//         setshowScrollBTN(false);
//       }
//     });
//   }, []);
    // const [ShowScrollBTN, setshowScrollBTN] = useState(false);
  
  return (
    <div>
    <button
    // style={{ opacity: ShowScrollBTN ? 1 : 0, transition: "1s" }}
    onClick={toggleHello}
     className='btn-modal'>
        Click Me 😊
     </button>
    <button onClick={toggleClose} className='colse-modal'>Close</button>

     {hello &&(

<div className="modal active-modal">
<div onClick={toggleHello} className="overlay"></div>
<div className="modal-content">
    {/* <h2>يا هلا انا majidahCode</h2>
    <p>والمطلوب 😒</p>
    <p>
      majidahCodeهذي  سيبك من 
    </p> */}
    <h2>usiukjbvkkkdsivfukbjsfviu</h2>
    <h2>usiukjbvkkkdsivfukbjsfviu</h2>
    <h2>usiukjbvkkkdsivfukbjsfviu</h2>
    <button 
    onClick={toggleHello}
    className='colse-modal'>Close</button>
</div>
</div>

     )}

    </div>
  )
}

export default HelloPage
