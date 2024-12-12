import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Navbarre from "./components/Navbarre";
import "./App.css";

const App = () => {
  const firstName = "omar";
  return (
    <div className="App" style={{backgroundImage:('url(https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D)')}} >
      <Navbarre/><br/>
      <div className="carte" id="product" style={{ display:"flex", justifyContent:"space-between"}}>
      <Card id="cart" style={{ width: "18rem", margin: "0 auto"}}>
        
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card></div>
      <h3 id="welcome">{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
      {firstName && <img src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D" alt="Greeting" />}
      <Card className="footer">
      <Card.Header>welcome!!!</Card.Header>
      <Card.Body>
        <Card.Title>watch storet</Card.Title>
        <Card.Text>
          &copy;watchstore@gmail.com
        </Card.Text>
        <Button variant="primary" href="#home" className="btn">Go home</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default App;
