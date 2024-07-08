import React from 'react'
import './User.css'
import ImgAsset from '../public'
export default function User (props) {
	return (
		<div className={`User_User ${props.className}`}>
			<img className='Vector' src = {ImgAsset.User_Vector} />
		</div>
	)
}