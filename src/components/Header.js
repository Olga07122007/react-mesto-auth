import headerLogo from '../images/header/header-logo.svg';
import { Route, Link } from 'react-router-dom';

function Header({ email, signOut }) {

	return (
		<header className="header">
			<img className="header__logo" src={headerLogo} alt="Место" />
			<div className="header__links">
				<p className="header__link">{email||''}</p>
				
				<Route exact path="/">
					<button className="header__link header__button" onClick={signOut}>Выйти</button>
				</Route>
				<Route path="/sign-up">
					<Link className="header__link header__button" to="sign-in">Войти</Link>
				</Route>
				<Route path="/sign-in">
					<Link className="header__link header__button" to="sign-up">Регистрация</Link>
				</Route>
			</div>
		</header>
	);
}

export default Header;