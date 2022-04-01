import React, { useMemo, useState } from "react";
import { sortData, categoryArray } from "./FilterAndSortTestData";

function FilterAndSortTestNew (){
    //必要なState変数
    /**データ */
    const [datas, setDatas] = useState(sortData);
    /**カテゴリの配列 */
    const [categories, setCategories] = useState(categoryArray);
    /**検索条件の状態 */
    const [filterQuery, setFilterQuery] = useState({});
    /**ソード条件の状態 */
    const [sort, setSott] = useState({});
    
    //useMemoで描画するものを記憶する
    const filterData = useMemo(
        () => {
            //下で返還する配列データの変数宣告
            //変数内容が上書きするので、letで宣告する必要がある
            let returnData = datas;
            
            //入力した文字を小文字にする
            const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();
            //絞り込み検索処理
            returnData = returnData.filter(
                row => {
                    //タイトルで絞り込み
                    if(filterQuery.title && String(row.title).toLowerCase().indexOf(filterTitle) === -1){
                        return false;
                    }
                    //カテゴリで絞り込み
                    if(filterQuery.category_id && row.category !== parseInt(filterQuery.category_id) ){
                        return false;
                    }
                    return row;
                }
            );

            // ソード
            if(sort.key){

            }
        }
    );

    return (
        <div>
            {sortData.map(
                (value, key) => {
                    return(
                        <div key={key}>
                            <h2>{value.title}</h2>
                            <h3>{value.id} {value.category}</h3>
                        </div>
                    );
                } 
            )}
        </div>
    );
}
export default FilterAndSortTestNew;