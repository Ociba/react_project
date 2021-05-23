import styled from 'styled-components';
function Menu(){
    return (
        <div className="header">
        <div className="logo-nav">
  
          <ul className="nav-options active">
            <li className="option">
              <a href="#">ABOUT</a>
            </li>
            <li className="option">
              <a href="#">CONTACT</a>
            </li>
            <li className="option">
              <a href="#">BLOG</a>
            </li>
            <li className="option mobile-option">
              <a href="#">SIGN-IN</a>
            </li>
            <li className=" option mobile-option">
              <a href="" className="sign-up">
                SIGN-UP
              </a>
            </li>
          </ul>
        </div>
        <ul className="signin-up">
          <li className="sign-in">
            <a href="#">SIGN-IN</a>
          </li>
          <li>
            <a href="" className="signup-btn">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div> 
    );
}

export default Menu;