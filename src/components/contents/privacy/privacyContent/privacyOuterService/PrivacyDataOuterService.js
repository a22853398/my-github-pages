/**
 * 使用している外部サービス
 */
export const PrivacyDataOuterService = [
    { 
        id:1, 
        title: <a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noreferrer">
            Google Recaptcha v2</a>,  
        lastVisit: "2022-03-24"
    },
    { 
        id:2, 
        title: <a href="https://formspree.io/" target="_blank" rel="noreferrer">
            formspree</a>, 
        lastVisit:"2022-03-25"
    },
]; 

export const PrivacyDataOuterServiceColumns = [
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
    }
];