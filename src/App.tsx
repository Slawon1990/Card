import React from "react";
import "./App.css";
import image from "./img/Rectangle 1.jpeg";
import { Card } from "./components/Card.styled";
import { StyledCard } from "./components/Image.styled";
import { Content } from "./components/Content";
import { Box } from "./components/Box.styled";



function App() {
  return (
    <Box>
     <Card>
        <StyledCard src={image} alt="super image" />
        <Content />
      </Card>
    </Box>
 
    
  );
}

export default App;
