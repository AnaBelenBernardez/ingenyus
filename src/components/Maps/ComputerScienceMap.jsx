import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../../assets/data/data.json';
export default function ComputerScienceMap() {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const computerScienceData = data[language].computerScience;
    return (
        <section>
            <div>
                {computerScienceData.map((item, index) => (
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
        </section>
    );
}
