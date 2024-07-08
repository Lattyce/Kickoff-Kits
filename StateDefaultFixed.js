import React from 'react'
import './StateDefaultFixed.css'
import ButtonMain from "./ButtonMain"
export default function StateDefaultFixed (props) {
	return (
		<div className={`StateDefaultFixed_StateDefaultFixed ${props.className}`}>
			<ButtonMain className='ButtonMain'/>
		</div>
	)
}