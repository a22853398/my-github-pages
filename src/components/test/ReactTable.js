import React from "react";
import { columns, data } from "./ReactTableData";
import { useTable, useSortBy } from "react-table";
import {VscChevronUp, VscChevronDown} from "react-icons/vsc"

function ReactTable(){
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns, 
            data,
        },
        useSortBy
    );

    return(
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                       <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                           {column.render('Header')}
                        <span>{column.isSorted ? 
                                (column.isSortedDesc ? <VscChevronDown/>: <VscChevronUp/>) 
                                    : <VscChevronUp/>}
                        </span>
                       </th> 
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row, i) => {
                    prepareRow(row);
                    return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                        </tr>
                    );
                })
            }
            
        </tbody>
    </table>
    );
}
export default ReactTable;