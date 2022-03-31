import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ProjectUnit from "../../reuseAtoms/projectUnit/ProjectUnit";
import { ProjectDatas } from "./kuraDatas/ProjectDatas";

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
    const notitle = "コードが公開していない\nまたは作品がない";
    /**期間がない時の表記　*/

    /**使用言語がない時の表記 */

    /**デプロイがない時の表記 */

    /**画像がない時の初期表記 */
    const koujiArray = [koujiDog, koujiCat, koujiRabbit];
    return (
        <KuraDiv>
            <FilterDiv>
                
            </FilterDiv>
            <ProjectUnitDiv>
                {
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
            </ProjectUnitDiv>
        </KuraDiv>
    );
}
export default Kura;