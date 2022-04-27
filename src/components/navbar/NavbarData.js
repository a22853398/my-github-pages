import React from "react";
import {AiOutlineHome, AiOutlineTool, AiOutlineMail} from "react-icons/ai";
import {BiBuilding} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {BsExclamationDiamond} from "react-icons/bs"; 

export const NavbarData = [
    {
        title: 'ホーム',
        icon: <AiOutlineHome />,
        url: '/'
    },
    {
        title: 'ツール',
        icon: <AiOutlineTool />,
        url: '/tool'
    },
    {
        title: 'コード置き場',
        icon: <BiBuilding />,
        url: '/kura'
    },
    {
        title: 'プロフィール',
        icon: <CgProfile />,
        url: '/about'
    },
    {
        title: 'お問い合わせ',
        icon: <AiOutlineMail />,
        url: '/contact'
    },
    {
        title: 'プライバシー',
        icon: <BsExclamationDiamond />,
        url:'/privacy'
    }
];



