
import React from 'react'
// import styles from './blogs-tw-styles'
import Header from '../../components/Header/Header'
import constants from '../../components/constants'
export default function Blogs() {
    return (
<div>
    <Header/>
    <div className={'content-wrapper'}>
        <h1 className={'mb-10 high'}>Blogs</h1>
        <p className={'text-7xl tracking-widest leading-snug font-normal font-normal'}>I write technical blogs in <a target="_blank" className={'anchor'} href="https://yudhajitadhikary.medium.com/">Medium.com</a> . Through my blogs i try to bring technical knowledge that I have learned & worked on over the few years to my reader in my own simple way.The way I used to understand things with a simple demo with a complete line by line code walk through.</p>
        <p className={'text-7xl tracking-widest leading-snug font-normal font-normal'}>Below are few examples. If you find any topic interesting, take sometime to go through my blogs, and don't forget to share your thoughts! </p>
        </div>
        <div>
        <div className={'cardWrapper'}>
            {constants.blogs.map((item,index)=>(
            <div key={index} className='parentCardWrapper'>
                <div>
                    <div>
                        <a className={'anchorLink'} href={item.url} target="_blank" rel="noreferrer">
                            <div className={'flex flex-wrap nowrap'}>
                        <div className='cardTextBlogs'>
                        <h4 className={'leading-snug font-normal blogTitle'}>
                            {item.title}
                        </h4>
                        {/* <div className={styles.nameStyleLess}> 
                        {item.description}
                        </div> */}
                        </div>
                        <div className={'flex flex-wrap cardImage'}>
                            <div>
                        <img src={item.imageFront} className={'workImage'}/>
                        </div>
                        {/* <div>
                        <img src={item.imageBack} className={styles.workImageSecond}/>
                        </div> */}
                        </div>
                        </div>
                        
                        </a></div>
                        </div>
                        </div>))
}
                        </div>
        </div>
        </div>
    )
}