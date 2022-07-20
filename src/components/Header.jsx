import React from "react";
import logo from "../images/logo.svg";
import svg from "../images/icon-cart.svg";
import img from "../images/image-avatar.png";
import Cart from "./Cart";
import { useState } from "react";
const Header = ({ cart, decreaseAmount, increaseAmount, removeItem }) => {
	const [showCart, setShowCart] = useState(false);
	return (
		<div className="header">
			<div className="logo">
				<a href="#">
					<img src={logo} alt="" />
				</a>
			</div>
			<div className="navbar">
				<ul>
					<li>
						<a href="#">collections</a>
					</li>
					<li>
						<a href="#">men</a>
					</li>
					<li>
						<a href="#">women</a>
					</li>
					<li>
						<a href="#">about</a>
					</li>
					<li>
						<a href="#">contact</a>
					</li>
				</ul>
			</div>
			<div className="header-icons">
				<div className="icon-1">
					<img src={svg} alt="" onClick={() => setShowCart(!showCart)} />
					<span>{cart.length}</span>
					{showCart && (
						<Cart
							cart={cart}
							decreaseAmount={decreaseAmount}
							increaseAmount={increaseAmount}
							removeItem={removeItem}
						/>
					)}
				</div>
				<div className="icon-2">
					<img src={img} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;
