import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Menu.module.css'

const Menu = () => {
	const [menu, setMenu] = useState(false)

	const handleMenu = bool => {
		setMenu(!bool)
	}

	return (
		<div className={style.block}>
			<div className={menu ? style.navBar : style.menu__open}>
				<div onClick={() => handleMenu(menu)} className={style.burger}>
					<div className={menu ? style.l : style.line}></div>
					<div className={menu ? style.line__none : style.line}></div>
					<div className={menu ? style.li : style.line}></div>
				</div>
				<div className={style.menu}>
					<ul className={style.nav}>
						<Link to='/documents'>
							<li>Документы на КК</li>
						</Link>
						<Link to='/jobs'>
							<li>Должности</li>
						</Link>
						<Link to='/mortgaged'>
							<li>Залоговое Имущество</li>
						</Link>
						<Link to='/companies'>
							<li>Компании</li>
						</Link>
						<Link to='/contargets'>
							<li>Контрагенты</li>
						</Link>
						<Link to='/creditSpec'>
							<li>Кредит. спец.</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu
