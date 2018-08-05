import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button 
				className={ this.props.light ? 'light-button' : 'dark-button' } onClick = {this.props.onClick} style={{width:100, height:40}}>
				Refresh
			</button>
		);
	}
}