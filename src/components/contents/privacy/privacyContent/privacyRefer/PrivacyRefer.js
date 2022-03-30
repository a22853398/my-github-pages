import React from "react";
import PrivacyPageTable from "../../PrivacyPageTable";
import {PrivacyDataReferUrl, PrivacyDataReferUrlColumns} from "./PrivacyDataReferUrl";
import PrivacyToggleButtonRefer from "../../PrivacyToggleButtonRefer";
import styled from "styled-components";


    
        

function PrivacyRefer(){
    return(
        <React.StrictMode>
            {
                PrivacyDataReferUrl.map(
                    (value, key) => {
                        return(
                            <PrivacyToggleButtonRefer 
                                key={key}
                                title={value.type} 
                                content={
                                    value.refers.map(
                                        (valueIn, keyIn) => {
                                            return(
                                                <p>{keyIn}</p>
                                            );
                                        }
                                    )
                                }
                            />
                        );
                    }
                )
            }
        </React.StrictMode>
    );
}
export default PrivacyRefer;