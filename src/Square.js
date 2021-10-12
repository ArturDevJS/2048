function Square(props) {
    let style = 'position: absolute; ' +
        props.left + 'px; ' +
        props.top + 'px; ';

    console.log(style);
    return (
        <div
            className="square"
            style={{ position: "absolute", left: props.left + 'px', top: props.top + 'px' }}>
            {props.number}
        </div >
    );
}

export default Square;