import React from 'react'
import './Property1Hover_6.css'
import ImgAsset from '../public'
import Star from "./Star"
export default function Property1Hover_6 (props) {
	return (
		<div className={`Property1Hover_6_Property1Hover ${props.className}`}>
			<img className='Frame21' src = {ImgAsset.Property1Default_2_Frame21} />
			<div className='Frame22'>
				<div className='Frame25'>
					<div className='PriceContainer'>
						<span className='_'>₦</span>
						<span className='_120000'>120,000</span>
					</div>
					<div className='Frame25_1'>
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