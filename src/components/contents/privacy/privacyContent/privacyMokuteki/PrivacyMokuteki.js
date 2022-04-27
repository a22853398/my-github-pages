import React from "react";
import ContactMailTo from "../../../../reuseAtoms/ContactMailTo";

export const PrivacyMokuteki = [
    {id:1, content:"駆け出しプログラマーがReactを練習する為、個人で作った、ポートフォリオ的なサイト。"},
    {id:2, content:"イラストレーターに転職したい友人が制作イラストをついでに宣伝します。"},
    {id:3, content:"ニートの友人が音楽の夢をあきらめ切れない為、友人の拙い作品をついでに宣伝します。"},
    {id:4, content:
        <React.StrictMode>
         サイト上全体的に駄目な作品と雑乱のコードが飛び交っています。ご鞭撻のほどよろしくお願い申し上げます。<br/>
         記事掲示の取り消しや修正、制作依頼などがございましたら&ensp;<ContactMailTo email='u9908028@gmail.com'>u9908028@gamil.com</ContactMailTo>&ensp;にご連絡ください。
        </React.StrictMode>
    },
];