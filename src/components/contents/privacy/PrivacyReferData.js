import React from "react";
import PrivacyDataSozai from "./PrivacyDatas/PrivacyDataSozai";
import PrivacyDataPlugin from "./PrivacyDatas/PrivacyDataPlugin";
import PrivacyDataOuterService from "./PrivacyDatas/PrivacyDataOuterService";
import PrivacyDataReferUrl from "./PrivacyDatas/PrivacyDataReferUrl";
import styled from "styled-components";

const StyledTable = styled.table`
    font-size: 20px;
`;

export const PrivacyReferData = [
    {
        title: "本サイト使用素材一覧",
        content: <StyledTable>
                    {
                        PrivacyDataSozai.map((value, key) => {
                            return(
                                <tr key={key}>
                                    <a target="_blank"
                                        rel="noreferrer"
                                        href={value.url}>
                                        <th>{value.title}</th>
                                    </a>
                                </tr>
                            );
                        })
                    }
                </StyledTable>
    },
    {
        title: "本サイト使用プラグイン一覧",
        content: <ul>
                    {
                        PrivacyDataPlugin.map((value, key) => {
                            return(
                                <li key={key}>
                                    <a  target="_blank" 
                                        rel="noreferrer" 
                                        href={value.url}
                                    >
                                        {value.title}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
    },
    {
        title: "本サイト使用外部サービス一覧",
        content: 
        <ul>
            {
                PrivacyDataOuterService.map( (value, key) => {
                    return(
                        <li key={key}>
                            <a  href={value.url}
                                target="_blank"
                                rel="noreferrer" >
                                {value.title}
                            </a>
                        </li>
                    );
                }
                )
            }
        </ul>
    },
    {
        title: "参考資料一覧",
        content: 
        <ul>
            {
                PrivacyDataReferUrl.map( (value, key) => {
                    return(
                        <li key={key}>
                            {value.type}
                            {
                                <table>
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
                                </table>
                            }
                        </li>
                    );
                }
                )
            }
        </ul>
    },
];