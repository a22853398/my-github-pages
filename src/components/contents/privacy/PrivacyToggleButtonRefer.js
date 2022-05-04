import React, { useState } from "react";
import styled from "styled-components";
import {VscChevronRight, VscChevronDown} from "react-icons/vsc"

const PrivacyToggleButtonReferDiv = styled.div(
    {
        margin: '2% 0% 2% 2%',
    }
);

const PrivacyHeaderDiv = styled.div(
    {
        '& h3':{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            verticalAlign: 'middle',

            cursor: 'pointer'
        },
        '& h3:hover':{
            color: 'rgba(40, 180, 40 ,0.7)'
        },
        margin: '0% 0% 1% 1%',
        lineHeight: '1.5rem'
    }
);
/*
const PrivacyBodyDiv = styled.div`
    border-bottom: ${props=> props.theme.borderBottom} solid darkgreen;
`;
*/
const PrivacyBodyDiv = styled.div`
    
`;
const PrivacyContentDiv = styled.div`
    
`;


function PrivacyToggleButtonRefer(props){
    const [checked, setChecked] = useState(false);
    //checked -> 状態の変数宣告、これが判断用のものとなる
    //setChecked -> 状態を設定し直す関数、基本的に後ろの括弧に引数を渡す
    //useState() -> React Hook 関数

    return(
        <PrivacyToggleButtonReferDiv>
            <PrivacyHeaderDiv>
                <h3 onClick={ () => setChecked(!checked)}>{checked ? <VscChevronDown/>: <VscChevronRight/>}{props.title}</h3>
            </PrivacyHeaderDiv>
            <PrivacyBodyDiv>
            {
                checked ? <PrivacyContentDiv>{props.content}</PrivacyContentDiv> : ""
            }
            </PrivacyBodyDiv>
        </PrivacyToggleButtonReferDiv>
    );
}
export default PrivacyToggleButtonRefer;