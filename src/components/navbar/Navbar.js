import React from "react";
import styled from "styled-components";
import { NavbarData } from "./NavbarData";
import { Routes, Route, Link } from "react-router-dom";

const NavbarNav = styled.nav(
    {
        backgroundColor: 'yellowgreen',
        userSelect: 'none',
        width: '100%',
    }
);

const NavbarUl = styled.ul(
    {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '0%',
        padding: '0%',
    }
);

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 1% 1%;
    &:hover { // <Thing> when hovered
        color: white; 
        background-color: darkgreen;
    }
    &:active {
        color: white;
        background-color: darkgreen;
    }
`;

const NavbarLi = styled.li(
    {
        fontSize: '1.3rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    }
);

function Navbar(){
    return(
        <NavbarNav>
            <NavbarUl>
                {
                    NavbarData.map((value, key) => {
                        return(
                            <NavbarLink key={key} to={value.url}>
                                <NavbarLi >
                                    {value.icon}{value.title}                                
                                </NavbarLi>
                            </NavbarLink>
                        );
                    })
                }
            </NavbarUl>
        </NavbarNav>
    );

}
export default Navbar;