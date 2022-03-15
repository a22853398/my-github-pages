import React from "react";
import styled from "styled-components";
import profile_pic from "../../../images/profile_pic.jpg";

const AboutDiv = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        backgroundColor: 'skyblue'
    }
);
const PicDiv = styled.div`
    border: 1px solid black;
`;
const StyledPic = styled.img`
    height: 60%;
`;
const ProfileDiv = styled.div`
    border: 1px solid black;
    height: 100%;
`;

function About(){
    return(
        <AboutDiv>
            <PicDiv>
                <StyledPic src={profile_pic} />
            </PicDiv>
            <ProfileDiv>
                <ul>
                    <li>名前：頼威宏</li>
                    <li>フリガナ：ライウェイホン</li>
                    <li>出身：タピオカミルクティが有名な国</li>
                    <li>身長：175センチ</li>
                    <li>体重：50~55キロ、増えたり減ったり</li>
                    <li>最終学歴：台湾の東華大学文学部</li>
                    <li>好きなもの：スマホゲームのガチャ、Steamゲーム、散歩、まったり、コードを見る（書くとは言ってない）、夢小説のような妄想</li>
                    <li>嫌いなもの：ロボットでできる繰り返し作業</li>
                    <li>自己PR：完全に文系エンジニアです。最近、エンジニア歴2年目に突入しましたが、自分の学の浅はかさに恥を感じる日々を送っています
                    </li>
                    <li>特技：プロフィールのような無駄な文を書くこと</li>
                </ul>
                <p>プロフィール画像は robertchianing0534@gmail.com の方が描いてくれました。イラスト制作依頼はこちらにご連絡ください</p>
            </ProfileDiv>
        </AboutDiv>
    );
};
export default About;