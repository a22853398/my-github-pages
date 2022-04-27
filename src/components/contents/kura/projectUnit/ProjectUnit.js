import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectUnitDiv = styled.div(
    {
        border: '1px solid black',
        width: '33%',
        height: 'auto',
        position: 'relative',
        '& a:visited, & a:link':{
            color: 'black'
        }
    }
);
const HeadDiv = styled.div(
    {
        textAlign: 'center',
        '& h3': {
            whiteSpace: 'pre-wrap',
        }
    }
);
const ThumbnailDiv = styled.div(
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'row',
        cursor: 'pointer',
        border: '1px solid cyan',
    }
);
const InvisibleTextDiv = styled.div(
    {
        background: '',
        position: 'absolute',
        width: '80%',
        height: '80%',
        padding: '1% 3%'
    }
);
const ImgDiv = styled.div(
    {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        zIndex: '2',
        '&:hover': {
            opacity: '10%'
        },
        maxHeight: '100%',
        maxWidth: '100%',
        textAlign: 'center'
    }
);
const StyledImg = styled.img(
    {
        width: 'auto',
        height: 'auto',
        maxWidth: '70%',
        maxHeight: '250px',
    }
);

const StyledTitleP = styled.span(
    {
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
);
const StyledTag = styled.span(
    {
        border: '0.5px solid, silver',
        margin: '0% 1%',
        backgroundColor: '#A7D793',
        padding: '0.5% 2%',
        borderRadius: '5px'
    }
);



function ProjectUnit(props) {
    return (
        <ProjectUnitDiv>
            <HeadDiv>
                <h3>{props.title}</h3>
            </HeadDiv>
            
                <ThumbnailDiv>
                    <InvisibleTextDiv>
                        <p><StyledTitleP>開発期間：</StyledTitleP><br />
                            {props.date}
                        </p>
                        <p><StyledTitleP>使用言語：</StyledTitleP><br />
                            {
                                props.lang.map((lang, key) => {
                                    return (<StyledTag key={key}>{lang}</StyledTag>);
                                })
                            }
                        </p>
                        <p><StyledTitleP>フェーズ：</StyledTitleP><br />
                            {
                                props.phase.map((phase, key) => {
                                    return (<StyledTag key={key}>{phase}</StyledTag>);
                                })
                            }
                        </p>
                    </InvisibleTextDiv>
                    <ImgDiv>
                        <StyledImg src={props.src} />
                    </ImgDiv>
                </ThumbnailDiv>
            
        </ProjectUnitDiv>
    );
}
export default ProjectUnit;