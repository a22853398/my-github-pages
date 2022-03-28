import React, { useState } from "react";
import PrivacyDataSozai from "./privacyDatas/PrivacyDataSozai";
import PrivacyDataPlugin from "./privacyDatas/PrivacyDataPlugin";
import PrivacyDataOuterService from "./privacyDatas/PrivacyDataOuterService";
import PrivacyDataReferUrl from "./privacyDatas/PrivacyDataReferUrl";
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

const StyledUl = styled.ul`
    list-style: none;
`;

export const PrivacyReferData = [
    {
        title: "本サイト使用素材一覧",
        content: <StyledTable>
                    <thead>
                        <tr>
                            <th >No.</th><th>タイトル</th><th>最後訪問日</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        PrivacyDataSozai.map((value, key) => {
                            return(
                                <tr key={key}>
                                    <td>{value.id}</td>
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
                                    <td>{value.id}</td>
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
                            <td>{value.id}</td>
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
        <React.StrictMode>
        <p>全てではありません。主にお世話になっている記事をここに記入いたしました。<br/>
        個人で勝手に参考にさせていただいた記事であるため、元記事（動画）への指摘、罵倒、誹謗中傷をお控えください。</p>
        <StyledUl>
            {
                PrivacyDataReferUrl.map( (value, key) => {
                    return(
                        <React.StrictMode key={key}>
                        <li>
                            <h3>{value.type}</h3>
                            <StyledTable>
                                <thead>
                                    <tr>
                                        <th>No.</th><th>タイトル</th><th>最終訪問日</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    //sort((a, b)=>a.title>b.title ? 1: -1) //ソート機能

                                    value.refers.map((valueIn, keyIn) => {
                                        return(
                                            <tr key={keyIn}>
                                                <td >{valueIn.id}</td>
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
                            </StyledTable>
                        </li>
                        </React.StrictMode>
                    );
                }
                )
            }
        </StyledUl>
        </React.StrictMode>
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