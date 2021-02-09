// dump component (because it does not know anything and just draw the element)

const Card = (props) => {
    return (
        <div className="card">
            <p>Name: {props.name}</p>
            <p>Age: {props.birth_year}</p>
            <button id={props.id} onClick={(e) => props.onClick(e) }>Set NAME</button>
        </div>
    )
}

export default Card;