import React from "react";
import ReactDOM from "react-dom";
import Button from "../../Components/Button/Button";
import  "./HomePage.less"
import  "../../Components/Button/Button.less"
import InputBox from "../../Components/InputBox/InputBox";
import "../../Components/InputBox/InputBox.less"



const HomePage: React.FC = () => {
  return (
    <>
    <div className="container">
      <div className="mainframe">
            <h1 className="titleheader">Carbonteq Trivia Game</h1>
            <InputBox InputClass="homepage-input" maxLength={25} placeHolder="Please Enter Your Name"/>
            <Button buttonClass="homepage-button-play" buttonTextClass="homepage-button-text" DisplayText="Play" onClick={() => {}} />      
            <Button buttonClass="homepage-button-settings" buttonTextClass="homepage-button-text" DisplayText="Settings" onClick={() => {}} />      </div>

    </div>
    </>
  );
};

export default HomePage;
