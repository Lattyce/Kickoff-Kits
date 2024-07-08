import React from 'react'
import './Property1LikedActive.css'
import nouncloset36947041 from "./nouncloset36947041"
import Heart_1 from "./Heart_1"
import OrderIconTrackoutlined from "./OrderIconTrackoutlined"
import User_1 from "./User_1"
export default function Property1LikedActive (props) {
	return (
		<div className={`Property1LikedActive_Property1LikedActive ${props.className}`}>
			<div className='Frame39895'>
				<nouncloset36947041 className='nouncloset36947041'/>
				<span className='Store'>Store</span>
			</div>
			<div className='Frame39896'>
				<Heart_1 className='Heart'/>
				<span className='Liked'>Liked</span>
			</div>
			<div className='Frame39897'>
				<OrderIconTrackoutlined className='OrderIconTrackoutlined'/>
				<span className='Orders'>Orders</span>
			</div>
			<div className='Frame39898'>
				<User_1 className='User'/>
				<span className='Account'>Account</span>
			</div>
		</div>
	)
}