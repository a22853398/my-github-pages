import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ProjectUnit from "./projectUnit/ProjectUnit";
import { ProjectDatas } from "./kuraDatas/ProjectDatas";

import KuraFilter from "./KuraFilter";


import koujiDog from "../../../images/ojigi_animal_inu.png";
import koujiCat from "../../../images/ojigi_animal_neko.png";
import koujiRabbit from "../../../images/ojigi_animal_usagi.png";

const KuraDiv = styled.div(
    {
        width: '80%',
        margin: 'auto'
    }
);
const FilterDiv = styled.div(
    {

    }
);
const ProjectUnitDiv = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        border: '1px solid red',
    }
);



function Kura() {
    /**タイトルがない時の表記 */
    const notitle = "まだ作品がありません";
    /**画像がない時の初期表記 */
    const koujiArray = [koujiDog, koujiCat, koujiRabbit];
    
    return (
        <KuraDiv>
            <FilterDiv>
                <KuraFilter />
            </FilterDiv>
            <ProjectUnitDiv>
                {
                    ProjectDatas.map((value, key)=>{
                        return(
                            <ProjectUnit 
                                key={key}    
                                title={(value.title === "") ? notitle : value.title}
                                date={value.date}
                                lang={value.lang}
                                phase={value.phase}
                                src={(value.src === "") ? koujiArray[key % koujiArray.length] : value.src}
                                url={(value.url === "") ? "" : value.url}
                            />
                        );
                    })
                }
            </ProjectUnitDiv>
        </KuraDiv>
    );
}
export default Kura;

/**
 * {
                    ProjectDatas.map((value, key) => {
                        return (
                            <ProjectUnit
                                key={key}
                                title={(value.title === "") ? notitle : value.title}
                                date={value.date}
                                language={value.language}
                                deploy={value.deploy}
                                src={(value.thumbnail === "") ? koujiArray[key % koujiArray.length] : value.thumbnail}

                            />
                        );
                    })
                }
 */

// /**タイトルがない時の表記 */
// const notitle = "コードが公開していない\nまたは作品がない";
// /**期間がない時の表記　*/
// const notime = "時期があやふやのプロジェクトです";
// /**使用言語がない時の表記 */
// const nolanguage = "使用言語まだ記入していない";
// /**デプロイがない時の表記 */
// const nodeploy = "公開していないプロジェクト";
// /**画像がない時の初期表記 */
// const koujiArray = [koujiDog, koujiCat, koujiRabbit];