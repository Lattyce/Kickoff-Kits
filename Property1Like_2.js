import React from 'react'
import './Property1Like_2.css'
import Heart from "./Heart"
export default function Property1Like_2 (props) {
	return (
		<div className={`Property1Like_2_Property1Like ${props.className}`}>
			<Heart className='Heart'/>
		</div>
	)
}