// dump component (because it does not know anything and just draw the element)
const Counter = (props) => {
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={() => props.onClick()}>Click me</button>
        </div>
    )
}

export default Counter;