import React from 'react'
import './Property1Like_3.css'
import Heart_1 from "./Heart_1"
export default function Property1Like_3 (props) {
	return (
		<div className={`Property1Like_3_Property1Like ${props.className}`}>
			<Heart_1 className='Heart'/>
		</div>
	)
}