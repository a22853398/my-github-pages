import React from "react";
import PrivacyDataSozai from "./PrivacyDatas/PrivacyDataSozai";
import PrivacyDataPlugin from "./PrivacyDatas/PrivacyDataPlugin";
import PrivacyDataOuterService from "./PrivacyDatas/PrivacyDataOuterService";
import PrivacyDataReferUrl from "./PrivacyDatas/PrivacyDataReferUrl";

export const PrivacyData = [
    {
        title: "本サイトの存在目的",
        content: <ul>
                    <li>駆け出しプログラマーがReactを練習する為、個人で作った、ポートフォリオ的なサイト。</li>
                    <li>イラストレーターに転職したい友人が制作イラストをついでに宣伝します。</li>
                    <li>ニートの友人が音楽の夢をあきらめ切れない為、友人の駄作をついでに宣伝します。</li>
                    <li>サイト上全体的に駄目な作品と雑乱のコードが飛び交っています。ご鞭撻のほどよろしくお願い申し上げます。</li>
                </ul>
    },
    {
        title: "個人情報の使用",
        content: <ul>
                    <li>お問い合わせ内容にて頂いた内容は、基本的に第三者へ渡しません。但し、以下の状況において個人情報の受け渡しが生じます。</li>
                    <ul>
                        <li>必要であれば、イラスト制作依頼は友人である robertchianing0534@gmail.com に情報を共有する場合</li>
                        <li>必要であれば、音楽制作依頼は、友人である @gmail.com に情報を共有する場合</li>
                        <li>サイバー犯罪、著作権侵害、（私以外への）誹謗中傷など、警察機関および司法機関が協力を要請する場合</li>
                        <li>その他、やむを得ず情報提供が強要される場合</li>
                    </ul>
                </ul>
    },
    {
        title: "本サイト訪問の情報収集",
        content: <ul>
                    <li>本サイトは利用している外部サービスの一部がCookiesや、ブラウザーのキャッシュなどを使用し、情報を収集する場合がございます。</li>
                    <li>本サイトは画像、音声ファイルなどの読み込みスピードを上昇する、ブラウザのキャッシュ機能を使用する場合がございます。</li>
                    <li>本サイトは画面遷移、画面描画、ボタン機能、プラグイン等がJavascriptを使って情報収集を行う場合がございます。</li>
                </ul>
    },
    
    {
        title: "本サイト使用素材一覧",
        content: <ul>
                    {
                        PrivacyDataSozai.map((value, key) => {
                            return(
                                <li key={key}>
                                    <a target="_blank"
                                        rel="noreferrer"
                                        href={value.url}>
                                        {value.title}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
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