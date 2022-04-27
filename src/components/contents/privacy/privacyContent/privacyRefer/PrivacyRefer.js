import React from "react";
import PrivacyPageTable from "../../PrivacyPageTable";
import { PrivacyDataReferUrl, PrivacyDataReferUrlColumns } from "./PrivacyDataReferUrl";
import PrivacyToggleButtonRefer from "../../PrivacyToggleButtonRefer";


function PrivacyRefer() {
    return (
        <React.StrictMode>
            {
                PrivacyDataReferUrl.map(
                    (value, key) => {
                        return (
                            <PrivacyToggleButtonRefer
                                key={key}
                                title={value.type}
                                content={
                                    <PrivacyPageTable 
                                        data={value.refers}
                                        columns={PrivacyDataReferUrlColumns}
                                    />
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