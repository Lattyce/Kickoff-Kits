import React from 'react'
import './Property1Mobile.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import MagnifyingGlass from "./MagnifyingGlass"
import List from "./List"
export default function Property1Mobile (props) {
	return (
		<div className={`Property1Mobile_Property1Mobile ${props.className}`}>
			<div className='HeroNavBar'>
				<div className='KickoffLogo'>
					<img className='KickoffKits' src = {ImgAsset.Property1Mobile_KickoffKits} />
				</div>
				<div className='Frame13'>
					<span className='Searchforanything'>Search for anything</span>
					<MagnifyingGlass className='MagnifyingGlass'/>
				</div>
				<div className='Frame65'>
					<div className='Frame66'>
						<MagnifyingGlass className='MagnifyingGlass_1'/>
					</div>
					<Link to='/sidebarcontainer'>
						<div className='Frame17'>
							<List className='List'/>
							<div className='CartContentIndicator'>
								<span className='_4'>4</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}