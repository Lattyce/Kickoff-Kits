import React from 'react'
import './Property1Hover_2.css'
import Heart from "./Heart"
export default function Property1Hover_2 (props) {
	return (
		<div className={`Property1Hover_2_Property1Hover ${props.className}`}>
			<Heart className='Heart'/>
		</div>
	)
}