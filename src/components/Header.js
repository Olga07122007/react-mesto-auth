import headerLogo from '../images/header/header-logo.svg';
import { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function Header({ loggedIn, email, signOut }) {
	const [headerButton, setHeaderButton] = useState('');
	
	return (
		<header className="header">
			<img className="header__logo" src={headerLogo} alt="Место" />
			<div className="header__links">
				<p className="header__link">{loggedIn ? email||'' : ''}</p>
				{loggedIn ? 
					(
						<Link className="header__link header__button" to="sign-in" onClick={signOut}>Выйти</Link>
					):(
						<Switch>
							<Route path="/sign-up">
								<Link className="header__link header__button" to="sign-in">Войти</Link>
							</Route>
							<Route path="/sign-in">
								<Link className="header__link header__button" to="sign-up">Регистрация</Link>
							</Route>
						</Switch>
					)}
			</div>
		</header>
	);
}

export default Header;