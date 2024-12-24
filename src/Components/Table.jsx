import React from 'react'

const Table = ({ studentList }) => {
  return (
    <div className='table'>
      <h1 className='container'>Product List</h1>
      <div className='main container'>
        <table className='main-table'>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              studentList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                  </tr>
                )

              })

            }

          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Table
