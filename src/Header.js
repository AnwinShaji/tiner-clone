import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function Header({ BackButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {BackButton ? (
        <IconButton onClick={() => history.replace(BackButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://img.freepik.com/free-vector/fire-logo-template_23987-60.jpg?size=338&ext=jpg"
          alt="tinder"
        />
      </Link>
      {/* <h1>header</h1> */}
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
