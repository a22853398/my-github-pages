import React from "react";

import PrivacyDataReferUrl from "./privacyDatas/PrivacyDataReferUrl";
import PrivacyDataPlugin from "./privacyDatas/PrivacyDataPlugin";
import PrivacyDataSozai from "./privacyDatas/PrivacyDataSozai";
import PrivacyDataOuterService from "./privacyDatas/PrivacyDataOuterService";

class PrivacyReferData extends React.Component{
    handleSortByAscend(key){
        const line = this.state.data.sort((a,b)=> {
            if(a[key] < b[key]){return -1};
            if(a[key] > b[key]){return 1}; 
            return 0; 
        });
        this.setState({
            data: line
        });
    }
    handleSortByDescend(key){
        const line = this.state.data.sort((a,b)=> {
            if(a[key] < b[key]){return 1};
            if(a[key] > b[key]){return -1}; 
            return 0; 
        });
        this.setState({
            data: line
        });
    }

    render(){
        return(
            <React.StrictMode>
            <div>
                <button></button>
            </div>
            {
                
            }
            </React.StrictMode>
        );
    }
}
export default PrivacyReferData;