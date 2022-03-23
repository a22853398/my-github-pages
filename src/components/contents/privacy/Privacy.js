import React from "react";
import styled from "styled-components";
import { PrivacyData } from "./PrivacyData";
import PrivacyToggleButton from "./PrivacyToggleButton";
import { PrivacyReferData } from "./PrivacyReferData";

const PrivacyDiv = styled.div`
    width: auto;
    padding: 0% 20% 0% 20%;
`;


function Privacy(){
    return(
        <PrivacyDiv>
            {
                PrivacyData.map((value, key) => {
                    //console.log(value.title+" "+key);
                    //console.log((key === PrivacyData.length - 1));
                    return(
                        <PrivacyToggleButton 
                            key={key} 
                            title={value.title} 
                            content={value.content}
                            theme={
                                {borderBottom: "0.5px"}
                            }
                        />
                        
                    );
                })
            }
            {
                PrivacyReferData.map((value, key) => {
                    return(
                        <PrivacyToggleButton 
                            key={key}
                            title={value.title}
                            content={value.content}
                            theme={
                                (key === PrivacyReferData.length -1) ? {borderBottom: "0.0px"} : {borderBottom: "0.5px"}
                            }
                        />
                    );
                })
            }
        </PrivacyDiv>
    );
}
export default Privacy;