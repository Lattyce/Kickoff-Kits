import React from 'react'
import './User_1.css'
import ImgAsset from '../public'
export default function User_1 (props) {
	return (
		<div className={`User_1_User ${props.className}`}>
			<img className='Vector' src = {ImgAsset.User_1_Vector} />
		</div>
	)
}