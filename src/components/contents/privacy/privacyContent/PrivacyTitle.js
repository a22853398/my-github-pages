import React from "react";
import { PrivacyMokuteki } from "./privacyMokuteki/PrivacyMokuteki";
import { PrivacyKojinjoho } from "./privacyKojinjoho/PrivacyKojinjoho";
import { PrivacyInfoCollect } from "./privacyInfoCollect/PrivacyInfoCollect";
import PrivacySozai from "./privacySozai/PrivacySozai";

import ReactTablePageTest from "../../../test/ReactTablePageTest";
import ReactTableSortTest from "../../../test/ReactTableSortTest";
import { columns, data } from "../../../test/ReactTableData";

export const PrivacyTitle = [
    {id:1, title: "本サイトの存在目的", 
        content: <ul>{PrivacyMokuteki.map((value, key) => {
            return(
                <li key={key}>{value.content}</li>
            );
        })}
        </ul>
    },
    {id:2, title: "個人情報の使用", content:
        <ul>
            <li>お問い合わせ内容にて頂いた内容は、基本的に第三者へ渡しません。但し、以下の状況において個人情報の受け渡しが生じます。</li>
            <ul>
            {
                PrivacyKojinjoho.map((value, key) => {
                    return(
                        <li key={key}>
                            {value.content}
                        </li>
                    );
                })
            }
            </ul>
        </ul>
    },
    {id:3, title: "本サイト訪問の情報収集", content: 
    <ul>
       {
           PrivacyInfoCollect.map((value,key) => {
               return(
                   <li key={key}>
                       {value.content}
                   </li>
               );
           })
       } 
    </ul>
    },
    {id:4, title: "本サイト使用素材一覧", content: 
    <PrivacySozai />
    },
    {id:5, title: "本サイト使用プラグイン一覧", content: 
    ""
    },
    {id:6, title: "本サイト使用外部サービス一覧", content: 
    ""
    },
    {id:7, title: "参考資料一覧",content: 
    <ReactTablePageTest data={data} columns={columns}/>
    },
];