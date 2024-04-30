import ScrollToTop from '../ScrollToTop';
import { useTranslation } from 'react-i18next';
import data from '../../assets/data/data.json';

export default function BiologyMaps() {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const biologyData = data[language]?.biology;

    if (!biologyData || biologyData.length === 0) {
        return (
            <main className='noise'>
                <h1>Ops, no hay datos disponibles</h1>
            </main>
        );
    }
    return (
        <>
            <ScrollToTop />
            <section className='section_text'>
                <div>
                    <p className='section_title'>Biología</p>
                </div>
                {biologyData.map((item, index) => (
                    <div className={`item-container ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                        <article className='left_side'>
                            <img src={item.src} alt={item.name} />
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
        </>
    );
}
