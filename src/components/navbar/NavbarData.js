import React from "react";
import {AiOutlineHome, AiOutlineTool, AiOutlineMail} from "react-icons/ai";
import {BiBuilding} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";

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
        title: '保管庫',
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
];


