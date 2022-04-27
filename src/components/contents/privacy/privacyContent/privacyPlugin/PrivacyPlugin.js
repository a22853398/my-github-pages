import React from "react";
import { PrivacyDataPlugin, PrivacyDataPluginColumns } from "./PrivacyDataPlugin";
import PrivacyPageTable from "../../PrivacyPageTable";

function PrivacyPlugin(){
    return(
        <PrivacyPageTable data={PrivacyDataPlugin} columns={PrivacyDataPluginColumns}/>
    );
}
export default PrivacyPlugin;