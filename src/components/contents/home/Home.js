import React from "react";
import { Button, Col, Container, Row, Card, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';//この行
import styled, { keyframes } from "styled-components";
import profileIcon from "../../../images/ojigi_animal_inu.png";
import { QuickAccessData } from "./QuickAccessData";

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
    border: 1px solid black;
`;
const QuickAccessDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: scretch;
    box-sizing: border-box;
`;
const StyledCard = styled(Card)`
    background: grey;
    width: 30%;
    display: inline-block;
`;


function Home() {
    return (
        <React.StrictMode>
            <Container>
                <Row>
                    <Col>
                        <InfoDiv>
                            <h2>最新情報</h2>
                        </InfoDiv>
                    </Col>
                    <Col>
                        <InfoDiv>
                            <h2>クイックアクセス</h2>
                            <QuickAccessDiv>
                                {
                                    QuickAccessData.map((value, key) => {
                                        return(
                                            <StyledCard key={key}>
                                                <Card.Img variant="top" src={value.icon} />
                                                <Card.Body>
                                                    <Button variant="primary">{value.title}</Button>
                                                </Card.Body>
                                            </StyledCard>
                                        );
                                    })
                                }
                            </QuickAccessDiv>
                        </InfoDiv>
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