import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = { val : 0 };
		// this.update = this.update.bind(this);
	}
	update() {
		this.setState({ val: this.state.val+1 });
	}
	componentWillMount() {
		this.setState({m: 2});
	}
	componentDidMount() {
		console.log('Component did mount', ReactDOM.findDOMNode(this));
		this.inc = setInterval(this.update.bind(this),500);
	}
	componentWillUnmount() {
		console.log('bye!!!!');
		clearInterval(this.inc);
	}
	render() {
		console.log('rendering');
		return (
			<button onClick={this.update.bind(this)}>{this.state.val * this.state.m}</button>
		);
	}
}


class Wrapper extends React.Component {
	constructor() {
		super();
	}
	mount() {
		ReactDOM.render(<App />, document.getElementById('a'));
	}
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'));
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>MOUNT</button>
				<button onClick={this.unmount.bind(this)}>UNMOUNT</button>
				<div id="a"></div>
			</div>
		);
	}
}

export default Wrapper
