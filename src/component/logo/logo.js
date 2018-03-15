import React from 'react'
import logoImg from './job.png'

export default class Logo extends React.Component{

	render(){
		return (
			<div style={styles.logoContainer}>
				<img src={logoImg} alt=""/>
			</div>
		)
	}
}

const styles = {
	logoContainer:{
		margin: '50px 0 20px',
		textAlign: 'center',
	}
}