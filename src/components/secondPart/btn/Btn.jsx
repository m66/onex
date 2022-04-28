import './btn.scss';

function Btn(props) {
    return (
        <button>{props.children}</button>
    );
}

export default Btn;