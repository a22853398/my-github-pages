import CostumNewTargetATag from "../../../../reuseAtoms/CostomNewTargetATag";
/**
 * 使用した素材
 */
export const PrivacyDataSozai = [
    {   
        id:1, 
        title: <CostumNewTargetATag 
            url="#" 
            text="自作イラスト"/>, 
        lastVisit:"2022-03-29"},
    { 
        id:2, 
        title: <CostumNewTargetATag 
            url="https://icon-icons.com/icon/gitlab-original-logo/146503" 
            text="gitlab icon" />, 
        lastVisit:"2022-03-25"},
    { 
        id:3, 
        title: <CostumNewTargetATag 
            url="https://pngimg.com/image/73422" 
            text="github icon" />, 
        lastVisit:"2022-03-25"
    },
    { 
        id:4, 
        title: <CostumNewTargetATag 
            url="https://about.gitlab.com/press/press-kit/" 
            text="gitlab logo" />, 
        lastVisit: "2022-03-25"
    },
    { 
        id:5, 
        title: <CostumNewTargetATag 
            url="https://github.com/logos" 
            text="github logo" />, 
        lastVisit:"2022-03-25"
    },
    { 
        id:6, 
        title: <CostumNewTargetATag 
            url="https://www.irasutoya.com/" 
            text="いらすとや" />, 
        lastVisit:"2022-03-29"
    }
];
export const PrivacyDataSozaiColumn = [
    { Header:"No.", accessor: "id"},
    { Header:"タイトル", accessor: "title"},
    { Header:"最後訪問日", accessor: "lastVisit"},
];
