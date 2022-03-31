import CostomNewTargetATag from "../../../../reuseAtoms/CostomNewTargetATag";
/**参考資料の各項目 */
/**
 * 環境設定とインストール
 */
const installAndSetting =[
    {
        id: 1, 
        title: <CostomNewTargetATag 
            url="https://qiita.com/watataku8911/items/d632e2274c6921f1e109"
            text="React始めました。(基本構文編)"/>, 
        lastVisit:"2022-03-31"
    },
    {
        id: 2, 
        title: <CostomNewTargetATag 
            url="https://www.youtube.com/watch?v=XKSYF2aZnkQ"
            text="#01 新・日本一わかりやすいReact入門【基礎編】Reactの基礎知識"/>, 
        lastVisit:"2022-03-25"
    },
    {
        id: 3, 
        title: <CostomNewTargetATag 
            url="http://www.aaronlife.com/v1/teaching/uch_rwd_2018-08-19.html"
            text="現代前端網站開發"/>, 
        lastVisit:"2022-03-25"
    },
    {
        id: 1, 
        title: <CostomNewTargetATag 
            url="https://ja.reactjs.org/tutorial/tutorial.html"
            text="チュートリアル：React の導入"/>, 
        lastVisit:"2022-03-25"
    }
];
/**メール送信 */
const mailToRefer = [
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://www.mochinoki-labo.com/react-contact-send-mail/"
            text="もちのき研究所"
            />,
        lastVisit: "2022-03-23"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="https://ja.reactjs.org/docs/forms.html"
            text="フォーム" />,
        lastVisit: "2022-03-23"
    },
    {
        id: 3,
        title: <CostomNewTargetATag
            url="https://webhacck.net/archives/3194124.html"
            text="うえぶはっく"/>,
        lastVisit: "2022-03-23"
    },
    {
        id: 4,
        title: <CostomNewTargetATag
            url="https://www.30secondsofcode.org/react/s/mailto"
            text="Renders a link formatted to send an email (mailto: link)."/>,
        lastVisit: "2022-03-25"
    }
];
/**配列 */
const arrayRefer = [
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://ja.reactjs.org/docs/lists-and-keys.html"
            text="リストと key"/>,
        lastVisit: "2022-03-23"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="http://basic-react.axlight.com/html/lesson-07.html"
            text="配列から展開する" />,
        lastVisit: "2022-03-23"
    }
];
/**画面遷移 */
const changePage = [
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://www.youtube.com/watch?v=Yg2lacl5OSY"
            text="Deploying React.js app to GitHub Pages with React Router"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="https://www.youtube.com/watch?v=NPr3yOWK5GE"
            text="HTMLとCSSでオシャレなナビゲーションサイドバーの作り方 - HTML/CSS/Javascript -"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 3,
        title: <CostomNewTargetATag 
            url='https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab'
            text='React-Router open Link in new tab'/>,
        lastVisit: "2022-03-31"    
    }
];
/**gh-pagesでのデプロイ*/
const ghPageRefer = [
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://nekoniki.com/20200708_react_githubpages/"
            text="ReactアプリをGitHub Pagesに公開する(ライブラリ無しver)"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="https://ja.reactjs.org/docs/add-react-to-a-website.html"
            text="既存のウェブサイトに React を追加する"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 3,
        title: <CostomNewTargetATag
            url="https://www.youtube.com/watch?v=5I37iVCDUTU"
            text="How to deploy a React app to Github Pages with Github Actions"/>,
        lastVisit: "2022-03-25"
    }
];
/**CSS in Javascript */
const cssInJs =[
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://stackoverflow.com/questions/55471613/how-can-set-global-font-family-using-styled-components"
            text="How can set global font-family using Styled-Components"/>,
        lastVisit: "2022-03-23"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="https://www.i-ryo.com/entry/2020/12/16/052128#%E5%AD%90%E8%A6%81%E7%B4%A0%E3%81%AE%E8%A8%AD%E5%AE%9A"
            text="【React】styled-componentsでCSS in JSを事始める"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 3,
        title: <CostomNewTargetATag
            url="https://gist.github.com/kenmori/60bf7b67819061f41ce960617c035955"
            text="styled-componentsの使い方(パッとわかりやすく、色々なパターンを説明することを目指す記事)"/>,
        lastVisit: "2022-03-30"
    },
    {
        id: 4,
        title: <CostomNewTargetATag 
            url="https://ralacode.com/blog/post/how-to-use-styled-components/"
            text="【React】styled-componentsの使い方【具体例あり】"/>,
        lastVisit: "2022-03-31"
    },
    {
        id:5,
        title: <CostomNewTargetATag 
            url="https://stackoverflow.com/questions/14750078/style-disabled-button-with-css"
            text="Style disabled button with CSS"/>,
        lastVisit: "2022-03-31"
    }
];
/** */
const googleRecaptchaRefer = [
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://stackoverflow.com/questions/55471613/how-can-set-global-font-family-using-styled-components"
            text="How can set global font-family using Styled-Components"/>,
        lastVisit: "2022-03-23"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="https://help.formspree.io/hc/en-us/articles/360022811154-Adding-a-custom-reCAPTCHA-v2-key"
            text="Adding a custom reCAPTCHA v2 key"/>,
        lastVisit: "2022-03-23"
    }
];
/**その他参考資料 */
const otherRefer = [
    {
        id: 1,
        title: <CostomNewTargetATag
            url="https://qiita.com/JNJDUNK/items/2dbb511e38ddbba038b4"
            text="【コード品質】綺麗なReactコード 中級 7例"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 2,
        title: <CostomNewTargetATag
            url="https://buildersbox.corp-sansan.com/entry/2022/01/06/110000"
            text="変更に強いコンポーネント設計の方針と規約（Webフロントエンド）"/>,
        lastVisit: "2022-03-25"
    },
    {
        id: 3,
        title: <CostomNewTargetATag
            url="https://qiita.com/togana/items/e739e1ec943862a71757"
            text="Reactでaタグの中にtarget='_blank'を書いたらESLintに怒られた話"/>,
        lastVisit: "2022-03-31"
    },
    {
        id: 4,
        title: <CostomNewTargetATag 
            url="https://digipress.info/tech/how-to-conditionally-wrap-element-in-react-jsx/"
            text="ReactのJSXで条件によって要素を任意のHTMLタグで括る方法"/>,
            lastVisit: "2022-03-31"
    },
    {
        id:5,
        title:<CostomNewTargetATag 
            url="https://react-cn.github.io/react/docs/tags-and-attributes.html"
            text="Tags and Attributes"/>,
        lastVisit: "2022-03-31"
    },
    {
        id:6,
        title: <CostomNewTargetATag
            url="https://tarovlog.com/2021/03/21/react-target/"
            text="Reactで属性取得。target と currentTarget の違いを解説"/>,
        lastVisit: "2022-03-31"    
    },
    {
        id:7,
        title: <CostomNewTargetATag 
            url="https://stackoverflow.com/questions/64004975/how-to-add-target-blank-on-react"
            text="how to add target=_blank on react"/>,
        lastVisit: "2022-03-31"
    }
];
/**基礎参考資料 */
const basicRefer = [
    {
        id: 1,
        title: <CostomNewTargetATag 
            url="https://ja.reactjs.org/docs/jsx-in-depth.html"
            text="JSXを深く理解する" />,
        lastVisit: "2022-03-31"
    },
    {
        id:2,
        title: <CostomNewTargetATag 
            url="https://www.tohoho-web.com/ex/react.html"
            text="とほほのReact入門" />,
        lastVisit: "2022-03-31"    
    },
    
];


/**
 * 参考している資料
 */
export const PrivacyDataReferUrl = [
    {
        type: "環境設定とインストール",
        refers: installAndSetting
    },
    {
        type: "メール送信",
        refers: mailToRefer
    },
    {
        type: "配列",
        refers: arrayRefer
    },
    {
        type: "メニュー、画面遷移",
        refers: changePage
    },
    {
        type: "gh-pagesでのデプロイ",
        refers: ghPageRefer
    },
    {
        type: "CSS in Javascript",
        refers: cssInJs
    },
    {
        type: "Google Recaptcha",
        refers: googleRecaptchaRefer
    },
    {
        type: "その他",
        refers: otherRefer
    },
    {
        type: "基礎",
        refers: basicRefer
    }
];



export const PrivacyDataReferUrlColumns = [
    {
        Header: 'No.',
        accessor: 'id'
    },
    {
        Header: 'タイトル',
        accessor: 'title'
    },
    {
        Header: '最終訪問日',
        accessor: 'lastVisit'
    },
];