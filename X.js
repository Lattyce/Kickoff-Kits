import React from 'react'
import './X.css'
import ImgAsset from '../public'
export default function X (props) {
	return (
		<div className={`X_X ${props.className}`}>
			<img className='Vector' src = {ImgAsset.X_Vector} />
		</div>
	)
}