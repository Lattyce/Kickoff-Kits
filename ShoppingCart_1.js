import React from 'react'
import './ShoppingCart_1.css'
import ImgAsset from '../public'
export default function ShoppingCart_1 (props) {
	return (
		<div className={`ShoppingCart_1_ShoppingCart ${props.className}`}>
			<img className='Vector' src = {ImgAsset.ShoppingCart_1_Vector} />
		</div>
	)
}