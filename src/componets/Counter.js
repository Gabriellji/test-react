const Counter = (props) => {

    return (
        <div>
            <p>{props.count}</p>
            <button onClick={() => props.onClick()}>Click me</button>
        </div>
    )
}

export default Counter;