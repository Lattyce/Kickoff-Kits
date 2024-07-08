import React from 'react'
import './Property1Web_1.css'
import ImgAsset from '../public'
import List from "./List"
import MagnifyingGlass from "./MagnifyingGlass"
import User from "./User"
import ShoppingCart from "./ShoppingCart"
export default function Property1Web_1 (props) {
	return (
		<div className={`Property1Web_1_Property1Web ${props.className}`}>
			<div className='HeroNavBar'>
				<div className='KickoffLogo'>
					<img className='KickoffKits' src = {ImgAsset.Property1Web_1_KickoffKits} />
				</div>
				<div className='Frame14'>
					<List className='List'/>
					<span className='Menu'>Menu</span>
				</div>
				<div className='Frame13'>
					<span className='Searchforanything'>Search for anything</span>
					<MagnifyingGlass className='MagnifyingGlass'/>
				</div>
				<div className='Frame18'>
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
					<div className='Frame17'>
						<ShoppingCart className='ShoppingCart'/>
						<span className='Cart'>Cart</span>
						<div className='CartContentIndicator'>
							<span className='_4'>4</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}