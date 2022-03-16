import React from "react";
import styled from "styled-components";

const ProfileIcon = styled.img(
    {
        height: '50px',
        width: '50px',
        cursor: 'pointer'
    }
);


function HeaderIcon(props){
    
    return (
        <ProfileIcon src={props.src}/>
    );
}
export default HeaderIcon;