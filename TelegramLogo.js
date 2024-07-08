import React from 'react'
import './TelegramLogo.css'
import ImgAsset from '../public'
export default function TelegramLogo (props) {
	return (
		<div className={`TelegramLogo_TelegramLogo ${props.className}`}>
			<img className='Vector' src = {ImgAsset.TelegramLogo_Vector} />
		</div>
	)
}