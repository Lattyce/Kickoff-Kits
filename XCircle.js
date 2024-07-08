import React from 'react'
import './XCircle.css'
import ImgAsset from '../public'
export default function XCircle (props) {
	return (
		<div className={`XCircle_XCircle ${props.className}`}>
			<img className='Vector' src = {ImgAsset.XCircle_Vector} />
		</div>
	)
}