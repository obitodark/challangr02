import Button from "../styleButton";
import "./stylesAppBar.css";
import logo from "../../images/Icon/logo.svg";
import toogle from "../../images/Icon/icon-hamburger.svg";
import { useRef } from "react";

const MenuLateral = ({ menu, handleToogle }) => {
  return (
    <div className="container-menu-lateral" ref={menu}>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button className="btn-close" onClick={handleToogle}>
            X
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li>about</li>
          <li>careers</li>
          <li>events</li>
          <li>products</li>
          <li>support</li>
        </ul>
      </div>
    </div>
  );
};

const AppBar = ({ children }) => {
  const menu = useRef();
  const handleToogle = () => {
    menu.current.classList.toggle("container-visible");

    console.log("click");
  };
  return (
    <div className="container">
      <MenuLateral menu={menu} handleToogle={handleToogle} />
      <div className="container-nav">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <button className="btn" onClick={handleToogle}>
            <img src={toogle} alt="" />
          </button>
          <ul>
            <li>
              <Button.NavBar>About</Button.NavBar>
            </li>
            <li>
              <Button.NavBar>Careers</Button.NavBar>
            </li>
            <li>
              <Button.NavBar>Events</Button.NavBar>
            </li>
            <li>
              <Button.NavBar>Products</Button.NavBar>
            </li>
            <li>
              <Button.NavBar>Support</Button.NavBar>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppBar;
