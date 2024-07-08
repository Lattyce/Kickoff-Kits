import React from 'react'
import './ShoppingCart.css'
import ImgAsset from '../public'
export default function ShoppingCart (props) {
	return (
		<div className={`ShoppingCart_ShoppingCart ${props.className}`}>
			<img className='Vector' src = {ImgAsset.ShoppingCart_Vector} />
		</div>
	)
}