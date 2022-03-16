import React from "react";
import styled from "styled-components";
import Copyright from "./Copyright";



const FooterDiv = styled.div(
    {
        borderTop: '0.5px solid green',
        textAlign: 'center',
        userSelect: 'none',
    }
);

function Footer(){
    return(
        <FooterDiv>
            <Copyright />
        </FooterDiv>
        
    );
};
export default Footer;