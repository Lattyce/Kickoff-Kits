import React from 'react'
import './SideBarCOntainer.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import X from "./X"
import CaretDown from "./CaretDown"
import User from "./User"
import ShoppingCart from "./ShoppingCart"
export default function SideBarCOntainer (props) {
	return (
		<div className={`SideBarCOntainer_SideBarCOntainer ${props.className}`}>
			<div className='Frame68'>
				<div className='KickoffLogo'>
					<img className='KickoffKits' src = {ImgAsset.SideBarCOntainer_KickoffKits} />
				</div>
				<div className='Frame73'>
					<X className='X'/>
				</div>
			</div>
			<div className='Frame67'>
				<div className='Frame14'>
					<span className='Menu'>Menu</span>
					<CaretDown className='CaretDown'/>
				</div>
				<div className='Frame14_1'>
					<span className='TrackOrder'>Track Order</span>
				</div>
				<div className='Frame15'>
					<span className='Help'>Help</span>
				</div>
				<div className='Frame16'>
					<User className='User'/>
					<span className='Account'>Account</span>
				</div>
				<Link to='/undefined'>
					<div className='Frame17'>
						<ShoppingCart className='ShoppingCart'/>
						<span className='Cart'>Cart</span>
						<div className='CartContentIndicator'>
							<span className='_4'>4</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}