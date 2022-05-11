import React from "react";
import { Col, Button, Container, Row, Card, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';//この行
import styled, { keyframes } from "styled-components";
import profileIcon from "../../../images/ojigi_animal_inu.png";
import { QuickAccessData } from "./quickAccess/QuickAccessData";
import QuickAccess from "./quickAccess/QuickAccess";
import News from "./news/News";

const colorChangeText = keyframes`
    0% { color: red; }
    33% { color: green; }
    66% { color: blue;}
    100% { color: red; }
`;
const TitleDiv = styled.div`
    font-size: 20px;
    text-align: center;
    padding: 10px 0;
    border-bottom: 0.5px dotted darkgreen;
    margin: 0 0 10px 0;
    animation: ${colorChangeText} 2s linear infinite;
`;
const StyleImg = styled.img`
    width: 300px;
    height: auto;
`;

const MemoDiv = styled.div`

`;
const InfoDiv = styled.div`
    text-align: center;
    padding: 20px 10px 10px 10px;
    box-sizing: border-box;
    & h2 {
        font-weight: bold;
    }
`;





function Home() {
    return (
        <React.StrictMode>
            <Container>
                <Row>
                    <Col>
                        <QuickAccess></QuickAccess>
                    </Col>
                    <Col>
                        <News></News>
                    </Col>
                </Row>
                <Row>
                    <Col>プログラミングメモ</Col>
                </Row>
            </Container>
        </React.StrictMode>
    );
};
export default Home;