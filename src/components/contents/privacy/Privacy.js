import React from "react";
import styled from "styled-components";
import PrivacyToggleButton from "./PrivacyToggleButton";
import { PrivacyTitle } from "./privacyContent/PrivacyTitle";

const PrivacyDiv = styled.div`
    width: 80%;
    padding: 0% 0% 0% 0%;
    margin: auto;
`;


function Privacy(){
    return(
        <PrivacyDiv>
            {
                PrivacyTitle.map((value, key)=>{
                    return(
                        <PrivacyToggleButton
                            key={key}
                            title={value.title}
                            content={value.content}
                            theme={
                                (key === PrivacyTitle.length-1 ? {borderBottom: "0.0px"} : {borderBottom: "0.5px"})
                            }
                        >
                        </PrivacyToggleButton>
                    );
                })
            }
        </PrivacyDiv>
    );
}
export default Privacy;