import React from "react";
import styled from "styled-components";
import { PrivacyData } from "./PrivacyData";
import PrivacyToggleButton from "./PrivacyToggleButton";

const PrivacyDiv = styled.div`
    width: auto;
    padding: 0% 20% 0% 20%;
`;

function Privacy(){
    return(
        <PrivacyDiv>
            {
                PrivacyData.map((value, key) => {
                    return(
                        <PrivacyToggleButton key={key} title={value.title} content={value.content}/>
                    );
                })
            }
        </PrivacyDiv>
    );
}
export default Privacy;