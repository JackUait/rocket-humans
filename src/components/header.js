import React from 'react'

export default function Header() {
	return (
		<header>
			<div className="header-inner">
				<div className="logo">Рокет.Хьюманс</div>
				<nav>
					<ul>
						<li>
							<a href="/">О нас</a>
						</li>
						<li>
							<a href="/">Проекты</a>
						</li>
						<li>
							<a href="/">Команда</a>
						</li>
						<li>
							<a href="/">Хьюманс</a>
						</li>
						<li className="btn">
							<a href="/">Дружить</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
