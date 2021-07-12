import React, { useState, useEffect} from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
  } from "../../data";
import Modal from '../modal/Modal';

const Portfolio = () => {
    const [selected, setSelected] = useState('web');
    const [data, setData] = useState([]);

    const openLink = (link) => {
        const url = link;
        window.open(url, '_blank');
    };
    const openDoubleLink = (link1, link2) => {
        const url1 = link1;
        const url2 = link2;
        window.open(url1, '_blank');
        window.open(url2, '_blank');
    };

    const list = [
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'design',
            title: 'Design'
        }
    ];

    useEffect(() => {
        switch(selected){
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            default:
                setData(webPortfolio);
        }
    }, [selected]);


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                { list.map(item => (
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                )) }
            </ul>
            <div className="container">

                {
                    data.length > 0 ?
                        (data.map(d => {
                            let project;
                            if(d.title === 'coming soon...') {
                                project = (
                                    <div 
                                        className="futureItem"
                                    >
                                        <h3>Coming soon...</h3>
                                    </div>
                                )
                            } else {
                                project = (
                                    <div 
                                        className="item"
                                        onClick={ 
                                            d.id == 'mobile' ? 
                                                () => openDoubleLink(d.link.back, d.link.front)
                                                : () => openLink(d.link)
                                        }
                                    >
                                            <img src={d.img} alt=""/>
                                        <h3>{d.title}</h3>
                                    </div>
                                )
                            }

                            return (
                                <>
                                {project}
                                </>
                            )
                        })) : (
                            <div className="coming">
                                <h3>Coming soon...</h3>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default Portfolio;
