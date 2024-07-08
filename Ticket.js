import React from 'react'
import './Ticket.css'
import ImgAsset from '../public'
export default function Ticket (props) {
	return (
		<div className={`Ticket_Ticket ${props.className}`}>
			<img className='Vector' src = {ImgAsset.Ticket_Vector} />
		</div>
	)
}