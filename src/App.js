import React from 'react';
class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
		this.contentRender = this.contentRender.bind(this);
	}
	contentRender(e) {
		this.setState({ text: `This is content for menu ${e.target.id}` });
	}

	render() {
		return (
			<div class='wrapper'>
				<div class='menu'>
					<h2 id='1' onClick={this.contentRender}>
						Menu 1
					</h2>
					<h2 id='2' onClick={this.contentRender}>
						Menu 2
					</h2>
					<h2 id='3' onClick={this.contentRender}>
						Menu 3
					</h2>
				</div>
				<div class='text'>{this.state.text}</div>
			</div>
		);
	}
}

export default Menu;
