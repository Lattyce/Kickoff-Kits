import React from 'react'
import './Property1Default_2.css'
import ImgAsset from '../public'
import Star from "./Star"
export default function Property1Default_2 (props) {
	return (
		<div className={`Property1Default_2_Property1Default ${props.className}`}>
			<img className='Frame21' src = {ImgAsset.Property1Default_2_Frame21} />
			<div className='Frame22'>
				<div className='Frame24'>
					<div className='PriceContainer'>
						<span className='_'>₦</span>
						<span className='_120000'>120,000</span>
					</div>
					<div className='Frame25'>
						<span className='_45'>4.5</span>
						<Star className='Star'/>
					</div>
				</div>
				<div className='NameandCategoryContainer'>
					<span className='GERMANY24AWAYJERSEY'>GERMANY 24 AWAY JERSEY</span>
					<span className='MensJersey'>Men's Jersey</span>
				</div>
			</div>
		</div>
	)
}