import CostumNewTargetATag from "../../../../reuseAtoms/CostomNewTargetATag";
/**
 * 使用している外部サービス
 */
export const PrivacyDataOuterService = [
    { 
        id:1, 
        title: <CostumNewTargetATag 
            url="https://www.google.com/recaptcha/about/" 
            text="Google Recaptcha v2" />,  
        lastVisit: "2022-03-24"
    },
    { 
        id:2, 
        title: <CostumNewTargetATag 
            url="https://formspree.io/" 
            text="formspree" />, 
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