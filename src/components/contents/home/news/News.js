import React from "react";
import styled from "styled-components";
import { NewsData } from "./NewsData";

const InfoDiv = styled.div`
    text-align: center;
    padding: 20px 10px 10px 10px;
    box-sizing: border-box;
    & h2 {
        font-weight: bold;
    }
`;
const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: scretch;
    box-sizing: border-box;
    flex-wrap: wrap; /*改行*/
    border: 1px dotted silver;
`;

function News(){
    return(
        <InfoDiv>
            <h2>最新情報</h2>
            <ContentDiv>
            {
                NewsData.map((value, key) => {
                    
                })
            }
            </ContentDiv>
        </InfoDiv>
    );
}
export default News;
