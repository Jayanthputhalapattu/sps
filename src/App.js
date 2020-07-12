import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col,Row,Container} from "reactstrap"
import './App.css';

function App() {
  const a = Array("rock","paper","scissor")
    const b = Array("rock","paper","scissor")
  const [as,setAs] = useState("rock");
  const [bs,setbs] = useState("rock");
  const [ap,setA] = useState(0);
  const [bp,setB] =useState(0);
  const [winner,setWinner]=useState("")
  const Calc =()=>{
    var c = a[Math.floor(Math.random()*a.length)]
    var d = a[Math.floor(Math.random()*b.length)]
    setAs(c)
    setbs(d) 
    console.log(c)
    console.log(d)
   
    if(c=="rock"&&d=="paper" ){
      setB(bp+1)
      setWinner("computer")
     
      
    }
    else if(c==d){
      setA(ap)
      setB(bp)
      setWinner("draw")
    }
    else if(c=="paper"&&d=="rock"){
      setA(ap+1)
      setWinner("Player")
      
    }
    else if(c=="rock"&&d=="scissor")
    {
      setA(ap+1)
      setWinner("Player")
    }else if(c=="scissor"&&d=="rock"){
      setB(bp+1)
      setWinner("computer")
    }else if(c=="paper"&&d=="scissor"){
      setB(bp+1)
    }
    else if (c=="scissor"&&d=="paper"){
      setA(ap+1)
      setWinner("Player")
    }
    
  }
 
  
  return (
    <div className="App">
    <Container fluid>
      <Row>
        <Col style={{textAlign:"center"}}>
        <img src={ as +  ".png"}  width="180" height="180" alt="#"/>
        
        </Col>
        <Col style={{textAlign:"center"}}>
        <img src={ bs +  ".png"}  width="180" height="180" alt="#"/>
      </Col>
      </Row>
      <Row>
        <Col style={{textAlign:"center",marginTop:100}}>
        <button  className="btn" onClick={Calc}  >Click</button>
        </Col>
      </Row>
      <Row>
        <Col style={{textAlign:"center"}}>
        {winner=="draw" || winner=="" ?<h1>{winner}</h1>:<h2>{winner} wins</h2>}

        </Col>
      </Row>
      <Row>
        <Col style={{textAlign:"center"}}>
         <div/>&copy;MOUNISH 
        </Col>
      </Row>
    </Container>
  
 
  
  
     
      </div>
  );
}

export default App;
