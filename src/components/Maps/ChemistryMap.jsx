import { useTranslation } from 'react-i18next';
import ScrollToTop from '../ScrollToTop';
import React, { useState, useEffect, useRef } from 'react';

import data from '../../assets/data/data.json';
export default function ChemistryMap() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;

    const chemistryData = data[language]?.chemistry;
    const [currentScientist, setCurrentScientist] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scientistRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || !scientistRefs.current.length) return;

        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const windowCenter = scrollPosition + windowHeight / 3.5;

        let closestScientistIndex = 0;
        let closestDistance = Math.abs(
            windowCenter - (containerTop + scientistRefs.current[0].offsetTop)
        );

        for (let i = 1; i < scientistRefs.current.length; i++) {
            const scientistTop =
                containerTop + scientistRefs.current[i].offsetTop;
            const distance = Math.abs(windowCenter - scientistTop);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestScientistIndex = i;
            }
        }

        setCurrentScientist(closestScientistIndex);
    }, [scrollPosition]);

    if (!chemistryData || chemistryData.length === 0) {
        return (
            <main className='landingHome'>
                <h1 className='section_empty'>{t('translation.empty-data')}</h1>
            </main>
        );
    }

    return (
        <>
            <ScrollToTop />
            <section className='section_text' ref={containerRef}>
                <div>
                    <p className='section_title'>
                        {t('translation.chemistry')}
                    </p>
                </div>
                {chemistryData.map((item, index) => (
                    <div
                        className={`item-container ${index % 2 === 0 ? 'even' : 'odd'}`}
                        key={index}
                        ref={(element) =>
                            (scientistRefs.current[index] = element)
                        }
                    >
                        <article className='left_side'>
                            <img
                                src={
                                    currentScientist === index
                                        ? item.srcScroll
                                        : item.src
                                }
                                alt={item.name}
                            />
                        </article>
                        <article className='right-side'>
                            <div className='text-title'>
                                <h1 className='text-name'>{item.name}</h1>
                                <span className='text-date'>{item.date}</span>
                            </div>
                            <h2 className='text-description'>
                                {item.description}
                            </h2>
                            <p className='text-box'>{item.bio}</p>
                        </article>
                    </div>
                ))}
            </section>
        </>
    );
}
