import React from 'react'
import Header from './Components/Header'
import Table from './Components/Table'
import Footer from './Components/Footer'

const App = () => {
  const pages = ["Home", "Products", "About", "Contact"]
  const students = [
    { id: 101, name: "Wireless Mouse", category: "Electronics", price: "$25.99" },
    { id: 102, name: "Bluetooth Headphones", category: "Electronics", price: "$49.99" },
    { id: 103, name: "Disk Chair", category: "Furniture", price: "$89.99" },
    { id: 104, name: "Water Bottle", category: "Accessories", price: "$12.50" }
  ]
  return (
    <div className='body'>
      <Header pages={pages} />
      <Table studentList={students}/>
      <Footer />
    </div>
  )
}

export default App
