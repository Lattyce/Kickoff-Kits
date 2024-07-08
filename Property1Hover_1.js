import React from 'react'
import './Property1Hover_1.css'
import ShoppingCart_1 from "./ShoppingCart_1"
export default function Property1Hover_1 (props) {
	return (
		<div className={`Property1Hover_1_Property1Hover ${props.className}`}>
			<ShoppingCart_1 className='ShoppingCart'/>
		</div>
	)
}