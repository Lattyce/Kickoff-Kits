import React from 'react'
import './XLogo.css'
import ImgAsset from '../public'
export default function XLogo (props) {
	return (
		<div className={`XLogo_XLogo ${props.className}`}>
			<img className='Vector' src = {ImgAsset.XLogo_Vector} />
		</div>
	)
}