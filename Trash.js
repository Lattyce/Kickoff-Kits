import React from 'react'
import './Trash.css'
import ImgAsset from '../public'
export default function Trash (props) {
	return (
		<div className={`Trash_Trash ${props.className}`}>
			<img className='Vector' src = {ImgAsset.Trash_Vector} />
		</div>
	)
}