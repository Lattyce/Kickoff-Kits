import React from 'react'
import './Property1MobileView_1.css'
import ImgAsset from '../public'
import MinusCircle from "./MinusCircle"
import PlusCircle from "./PlusCircle"
import Trash from "./Trash"
export default function Property1MobileView_1 (props) {
	return (
		<div className={`Property1MobileView_1_Property1MobileView ${props.className}`}>
			<img className='Frame21' src = {ImgAsset.Property1Default_2_Frame21} />
			<div className='Frame22'>
				<div className='Frame59'>
					<span className='GERMANY24AWAYJERSEY'>GERMANY 24 AWAY JERSEY</span>
					<div className='PriceContainer'>
						<span className='_'>₦</span>
						<span className='_500000'>500,000</span>
					</div>
					<div className='Frame49'>
						<div className='SizeInfoContainer'>
							<span className='M'>M</span>
						</div>
						<div className='QuantitySelector'>
							<MinusCircle className='MinusCircle'/>
							<div className='Frame39901'>
								<span className='_1'>1</span>
							</div>
							<PlusCircle className='PlusCircle'/>
						</div>
					</div>
				</div>
				<div className='Frame39900'>
					<Trash className='Trash'/>
					<span className='Remove'>Remove</span>
				</div>
			</div>
		</div>
	)
}