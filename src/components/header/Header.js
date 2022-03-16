import React from "react";
import HeaderIcon from "./HeaderIcon";
import HeaderTitle from "./HeaderTitle";
import profileIcon from "../../images/profile_icon.png";
import styled from "styled-components";

import { Route, Routes, Link } from "react-router-dom";
import Home from "../contents/home/Home";

//header区画のstyle
const HeaderDiv = styled.div(
    {    
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'bottom',
        

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        userSelect: 'none',
    }
);

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function Header(){
    //Headerの色々な情報
    const headerTitle = "いこうの駆け出しサイト";

    //Header区域を描画、中にはアイコンとタイトルだけ
    return (
        <HeaderDiv>
            <StyledLink to='/'>
                <HeaderIcon src={profileIcon}/>
            </StyledLink> 
            <StyledLink to='/'>
                <HeaderTitle title={headerTitle}/>
            </StyledLink>
        </HeaderDiv>
    );
}
export default Header;