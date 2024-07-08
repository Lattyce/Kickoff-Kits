import React from 'react'
import './SnapchatLogo.css'
import ImgAsset from '../public'
export default function SnapchatLogo (props) {
	return (
		<div className={`SnapchatLogo_SnapchatLogo ${props.className}`}>
			<img className='Vector' src = {ImgAsset.SnapchatLogo_Vector} />
		</div>
	)
}