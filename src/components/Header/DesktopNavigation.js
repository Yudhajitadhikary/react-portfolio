import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-tw.styles'
const DesktopNavigation=()=>{
    return(
        <div data-collapse="small" data-animation="default" data-duration="400" id="navbar-desktop" className="navbar-desktop">
            <nav role="navigation" className="nav-menu-2">
                <a className={styles.anchorLink} href="/react-portfolio"> Home</a>
                <a className={styles.anchorLink} href="/react-portfolio/about">About</a>
                {/* <a className={styles.anchorLink} href="/works" id="navbar-building">Work</a> */}
                <a className={styles.anchorLink} href="/react-portfolio/blogs">Blogs</a>
                {/* <a className={styles.anchorLink} href="/contact" aria-current="page">Contact</a> */}
                </nav>
        </div>
    )
}
DesktopNavigation.propTypes={
    show:PropTypes.object.isRequired
}
export default DesktopNavigation