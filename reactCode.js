import React from "react";
import "./style.css";

export const Presentational = (props) => {
  return (
    <App propies={props}/>
  );
}

const App = (props) => {
  props = {...props.propies}
  return (
    <div className="grid-container">
      <div className="logo-grid-item">
        <img src="./src/images/logo.svg" alt="BASE APPAREL logo"/>
      </div>
      <div className="hero-grid-item"></div>
      <Main propies={props}/>
    </div>
  );
}

const Main = (props) => {
  props = {...props.propies}
  return (
    <div className="main-grid-item">
      <main className="main">
        <h1 className="title">
          We're <b>coming soon</b>   
        </h1>
        <p className="description">
          Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <Form propies={props}/>
      </main>
    </div>
  );
}

const Form = (props) => {
  props = {...props.propies}
  return (
    <form 
      action="#"
      onSubmit={(e)=>e.preventDefault()}
    >
      <div className={`email-wrapper${props.emailIsValid ? "" : " invalid"}`}>
        <input 
          type="email"
          placeholder="Email Address"
          className="email-field" 
          onChange={props.emailTyping.bind(this)}
          value={props.emailValue}
          onInvalid={props.invalidSubmit}
          onKeyDown={props.emailKeyDown}
        />
        <Button handleButtonClick={props.handleButtonClick}/>
        <div className="error-message">Please provide a valid email</div>
      </div>
    </form>
  );
}

const Button = (props) => {
  return (
    <button
      type="submit" 
      value="submit"
      className="submit-button" 
      onClick={props.handleButtonClick}
    >
      submit
      <div className="button-icon"></div>
    </button>
  );
}