import React from "react";
import Footer from "./Footer/Footer";
import ModalSubscribe from "./modalSubscribe/modalSubscribe";
import {useState} from 'react';

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
    
     
    <button className="primary-button" onClick={() => setModalActive(true)}>Subscribe</button>
    <ModalSubscribe visible={modalActive} setVisible={setModalActive}/> 
    <Footer />
    </div>
    ) 
}

export default App;
