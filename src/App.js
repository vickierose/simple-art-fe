import React from "react";
import Footer from "./Footer/Footer";
import modalSubscribe from "./modalSubscribe/modalSubscribe";

function App() {
  return <div>
    <modalSubscribe 
      isOpened={false}
    />
    <Footer />
    </div>
}

export default App;
