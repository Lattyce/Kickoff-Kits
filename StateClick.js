import React from 'react'
import './StateClick.css'
import ButtonMain from "./ButtonMain"
export default function StateClick (props) {
	return (
		<div className={`StateClick_StateClick ${props.className}`}>
			<ButtonMain className='ButtonMain'/>
		</div>
	)
}