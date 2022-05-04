import React from "react";
import styled from "styled-components";

const TitleText = styled.h1(
    {
        //fontSize: '2rem',
        color: 'darkgreen',
        //cursor: 'pointer',
        padding: '2% 0% 0 0',
        fontWeight: 'bold'
    }
);


function HeaderTitle(props){
    return (
        <TitleText>{props.title}</TitleText>
    );
}
export default HeaderTitle;