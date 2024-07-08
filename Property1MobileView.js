import React from 'react'
import './Property1MobileView.css'
import ImgAsset from '../public'
import CaretDown from "./CaretDown"
import Trash from "./Trash"
import Heart from "./Heart"
export default function Property1MobileView (props) {
	return (
		<div className={`Property1MobileView_Property1MobileView ${props.className}`}>
			<img className='Frame21' src = {ImgAsset.Property1Default_2_Frame21} />
			<div className='Frame22'>
				<div className='Frame59'>
					<div className='Frame48'>
						<div className='NameandCategoryContainer'>
							<span className='GERMANY24AWAYJERSEY'>GERMANY 24 AWAY JERSEY</span>
							<span className='MensJersey'>Men's Jersey</span>
						</div>
						<div className='PriceContainer'>
							<span className='_'>₦</span>
							<span className='_500000'>500,000</span>
						</div>
					</div>
					<div className='Frame49'>
						<div className='SizeInfoContainer'>
							<span className='Size'>Size:</span>
							<span className='M'>M</span>
							<CaretDown className='CaretDown'/>
						</div>
						<div className='QuantitySelector'>
							<span className='Quantity'>Quantity:</span>
							<span className='_1'>1</span>
							<CaretDown className='CaretDown_1'/>
						</div>
					</div>
				</div>
				<div className='Frame51'>
					<Trash className='Trash'/>
					<Heart className='Heart'/>
				</div>
			</div>
		</div>
	)
}