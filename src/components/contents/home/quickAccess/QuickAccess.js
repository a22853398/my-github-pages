import React from "react";
import { Button, Col, Container, Row, Card, Carousel } from "react-bootstrap";
import styled from "styled-components";
import { QuickAccessData } from "./QuickAccessData";

const QuickAccessDiv = styled.div`
    text-align: center;
    padding: 20px 10px 10px 10px;
    box-sizing: border-box;
    & h2 {
        font-weight: bold;
    }
`;
const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: scretch;
    box-sizing: border-box;
    flex-wrap: wrap; /*改行*/
    border: 1px dotted silver;
`;
const StyledCard = styled(Card)`
    background: rgba(000, 255, 0, 0.5);
    width: 40%;
    margin: 10px 25px 10px 25px;
    display: inline-block;
`;

function QuickAccess(){
    return(
        <QuickAccessDiv>
            <h2>クイックアクセス</h2>
            <ContentDiv>
                {
                    QuickAccessData.map(
                        (value, key) => {
                            return(
                                <StyledCard key={key}>
                                    <Card.Body>
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Button variant="primary">{value.title}</Button>
                                    </Card.Body>
                                </StyledCard>
                            )
                        } 
                    )
                }
            </ContentDiv>
        </QuickAccessDiv>
    );
}
export default QuickAccess;