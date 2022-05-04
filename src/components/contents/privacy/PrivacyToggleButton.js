import React, { useState } from "react";
import styled from "styled-components";
import {VscChevronRight, VscChevronDown} from "react-icons/vsc"

const PrivacyUnitDiv = styled.div(
    {
        margin: '30px 0%',
    }
);
const PrivacyHeaderDiv = styled.div(
    {
        '& h2':{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            verticalAlign: 'middle',
            fontWeight: 'bold',
            cursor: 'pointer'
        },
        '& h2:hover':{
            color: 'rgba(40, 180, 40 ,0.7)'
        }
    }
);

const PrivacyBodyDiv = styled.div`
    border-bottom: ${props=> props.theme.borderBottom} solid darkgreen;
`;
const PrivacyContentDiv = styled.div`
    
`;


function PrivacyToggleButton(props){
    const [checked, setChecked] = useState(false);
    //checked -> 状態の変数宣告、これが判断用のものとなる
    //setChecked -> 状態を設定し直す関数、基本的に後ろの括弧に引数を渡す
    //useState() -> React Hook 関数

    return(
        <PrivacyUnitDiv>
            <PrivacyHeaderDiv>
                <h2 onClick={ () => setChecked(!checked)}>{checked ? <VscChevronDown/>: <VscChevronRight/>}{props.title}</h2>
            </PrivacyHeaderDiv>
            <PrivacyBodyDiv theme={props.theme}>
            {
                checked ? <PrivacyContentDiv>{props.content}</PrivacyContentDiv> : ""
            }
            </PrivacyBodyDiv>
        </PrivacyUnitDiv>
    );
}
export default PrivacyToggleButton;