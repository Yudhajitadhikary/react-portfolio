
import React from 'react'
// import styles from './homepage-tw-styles'
import Header from '../../components/Header/Header'
export default function Home() {
    return (
        <div>
            <Header/>
            <div className={'content-wrapper'}>
                <div className={'mb-10'}>
                    <h2 className={'text-7xl tracking-widest leading-snug font-normal font-normal'}>Hi, I am Yudha.</h2>
                </div>
                    <div className={'mb-20'}>
                    <h1 className={'mb-10 high high-text'}>Web Developer. Technical Blogger<br/></h1>
                    </div>
                    <div className={'mb-14 less'}> 
                        <h3 className={'text-7xl tracking-widest leading-snug font-normal font-normal'} >Meticulous web developer with over 5 years of front end experience </h3>
                    <h3 className={'text-7xl tracking-widest leading-snug font-normal font-normal'}>Module Lead at <a target="_blank" className={'anchor'} href="https://www.ltimindtree.com/" rel="noreferrer">LTIMindtree</a>.</h3>
                    <h3 className={'text-7xl tracking-widest leading-snug font-normal font-normal'}>Highly fascinated with Music.</h3>
                    </div>
                    <div className={'mb-10'}><h4 className={'text-7xl tracking-widest leading-snug font-normal font-normal'}><a target="_blank" className={'anchor'} href="/about">Learn more&nbsp;</a></h4></div></div></div>
    )
}
