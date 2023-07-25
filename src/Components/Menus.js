import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Menus({MenuItem})
{

return(

    <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Policies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact-Us</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
)
}

export default Menus