import React from 'react'
import './SortDesc.css'
import ImgAsset from '../public'
export default function SortDesc (props) {
	return (
		<div className={`SortDesc_SortDesc ${props.className}`}>
			<div className='elements'>
				<img className='Vector6932' src = {ImgAsset.SortDesc_Vector6932} />
			</div>
		</div>
	)
}