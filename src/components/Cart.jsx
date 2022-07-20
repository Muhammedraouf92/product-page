import React from "react";
import img from "../images/icon-delete.svg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

const Cart = ({ cart, decreaseAmount, increaseAmount, removeItem }) => {
	return (
		<div className="cart">
			<div className="item-1">
				<h4>cart</h4>
			</div>
			{cart.length === 0 ? (
				<h2>there is nothing to show</h2>
			) : (
				<div className="item-2">
					{cart.map((item) => {
						const product = item.price * item.amount;
						return (
							<div className="cart-item">
								<div className="cart-item-1">
									<div className="image">
										<img src={item.image} alt="" />
									</div>
									<div className="text">
										<h4>{item.name}</h4>
										<p>
											{item.price} x {item.amount}{" "}
											<strong>${product}.00</strong>
										</p>
									</div>
									<div className="icon">
										<img src={img} alt="" onClick={() => removeItem(item)} />
									</div>
								</div>
								<div className="button-icons">
									<div>
										<img
											src={minus}
											alt=""
											className="items minus"
											onClick={() => {
												decreaseAmount(item);
											}}
										/>
									</div>
									<p className="items">{item.amount}</p>
									<div>
										<img
											src={plus}
											alt=""
											className="items plus"
											onClick={() => {
												increaseAmount(item);
											}}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Cart;
