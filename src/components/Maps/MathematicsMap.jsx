import ScrollToTop from '../ScrollToTop';
import { useTranslation } from 'react-i18next';

import data from '../../assets/data/data.json';
export default function MathematicsMap() {
    const { i18n } = useTranslation();
    const language = i18n.language;
    const { t } = useTranslation();

    const mathematicsData = data[language]?.mathematics;

    if (!mathematicsData || mathematicsData.length === 0) {
        return (
            <main className='landingHome'>
                <h1 className='section_title'>{t('translation.empty-data')}</h1>
            </main>
        );
    }
    return (
        <>
            <ScrollToTop />
            <section className='section_text'>
                <div>
                    <p className='section_title'>Matemáticas</p>
                </div>
                {mathematicsData.map((item, index) => (
                    <div
                        className={`item-container ${index % 2 === 0 ? 'even' : 'odd'}`}
                        key={index}
                    >
                        <article className='left_side'>
                            <img src={item.src} alt={item.name} />
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
