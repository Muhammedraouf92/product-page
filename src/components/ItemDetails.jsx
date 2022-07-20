import React from "react";

import { Data } from "./Data";
const ItemDetails = ({ addToCart }) => {
	return (
		<div className="item-detail">
			{Data.map((item) => {
				return (
					<>
						<h4>sneaker company</h4>
						<h1>{item.name}</h1>
						<p>
							these low-profile sneakers are your perfect casual wear
							companion.featuring a durable rubber outer sole, they'll withstand
							everything the weather can offer
						</p>
						<div className="prices">
							<div className="price">
								<h2>${item.price}.00</h2>
								<p>50%</p>
							</div>
							<div className="discount">
								<s>
									<p>${item.discount}.00</p>
								</s>
							</div>
						</div>
						<div className="buttons">
							<button
								className="btn"
								onClick={() => {
									addToCart(item);
								}}
							>
								add to cart
							</button>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default ItemDetails;
