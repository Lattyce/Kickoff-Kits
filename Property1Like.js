import React from 'react'
import './Property1Like.css'
import Heart from "./Heart"
export default function Property1Like (props) {
	return (
		<div className={`Property1Like_Property1Like ${props.className}`}>
			<Heart className='Heart'/>
		</div>
	)
}