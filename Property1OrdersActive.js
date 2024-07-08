import React from 'react'
import './Property1OrdersActive.css'
import nouncloset36947041 from "./nouncloset36947041"
import Heart_2 from "./Heart_2"
import OrderIconTrackFilled from "./OrderIconTrackFilled"
import User_1 from "./User_1"
export default function Property1OrdersActive (props) {
	return (
		<div className={`Property1OrdersActive_Property1OrdersActive ${props.className}`}>
			<div className='Frame39899'>
				<nouncloset36947041 className='nouncloset36947041'/>
				<span className='Store'>Store</span>
			</div>
			<div className='Frame39896'>
				<Heart_2 className='Heart'/>
				<span className='Liked'>Liked</span>
			</div>
			<div className='Frame39897'>
				<OrderIconTrackFilled className='OrderIconTrackFilled'/>
				<span className='Orders'>Orders</span>
			</div>
			<div className='Frame39898'>
				<User_1 className='User'/>
				<span className='Account'>Account</span>
			</div>
		</div>
	)
}