import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import '../../css/layout/_Maps.css';

import data from '../../../public/data.json';
export default function MathematicsMap() {
    const { t, i18n } = useTranslation();
    const language = i18n.language;

    const mathematicsData = data[language]?.mathematics;
    const [currentItem, setCurrentItem] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const itemRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);
            setHasScrolled(scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!itemRefs.current.length || !hasScrolled) return;

        const containerTop = itemRefs.current[0].offsetTop;
        const windowHeight = window.innerHeight;
        const windowCenter = scrollPosition + windowHeight / 3.5;

        let closestItemIndex = 0;
        let closestDistance = Math.abs(
            windowCenter - (containerTop + itemRefs.current[0].offsetTop)
        );

        itemRefs.current.forEach((item, index) => {
            const itemTop = containerTop + item.offsetTop;
            const distance = Math.abs(windowCenter - itemTop);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestItemIndex = index;
            }
        });

        setCurrentItem(closestItemIndex);
    }, [scrollPosition, hasScrolled]);

    if (!mathematicsData || mathematicsData.length === 0) {
        return (
            <main className='landingHome'>
                <h1 className='section_empty'>{t('translation.empty-data')}</h1>
            </main>
        );
    }

    return (
        <section className='section_text'>
            <div>
                <p className='section_title'>{t('translation.mathematics')}</p>
            </div>
            {mathematicsData.map((item, index) => (
                <div
                    className={`item-container ${index % 2 === 0 ? 'even' : 'odd'}`}
                    key={index}
                    ref={(element) => (itemRefs.current[index] = element)}
                >
                    <article className='left_side'>
                        <div className='image-container'>
                            <div className='image-wrapper'>
                                <img
                                    className={`bw-image ${hasScrolled && currentItem === index ? 'hidden' : ''}`}
                                    src={item.src}
                                    alt={item.name}
                                />
                                <img
                                    className={`filter-image ${hasScrolled && currentItem === index ? 'visible' : ''}`}
                                    src={item.srcScroll}
                                    alt={item.name}
                                />
                            </div>
                        </div>
                    </article>
                    <article className='right-side'>
                        <div className='text-title'>
                            <h1 className='text-name'>{item.name}</h1>
                            <span className='text-date'>{item.date}</span>
                        </div>
                        <h2 className='text-description'>{item.description}</h2>
                        <p className='text-box'>{item.bio}</p>
                    </article>
                </div>
            ))}
        </section>
    );
}
