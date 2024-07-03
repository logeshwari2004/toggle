import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Import your eye image and any other assets
import eyeImage from './eye.svg';

// Define keyframe animation for background color change
const animateBackground = keyframes`
  0% {
    background-color: cyan;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: cyan;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  background-color: cyan; /* Initial background color */
  animation: ${animateBackground} 10s ease infinite; /* Apply background animation */
  font-family: Arial, sans-serif;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 90%;
`;

const EyeIcon = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 20px;
`;

const StudentInfo = styled.div`
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <ContentWrapper>
        <EyeIcon src={eyeImage} alt="Eye icon" />
        <StudentInfo>
          <h2>Name:Logeshwari.P</h2>
          <p>Registration No: 212221230055</p>
        </StudentInfo>
        <ToggleButton onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </ToggleButton>
        {isVisible && (

         <React.Fragment>
          <h6>COLLEGE:Sec</h6>
          <h6>YEAR:3rd year</h6>
         </React.Fragment>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default App;