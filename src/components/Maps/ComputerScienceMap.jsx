import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../../assets/data/data.json';

export default function ComputerScienceMap() {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const computerScienceData = data[language].computerScience;

    return (
        <main className='noise'>
            <section className='section_text'>
                <div>
                    <p className='section_title'>Computación</p>
                </div>
                {computerScienceData.map((item, index) => (
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
        </main>
    );
}
