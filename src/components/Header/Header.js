import React,{Component} from 'react'
import DesktopNavigation from './DesktopNavigation'
// import dynamic from 'next/dynamic'
import style from './header-tw.styles'
import MobileNavigation from './MobileNavigation'
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            screenWidth:375,
            open:false
        }
    }
    componentDidMount=()=>{
        this.handleWindowSizeChange()
        window.addEventListener('resize',this.handleWindowSizeChange)
        window.onload=()=>{
            this.setState({screenWidth:window.innerWidth})
        }
    }
    handleWindowSizeChange=()=>{
        this.setState({screenWidth:window.innerWidth})
    }
    handleHamburgerClick=()=>{
        this.setState({open:true})
        
    }
    handleHamburgerClose=()=>{
        this.setState({open:false})
        
    }
    render(){
        const {screenWidth,open}=this.state
        const isMobile=screenWidth&&screenWidth <= 767
        return(
            <React.Fragment>
                <div className={style.content}>
                    {isMobile && isMobile !==null?!open?<button className={style.humburger} onClick={this.handleHamburgerClick}>
                    <img src="https://img.icons8.com/ios/50/ffffff/menu--v1.png"/>
                        </button>:'':''}
                    {
                        !isMobile && isMobile !==null && (<DesktopNavigation/>)
                    }
                    {
                        screenWidth && isMobile && isMobile !==null &&(
                            
                            <div>
                            <MobileNavigation open={open} handleHamburgerClose={this.handleHamburgerClose}/></div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }

} 
export default Header