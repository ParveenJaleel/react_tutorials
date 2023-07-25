import React from 'react';
import Logo from "../Components/Logo";
import Menus from"../Components/Menus";

function Index()
{

    return(
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">  
    <Logo />    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <Menus MenuItem="Home"/>
        <Menus MenuItem="About us"/>
        <Menus MenuItem="Contact"/>
        <Menus MenuItem="Signup"/>  
      </ul>
    </div>
  </div>
</nav>
    </>
)
}

export default Index
