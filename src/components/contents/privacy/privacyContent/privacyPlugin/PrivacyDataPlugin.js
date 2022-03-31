import CostumNewTargetATag from "../../../../reuseAtoms/CostomNewTargetATag";

/**
 * 使用しているプラグイン
 */
 export const PrivacyDataPlugin = [
    { 
        id:1, 
        title: <CostumNewTargetATag 
            url="https://react-icons.github.io/react-icons/" 
            text="React Icons"/>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:2, 
        title: <CostumNewTargetATag 
            url="https://reactrouter.com/docs/en/v6/getting-started/overview" 
            text="React Router v6" />, 
        lastVisit:"2022-03-23"
    },
    { 
        id:3, 
        title: <CostumNewTargetATag 
            url="https://styled-components.com/" 
            text="styled-components" />, 
        lastVisit:"2022-03-23"
    },
    { 
        id:4, 
        title: <CostumNewTargetATag 
            url="https://www.npmjs.com/package/gh-pages" 
            text="gh-pages"/>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:5, 
        title: <CostumNewTargetATag 
            url="https://www.npmjs.com/package/react-google-recaptcha" 
            text="react-google-recaptcha v2"/>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:6, 
        title: <CostumNewTargetATag 
            url="https://react-table.tanstack.com/" 
            text="react-table"/>, 
        lastVisit:"2022-03-29"
    },
];

export const PrivacyDataPluginColumns = [
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
