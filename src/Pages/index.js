import React from 'react';
import Logo from "../Components/Logo";
import Menus from"../Components/Menus";

function Index()
{

    return(
        <>
        <Logo/>
        <Menus MenuItem="Home"/>
        <Menus MenuItem="About US"/>
        <Menus MenuItem="Our Products"/>
        <Menus MenuItem="Policies"/>

        </>
    )
}

export default Index