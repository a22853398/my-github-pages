import React, { useState } from "react";
import styled from "styled-components";

const PrivacyContentDiv = styled.div`
        display: block;
    `;

export const TestTT = () => {
    <div>
        TestTT
    </div>
} 

function PrivacyToggleButton(props){
    const [checked, setChecked] = useState(false);
    //checked -> 状態の変数宣告、これが判断用のものとなる
    //setChecked -> 状態を設定し直す関数、基本的に後ろの括弧に引数を渡す
    //useState() -> React Hook 関数

    return(
        <div>
            <h2 onClick={ () => setChecked(!checked)}><span>{checked ? 'O': 'X'}</span>{props.title}</h2>
            {
                checked ? <PrivacyContentDiv>{props.content}</PrivacyContentDiv> : "" 
            }
        </div>
        
    );
}
export default PrivacyToggleButton;