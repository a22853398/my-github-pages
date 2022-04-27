import React, { Component, useMemo } from "react";
import { PrivacyDataSozai} from "../contents/privacy/privacyContent/privacySozai/PrivacyDataSozai";
import { useTable, useSortBy } from "react-table";
import { useState } from "react";


function PrivacyReferSortTable() {
    const SortedSozai = PrivacyDataSozai.sort((a, b) =>
        a.lastVisit > b.lastVisit ? 1 : -1
    )

    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Visited</th>
                </tr>
            </thead>
            <tbody>
                {
                    SortedSozai.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td><a>{value.title}</a></td>
                                <td>{value.lastVisit}</td>
                            </tr>
                        );
                    })



                }
            </tbody>
        </table>
    );
}

export default PrivacyReferSortTable;