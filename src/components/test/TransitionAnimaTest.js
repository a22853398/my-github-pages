import React from "react";
import styled , { css } from "styled-components";
import { useState } from "react";


const StyledThing = styled.div`
    transition: all 0.5s;
    padding: 12px;
    background: ${props => (props.active ? "red" : "green")};
    color: ${props => (props.active ? "green" : "red")};
`;

function TransitionAnimaTest(){
    const [checked, setChecked] = useState(false);
    return(
        <div>
            <button onClick={ () => setChecked(!checked) }>click me</button>
            <StyledThing active={checked}>{ checked ? "TRUE": "FALSE" }
            </StyledThing>
        </div>
    );
}
export default TransitionAnimaTest;