export function BotonSimple({ children, clase, onClick }) {

    return (
        <button className={clase} onClick={onClick}>
            {children}
        </button>
    )
}