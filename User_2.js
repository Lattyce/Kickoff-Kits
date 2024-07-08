import React from 'react'
import './User_2.css'
import ImgAsset from '../public'
export default function User_2 (props) {
	return (
		<div className={`User_2_User ${props.className}`}>
			<img className='Vector' src = {ImgAsset.User_2_Vector} />
		</div>
	)
}