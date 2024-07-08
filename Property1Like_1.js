import React from 'react'
import './Property1Like_1.css'
import Heart from "./Heart"
export default function Property1Like_1 (props) {
	return (
		<div className={`Property1Like_1_Property1Like ${props.className}`}>
			<Heart className='Heart'/>
		</div>
	)
}