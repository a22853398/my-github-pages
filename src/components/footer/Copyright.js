import React from "react";
import styled from "styled-components";
import { CopyrightData } from "./CopyrightData";

const CopyrightDiv = styled.ul(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        listStyle: 'none',
    }
);

const CopyrightItem = styled.li(
    {
        paddingLeft: '0.5%',
        fontSize: '1rem',
        '& svg': {//コピーライトのアイコン
            fontSize : '1.2rem',
            marginTop: '1%',
            verticalAlign: 'middle'
        }
    }
);


function Copyright(){
    return (
        <div>
            <CopyrightDiv>
            {
                CopyrightData.map(
                    (value, key) => {
                        return (
                            <CopyrightItem key={key}>{value.value}</CopyrightItem>
                        );
                    }
                )
            }
            </CopyrightDiv>
        </div>
    );
};
export default Copyright;