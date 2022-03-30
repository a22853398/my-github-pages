

/**
 * 使用しているプラグイン
 */
 export const PrivacyDataPlugin = [
    { 
        id:1, 
        title: <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">
            React Icons</a>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:2, 
        title: <a href="https://reactrouter.com/docs/en/v6/getting-started/overview" target="_blank"  rel="noreferrer">
            React Router v6</a>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:3, 
        title: <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
            styled-components</a>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:4, 
        title: <a href="https://www.npmjs.com/package/gh-pages" target="_blank" rel="noreferrer">
            gh-pages</a>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:5, 
        title: <a href="https://www.npmjs.com/package/react-google-recaptcha" target="_blank" rel="noreferrer">
            react-google-recaptcha v2</a>, 
        lastVisit:"2022-03-23"
    },
    { 
        id:6, 
        title: <a href="https://react-table.tanstack.com/" target="_blank" rel="noreferrer">
            react-table</a>, 
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
