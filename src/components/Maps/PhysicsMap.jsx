import ScrollToTop from '../ScrollToTop';
import { useTranslation } from 'react-i18next';
import data from '../../../public/data.json';
import { useState, useEffect, useRef } from 'react';
export default function PhysicsMaps() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;

    const physicsData = data[language]?.physics;
    const [currentItem, setCurrentItem] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const itemRefs = useRef([]);

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
        if (!itemRefs.current.length) return;

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
    }, [scrollPosition]);

    if (!physicsData || physicsData.length === 0) {
        return (
            <main className='landingHome'>
                <h1 className='section_empty'>{t('translation.empty-data')}</h1>
            </main>
        );
    }

    return (
        <>
            <ScrollToTop />
            <section className='section_text'>
                <div>
                    <p className='section_title'>{t('translation.physics')}</p>
                </div>
                {physicsData.map((item, index) => (
                    <div
                        className={`item-container ${index % 2 === 0 ? 'even' : 'odd'}`}
                        key={index}
                        ref={(element) => (itemRefs.current[index] = element)}
                    >
                        <article className='left_side'>
                            <img
                                src={
                                    currentItem === index
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
