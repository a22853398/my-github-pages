import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';//この行
import styled, { keyframes } from "styled-components";

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

const MemoDiv = styled.div`

`;

function Home() {
    return (
        <React.StrictMode>
            <TitleDiv>
                ホームはあえて雑なプログラミングメモを置くスタイル！
            </TitleDiv>
            <MemoDiv>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>React</Card.Title>
                                    <Card.Text>
                                    初心者のReactメモです。<br/>
                                    あまり期待しないでください。<br/>
                                    現場との大きく違いがあるかもしれません。
                                    </Card.Text>
                                    <Button variant="primary">Reactのメモを見る</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>Javascript</Col>
                    </Row>
                    <Row>
                        <Col>HTML</Col>
                        <Col>CSS</Col>
                        <Col>UED</Col>
                    </Row>
                </Container>    
            </MemoDiv>
        </React.StrictMode>
    );
};
export default Home;