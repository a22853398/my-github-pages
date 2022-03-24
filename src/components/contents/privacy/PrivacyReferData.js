import React from "react";
import PrivacyDataSozai from "./PrivacyDatas/PrivacyDataSozai";
import PrivacyDataPlugin from "./PrivacyDatas/PrivacyDataPlugin";
import PrivacyDataOuterService from "./PrivacyDatas/PrivacyDataOuterService";
import PrivacyDataReferUrl from "./PrivacyDatas/PrivacyDataReferUrl";
import styled from "styled-components";

const StyledTable = styled.table`
    width: 95%;
    border: 1px solid black;
    margin: 0% 2% 2% 2%;
    & a, & a:link, & a:visited{
        text-decoration: none;
        color: darkgreen;
    }
    & tr{
        & th {
            border-bottom: 1px dotted yellowgreen;
            border-right: 1px dotted yellowgreen;
            font-size: 1.1rem;
            text-align: center;
            padding: 1% 0%;
        }
        & th:first-child{
            width: 8%;
        }
        & th:last-child{
            border-right: none;
            width: 15%;
        }
        & td{
            border-right: 1px dotted yellowgreen;
            border-bottom: 1px dotted yellowgreen;
            padding: 1% 0%;
        }
        & td:first-child{
            text-align: center;
        }
        & td:nth-child(2){
            padding-left: 1%;

        }
        & td:last-child{
            border-right: none;
            text-align: center;
        }
    }
    & tr:last-child{
        & td{
            border-bottom: none;
        }
    }
`;

export const PrivacyReferData = [
    {
        title: "本サイト使用素材一覧",
        content: <StyledTable>
                    <thead>
                        <tr>
                            <th>No.</th><th>タイトル</th><th>最後訪問日</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        PrivacyDataSozai.map((value, key) => {
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>
                                        <a target="_blank"
                                            rel="noreferrer"
                                            href={value.url}>
                                            {value.title}
                                        </a>
                                    </td>
                                    <td>{value.lastVisit}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </StyledTable>
    },
    {
        title: "本サイト使用プラグイン一覧",
        content: <StyledTable>
                    <thead>
                        <tr>
                            <th>No.</th><th>タイトル</th><th>最後訪問日</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        PrivacyDataPlugin.map((value, key) => {
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>
                                    <a  target="_blank" 
                                        rel="noreferrer" 
                                        href={value.url}>
                                        {value.title}
                                    </a>
                                    </td>
                                    <td>{value.lastVisit}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </StyledTable>
    },
    {
        title: "本サイト使用外部サービス一覧",
        content: 
        <StyledTable>
            <thead>
                <tr>
                    <th>No.</th><th>タイトル</th><th>最後訪問日</th>
                </tr>
            </thead>
            <tbody>
            {
                PrivacyDataOuterService.map( (value, key) => {
                    return(
                        <tr key={key}>
                            <td>{key}</td>
                            <td>
                                <a  href={value.url}
                                    target="_blank"
                                    rel="noreferrer" >
                                    {value.title}
                                </a>
                            </td>
                            <td>{value.lastVisit}</td>
                        </tr>
                    );
                }
                )
            }
            </tbody>
        </StyledTable>
    },
    {
        title: "参考資料一覧",
        content: 
        <ul>
            {
                PrivacyDataReferUrl.map( (value, key) => {
                    return(
                        <React.StrictMode key={key}>
                        <li>
                            <h3>{value.type}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th><th>タイトル</th><th>最終訪問日</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    value.refers.map((valueIn, keyIn) => {
                                        return(
                                            <tr key={keyIn}>
                                                <td>{keyIn}</td>
                                                <td>
                                                    <a href={valueIn.url}
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        {valueIn.title}
                                                    </a>
                                                </td>
                                                <td>{valueIn.lastVisit}</td>
                                            </tr>
                                        );
                                    }
                                    )
                                }
                                </tbody>
                            </table>
                        </li>
                        
                        </React.StrictMode>
                    
                    );
                }
                )
            }
        </ul>
    },
];

/**
{
                                <tr>
                                    {
                                        value.refers.map((valueIn, keyIn) => {
                                            return(
                                                <tr key={keyIn}>
                                                    <td>
                                                        <a target="_blank"
                                                            rel="noreferrer"
                                                            href={valueIn.url}
                                                        >
                                                            {valueIn.title}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {valueIn.lastVisit}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tr>
                            }
 */

/*
<table>
                            <tr>
                                <th>No.</th><th>タイトル</th><th>最終訪問日</th>
                            </tr>
                        {
                            value.refers.map((valueIn, keyIn) => {
                                return(
                                    <tr key={keyIn}>
                                        <td>{keyIn}</td>
                                        <td>
                                            <a href={valueIn.url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {valueIn.title}
                                            </a>
                                        </td>
                                        <td>{valueIn.lastVisit}</td>
                                    </tr>
                                );
                            }
                            )
                        }
                        </table>
*/