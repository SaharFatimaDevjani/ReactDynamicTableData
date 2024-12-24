import React from 'react'

const Header = (props) => {
  return (
    <div className='container header'>
      <ul className='main-nav'>
        <li className='logo'>Product Store</li>
        <li className='pages'>
            <ul className='pages-nav'>
                
                {props.pages.map((page,index)=>{
                    return(
                        <li key={index}>
                            {page}
                        </li>
                    )
                })}   
            </ul>
        </li>
      </ul>
    </div>
  )
}

export default Header
