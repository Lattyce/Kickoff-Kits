import React from 'react'
import './StateHover.css'
import ButtonMain from "./ButtonMain"
export default function StateHover (props) {
	return (
		<div className={`StateHover_StateHover ${props.className}`}>
			<ButtonMain className='ButtonMain'/>
		</div>
	)
}