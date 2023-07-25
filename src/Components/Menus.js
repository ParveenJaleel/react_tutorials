import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';


function Menus({MenuItem})
{

return(

    <>
        
      <li class="nav-item"> 
        <a class="nav-link active" aria-current="page" href="#">{MenuItem}</a>
        </li>    
    </>
)
}

export default Menus
