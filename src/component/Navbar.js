import React from 'react';
 import {Switch, Link} from 'react-router-dom';
function Navbar (){
   return (
      <div>
     <Switch>
      <Link to="/">Home</Link>
      </Switch>
      <Switch>
      <Link to="/about">About</Link>
      </Switch>
      <Switch>
      <Link to="/contact">Contact</Link>
   </Switch>
   </div>
   );

}
 
export default Navbar;