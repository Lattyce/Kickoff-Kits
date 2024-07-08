import React from 'react'
import './Property1StoreActive.css'
import nouncloset36900131 from "./nouncloset36900131"
import Heart_2 from "./Heart_2"
import OrderIconTrackoutlined from "./OrderIconTrackoutlined"
import User_1 from "./User_1"
export default function Property1StoreActive (props) {
	return (
		<div className={`Property1StoreActive_Property1StoreActive ${props.className}`}>
			<div className='Frame39895'>
				<nouncloset36900131 className='nouncloset36900132'/>
				<span className='Store'>Store</span>
			</div>
			<div className='Frame39896'>
				<Heart_2 className='Heart'/>
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