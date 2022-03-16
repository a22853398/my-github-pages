import React from "react";
import styled from "styled-components";
import profile_pic from "../../../images/profile_pic.jpg";
import { AboutData, SelfIntroduction } from "./AboutData";
import { Link } from "react-router-dom";


const AboutDiv = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'center',
        width: '100%',
    }
);
const PicDiv = styled.div`
    padding: 1% 0%;
`;
const StyledPic = styled.img`
    height: 500px;
`;
const TextDiv = styled.div`
    height: 100%;
    width: 50%;
`;

const ProfileDiv = styled.div(
    {
        padding: '1% 0%',
        "& table":{
            width: '100%',
            "& th":{
                textAlign: "left",
                padding: '1% 1% 1% 2%',
                fontSize: '1.3rem',
                width: '20%',
                whiteSpace: 'nowrap',
                borderBottom: '0.5px darkgreen dashed',
            },
            "& td":{
                verticalAlign: 'middle',
                width: 'auto',
                whiteSpace: 'pre-wrap',
                borderBottom: '0.5px darkgreen dashed',
            }

        }
    }
);

const SupportDiv = styled.div`
    
    padding: 2% 1% 1% 1%;
    bottom: 0;
    
`;

function About(){
    return(
        <AboutDiv>
            <PicDiv>
                <StyledPic src={profile_pic} />
            </PicDiv>
            <TextDiv>
                <ProfileDiv>
                    <table>
                        <tbody>
                        {
                            AboutData.map((value, key) => {
                                return(
                                    <tr key={key}>
                                        <th>{value.title}</th>
                                        <td>{value.content}</td>
                                    </tr>
                                );
                            })
                        }
                        {
                            SelfIntroduction.map((value, key) => {
                                return(
                                    <tr key={key}>
                                        <th>{value.title}</th>
                                        <td>{value.content}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </ProfileDiv>
                <SupportDiv>
                    <p>画像は&ensp;
                        <Link to="../contact">robertchianing0534@gmail.com</Link>
                        &ensp;の方が描いてくれました<br/>
                        イラスト制作依頼は
                        <Link to="../contact">そちら</Link>
                        にご連絡ください
                    </p>
                </SupportDiv>
            </TextDiv>
        </AboutDiv>
    );
};
export default About;
//
/*
<SponsorMailTo 
                            email={SponsorData.map((value, key) => {
                                value.mail
                            })}
                            subject="イラスト制作依頼"
                            body=""
                        >
                            robertchianing0534@gmail.com
                        </SponsorMailTo>
*/ 