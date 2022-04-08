import React from "react";
import GithubPic from "../../../../images/Octocat.jpg";
import GitlabPic from "../../../../images/gitlab-icon-rgb.png";
import tempPic from "../../../../images/profile_icon.png";

export const ProjectDatas = [
    /*
    {
        id:1,
        title: "",
        phase: [],
        lang: [],
        date: "",
        url: "",
        src: ""
    },
    */
    {
        id: 1,
        title: "プログラミングスクールのプロジェクト",
        phase: ["設計", "開発", "テスト", "実装"],
        lang: ["C#","Unity"],
        date: "2019.09-2020.01",
        url: "https://gitlab.com/u9908028/unity-",
        src: GitlabPic
    },
    {
        id: 2,
        title: "日本語教科書出版社の公式サイト",
        phase: ["保守運用", "提案", "企画"],
        lang: ["Javascript", "PHP", "MySQL", "HTML"],
        date: "2021.01-現在",
        url: "https://www.dahhsin.com.tw/",
        src: tempPic
    },
    {
        id: 3,
        title: "",
        phase: [],
        lang: [],
        date: "",
        url: "",
        src: ""
    },
];

export const ProjectTagsLang = [
    {
        id: 1,
        title: "Javascript"
    },
    {
        id: 2,
        title: "Java"
    },
    {
        id: 3,
        title: "C#"
    },
    {
        id: 4,
        title: "C/C++"
    },
    {
        id: 5,
        title: "Python"
    },
    {
        id: 6,
        title: "PHP"
    },
    {
        id: 7,
        title: "Ruby"
    }
];

export const ProjectTagsSQL = [
    {
        id: 8,
        title: "MySQL"
    },
    {
        id: 9,
        title: "Oracle"
    },
    {
        id: 10,
        title: "MangoDB"
    },
    {
        id: 11,
        title: "PostgreSQL"
    },
    {
        id: 12,
        title: "MS SQL"
    }
];