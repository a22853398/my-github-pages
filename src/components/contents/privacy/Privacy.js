import React from "react";
import { PrivacyData } from "./PrivacyData";
import PrivacyToggleButton from "./PrivacyToggleButton";

function Privacy(){
    return(
        <div>
            {
                PrivacyData.map((value, key) => {
                    return(
                        <PrivacyToggleButton key={key} title={value.title} content={value.content}/>
                    );
                })
            }
        </div>
    );
}
export default Privacy;