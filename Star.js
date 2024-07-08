import React from 'react'
import './Star.css'
import ImgAsset from '../public'
export default function Star (props) {
	return (
		<div className={`Star_Star ${props.className}`}>
			<img className='Vector' src = {ImgAsset.Star_Vector} />
		</div>
	)
}