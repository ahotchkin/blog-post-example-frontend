import React from 'react';
import { useTable } from 'react-table';

// import TableData from './TableData.js';

const Table = () => {

  const columns = React.useMemo(
   () => [
     {
       Header: "Product",
       accessor: "product", // accessor is the "key" in the data
     },
     {
       Header: "Price",
       accessor: "price",
     },
     {
       Header: "% of Total Cost",
       accessor: "percentOfTotal",
        accessor: row => {
          const totalCost = data.map(cell => cell.price).reduce((sum, current) => sum + current)
          return ((row.price / totalCost) * 100).toFixed(2)
        }
     },
   ],
   []
  )

  const data = React.useMemo(
   () => [
     {
       product: "TV",
       price: 200,
       percentOfTotal: ""
     },
     {
       product: "Computer",
       price: 800,
       percentOfTotal: ""

     },
     {
       product: "Nintendo",
       price: 300,
       percentOfTotal: ""
     },
   ],
   []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div>
      <h3>This is my table component</h3>
      <table {...getTableProps()} style={{ border: "solid 1px blue"}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ borderBottom: "solid 3px red", background: "aliceblue", color: "black", fontWeight: "bold"}}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={{ padding: "10px", border: "solid 1px gray", background: "papayawhip"}}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
