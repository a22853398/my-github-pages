import React from "react";
import styled from "styled-components";

const TitleText = styled.h1(
    {
        //fontSize: '2rem',
        color: 'darkgreen',
        //cursor: 'pointer',
        padding: '0% 0%'
    }
);


function HeaderTitle(props){
    return (
        <TitleText>{props.title}</TitleText>
    );
}
export default HeaderTitle;