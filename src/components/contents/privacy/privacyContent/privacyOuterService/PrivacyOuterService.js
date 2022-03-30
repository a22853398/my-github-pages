import React from "react";
import PrivacyPageTable from "../../PrivacyPageTable";
import { PrivacyDataOuterService, PrivacyDataOuterServiceColumns } from "./PrivacyDataOuterService";

function PrivacyOuterService(){
    return(
        <PrivacyPageTable data={PrivacyDataOuterService} columns={PrivacyDataOuterServiceColumns}/>
    );
}
export default PrivacyOuterService;