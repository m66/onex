import './header.scss';

function Header(props) {

    return (
        <div className='header-2'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default Header;