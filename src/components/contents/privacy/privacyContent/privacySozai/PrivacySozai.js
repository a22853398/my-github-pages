import React from "react";
import PrivacyPageTable from "../../PrivacyPageTable";
import { PrivacyDataSozai, PrivacyDataSozaiColumn} from "./PrivacyDataSozai";

function PrivacySozai(){
    return(
        <PrivacyPageTable data={PrivacyDataSozai} columns={PrivacyDataSozaiColumn}/>
    );
}
export default PrivacySozai;