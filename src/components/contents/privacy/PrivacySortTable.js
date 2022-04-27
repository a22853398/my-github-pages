import React from "react";
import { useTable, useSortBy } from "react-table";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import styled from "styled-components";

const StyledTable = styled.table`
    width: 95%;
    border: 1px solid black;
    margin: 0% 2% 2% 2%;
    & a, & a:link, & a:visited{
        text-decoration: none;
        color: darkgreen;
    }
    & tr{
        & th {
            border-bottom: 1px dotted yellowgreen;
            border-right: 1px dotted yellowgreen;
            font-size: 1.1rem;
            text-align: center;
            padding: 1% 0%;
        }
        & th:first-child{
            width: 8%;
        }
        & th:last-child{
            border-right: none;
            width: 15%;
        }
        & td{
            border-right: 1px dotted yellowgreen;
            border-bottom: 1px dotted yellowgreen;
            padding: 1% 0%;
        }
        & td:first-child{
            text-align: center;
        }
        & td:nth-child(2){
            padding-left: 1%;

        }
        & td:last-child{
            border-right: none;
            text-align: center;
        }
    }
    & tr:last-child{
        & td{
            border-bottom: none;
        }
    }
`;


function PrivacySortTable({columns, data}){
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
    <StyledTable {...getTableProps()}>
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
                                    return  <td {...cell.getCellProps()}>
                                                {
                                                    cell.render('Cell')
                                                }
                                            </td>
                                })
                            }
                        </tr>
                    );
                })
            }
            
        </tbody>
    </StyledTable>
    );
}
export default PrivacySortTable;