import { useSelector, useDispatch } from 'react-redux';
import { selectBoard, moveDown } from './boardSlice';
import Square from './Square';

function Bord() {
    const board = useSelector(selectBoard);
    const dispatch = useDispatch();

    window.addEventListener('keydown', eventKeyDown);


    const mixPosXY = 0;
    const maxPosXY = 4;

    function eventKeyDown(event) {
        if (event.key === 'ArrowUp') {

        }
        else if (event.key === 'ArrowDown') {
            // board
            // { left: '100', top: '300', posX: 0, posY: 1, number: 2 },
            dispatch(moveDown());

        }
        else if (event.key === 'ArrowRight') {

        }
        else if (event.key === 'ArrowLeft') {

        }
    }

    return (
        <div>
            {board.map((item) => <Square left={item.left} top={item.top} number={item.number} />)}
        </div>
    );
}

export default Bord;