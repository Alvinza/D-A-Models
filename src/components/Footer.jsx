import React from 'react'

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <div className='text-center p-6 mt-10' style={{backgroundColor: '#F1BC56'}}>
        <p className='text-gray-800'>`Copyright &copy; {currentYear} D&A Models | All Rights Reserved | Policy | Powered by Mainboard.`</p>
    </div>
  )
}

export default Footer