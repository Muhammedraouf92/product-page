import Header from "./components/Header";
import ItemImgs from "./components/ItemImgs";
import ItemDetails from "./components/ItemDetails";
import { useState } from "react";

function App() {
	const [cart, setCart] = useState([]);
	console.log(cart);
	const addToCart = (product) => {
		const productExit = cart.find((item) => item.id === product.id);
		if (!productExit) {
			setCart([...cart, { ...product, amount: 1 }]);
		}
	};
	const increaseAmount = (product) => {
		const productExit = cart.find((item) => item.id === product.id);
		if (productExit) {
			setCart(
				cart.map((item) =>
					product.id === item.id
						? { ...productExit, amount: productExit.amount + 1 }
						: item
				)
			);
		}
	};
	const decreaseAmount = (product) => {
		const productExit = cart.find((item) => item.id === product.id);
		if (productExit.amount === 1) {
			setCart(cart.filter((item) => item.id !== product.id));
		} else {
			setCart(
				cart.map((item) =>
					item.id === product.id
						? { ...productExit, amount: productExit.amount - 1 }
						: item
				)
			);
		}
	};
	const removeItem = (product) => {
		setCart(cart.filter((item) => item.id !== product.id));
	};
	return (
		<div className="App">
			<Header
				cart={cart}
				decreaseAmount={decreaseAmount}
				increaseAmount={increaseAmount}
				removeItem={removeItem}
			/>
			<div className="content">
				<ItemImgs />
				<ItemDetails addToCart={addToCart} cart={cart} />
			</div>
		</div>
	);
}

export default App;
