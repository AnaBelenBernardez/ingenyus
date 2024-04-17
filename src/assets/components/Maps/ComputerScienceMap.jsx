import data from '../../data/data.json';
export default function ComputerScienceMap() {
    return (
        <section>
            <div>
                {data.ComputerScience.map((item, index) => (
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
