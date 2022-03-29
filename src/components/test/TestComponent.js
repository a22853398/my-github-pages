import React from "react";

/**
 * 
 * 
 */
function TestComponent(props) {
    const detail = props.ary;//これでpropsのarrayをこの関数コンポーネントに渡して、下で描画する。
    //上の層がaryをここに投げるため、親コンポーネントにary属性を書く必要がある。
    return (
        <table>
            <thead>
                <tr><th>No.</th><th>Title</th><th>Visited</th></tr>
            </thead>
            <tbody>
                {
                    detail.map((value, key) => {
                        return(
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.lastVisit}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}
export default TestComponent;