import './card.scss';

function Card(props) {
    const style = {
        width: '16%',
        height: '125px',
        padding: '15px',
        border: '0.1px solid grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
    return (
        <div  style={style}>
            <img className='ads-img' src={`https://onex.am/images/shops/svg/${props.url}`} />
        </div>
    );
}

export default Card;