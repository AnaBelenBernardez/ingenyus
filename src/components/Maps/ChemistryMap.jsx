import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import data from '../../assets/data/data.json';
export default function ChemistryMap() {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const chemistryData = data[language]?.chemistry;

    if (!chemistryData || chemistryData.length === 0) {
        return (
            <main className='noise'>
                <h1>Ops, no hay datos disponibles</h1>
            </main>
        );
    }
    return (
        <>
            <main className='noise'>
                <section className='section_text'>
                    {chemistryData.map((item, index) => (
                        <div
                            className={`item-container ${index % 2 === 0 ? 'even' : 'odd'}`}
                            key={index}
                        >
                            <div className='left_side'>
                                <img src={item.src} alt={item.name} />
                            </div>
                            <div className='right-side'>
                                <div className='text-title'>
                                    <h1>{item.name}</h1>
                                    <span>{item.date}</span>
                                </div>
                                <h2>{item.description}</h2>
                                <p>{item.bio}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}
