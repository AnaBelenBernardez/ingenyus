import data from '../../data/data.json';
export default function MedicineMaps() {
    return (
        <section>
            <div>
                {data.medicine.map((item, index) => (
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
