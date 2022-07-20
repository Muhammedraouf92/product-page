import React from "react";
import img from "../images/image-product-1.jpg";
import img1 from "../images/image-product-1-thumbnail.jpg";
import img2 from "../images/image-product-2-thumbnail.jpg";
import img3 from "../images/image-product-3-thumbnail.jpg";
import img4 from "../images/image-product-4-thumbnail.jpg";
const ItemImgs = () => {
	return (
		<div className="item-img">
			<div className="main">
				<img src={img} alt="" />
			</div>
			<div className="small">
				<img src={img1} alt="" />
				<img src={img2} alt="" />
				<img src={img3} alt="" />
				<img src={img4} alt="" />
			</div>
		</div>
	);
};

export default ItemImgs;
