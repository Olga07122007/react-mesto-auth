import headerLogo from '../images/header/header-logo.svg';
import { useState, useEffect } from 'react';

function Header({ loggedIn, path, email, clickButtonHeader }) {
	const [headerButton, setHeaderButton] = useState('');

	useEffect(() => {
		switch(path) {
			case('/sign-up'):
				setHeaderButton('Войти');	
				break;
			case('/sign-in'):
				setHeaderButton('Регистрация');
		}	
	}, [path]);

	return (
		<header className="header">
			<img className="header__logo" src={headerLogo} alt="Место" />
			<div className="header__links">
				<p className="header__link">{loggedIn ? email||'' : ''}</p>
				<button className="header__link header__button" onClick={clickButtonHeader}>{loggedIn ? 'Выйти' : headerButton||''}</button>
			</div>
		</header>
		
	);
}

export default Header;