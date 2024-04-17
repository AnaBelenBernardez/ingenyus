export function BotonSimple({ children, clase }) {

    return (
        <button className={clase}>
            {children}
        </button>
    )
}