import React from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";

const StyledTable = styled.table`
    width: 95%;
    border: 1px solid black;
    margin: 0% 2% 0.5% 2%;
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

const ChangePageButtonDiv = styled.div`
    width: 95%;
    margin: 0% 0% 0.5% 0%;
    display: flex;
    justify-content: center;
    align-items: start;
    & button{
      margin: 0 3px;
      font-weight: bold;
      border: 1px solid darkgreen;
      color: white;
      background: darkgreen;
    }
    & button:hover{
      background: yellowgreen;
      color:black;
    }
    & button:disabled,& button[disabled]{
      background: rgba(65,100,65, 0.5);
      color: white;
    }
    & span{
      margin: 0 10px;
    }
`;



function PrivacyPageTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
        上だけでテーブルを生成できる。しかし、ページのチェンジができない。
        下の部分は改ページのボタン
      */}
      <ChangePageButtonDiv>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <span>
          <strong>
            {pageIndex + 1} / {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
      </ChangePageButtonDiv>
    </>
  )
}
export default PrivacyPageTable;

/*
<span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
*/ 

/**
 * ページのインフォメーションが見えるJSON、デバッグの時に使おう
 * <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
 */