import React from "react";
import styled from "styled-components";


const ProjectUnitDiv = styled.div(
    {
        border: '1px solid black',
        width: '33%',
        height: 'auto',
        position: 'relative'
    }
);
const HeadDiv = styled.div(
    {
        textAlign: 'center',
        '& h3':{
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
        '&:hover':{
            opacity: '10%'
        },
        maxHeight: '100%',
        maxWidth:'100%',
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

function ProjectUnit(props){
    return(
        <ProjectUnitDiv>
            <HeadDiv>
                <h3>{props.title}</h3>
            </HeadDiv>
            <ThumbnailDiv>
                <InvisibleTextDiv>
                    <p>開発期間：<br/>
                        {props.date}</p>
                    <p>使用言語：<br/>
                        {props.language}</p>    
                </InvisibleTextDiv>
                <ImgDiv>
                    <StyledImg src={props.src}/>
                </ImgDiv>
            </ThumbnailDiv>
        </ProjectUnitDiv>
    );
}
export default ProjectUnit;