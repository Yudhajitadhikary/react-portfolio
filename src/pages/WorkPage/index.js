
import React from 'react'
import constants from '../../components/constants'
import Header from '../../components/Header/Header'

export default function Works() {
    return (
<div>
    <Header/>
    <div className={'content-wrapper'}>
    <h1 className={'mb-10 high'}> A Trip Down Memory Lane.....</h1>
        <h1 className={'leading-snug font-normal'}>From e-commerce platforms to tour and travels world.</h1>
        <p className={'leading-snug font-normal'}>Mostly a trip down memory lane. To be expanded one day.</p>
        </div>
        <div>
        <div className={'cardWrapper'}>
            {constants.works.map((item,index)=>(
            <div key={index} className='parentCardWrapper'>
                <div>
                    <div>
                        <a className={'anchorLink'} href={item.url} target="_blank" rel="noreferrer">
                            <div className={'flex flex-wrap'}>
                        <div className='cardText'>
                        <h4 className={'leading-snug font-normal'}>
                            {item.title}
                        </h4>
                        <div className={'less'}> 
                        {item.description}
                        </div>
                        <div className={'less'}>
                            {item.TechStack}
                            </div>
                        </div>
                        <div className={'flex flex-wrap cardImage'}>
                            <div>
                        <img src={item.imageFront} className={'workImage'}/>
                        </div>
                        <div>
                        <img src={item.imageBack} className={'workImage secondcard'}/>
                        </div>
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