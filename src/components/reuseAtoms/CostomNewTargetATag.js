import React from "react";
import styled from "styled-components";

const StyledA = styled.a(
    {
        textDecoration: 'none',
        color: 'darkgreen',
        ':visited, :link,':{
            color: "darkgreen"
        }
    }
);

function CostumNewTargetATag(props){
    return(
        <StyledA 
            target="_black"
            rel="noopener noreferrer"
            href={props.url}
        >    
        {props.text}
        </StyledA>
    );
}
export default CostumNewTargetATag;