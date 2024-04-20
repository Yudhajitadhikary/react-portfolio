import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
// import dynamic from 'next/dynamic'
// const Footer=dynamics(()=>import('../Footer/Footer'))

const Layout=({children})=>{
    return(
        <React.Fragment>
            <Header/>
            <main>
                {children}
            </main>
            {/* <Footer/> */}
        </React.Fragment>
    )
}
Layout.propTypes={
    children:PropTypes.any.isRequired
}
export default Layout
