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
            <div>
                {biologyData.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={item.src} alt={item.name} />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <span>{item.date}</span>
                            <h2>{item.description}</h2>
                            <p>{item.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
