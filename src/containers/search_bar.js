import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };

		// Bind this to the SearchBar object, not the context for 'this' at the point of calling.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
		console.log(event.target.value);
	}

	onFormSubmit(event) {
		event.preventDefault();

		// Grab weather data!
		this.props.fetchWeather(this.state.term);
		this.setState( { term: '' });
	}

	render() {
		return (

		<form onSubmit={this.onFormSubmit} className="input-group">
		  <input 
		  	placeholder="Get a five-day forecast for cities"
		  	className="form-control"
		    value={this.state.term}
		    onChange={this.onInputChange} />
		  <span className="input-group-btn">
		    <button type="submit" className="btn btn-secondary">Search</button>
		  </span>
		</form>

		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}
// Null says no state thanks.
export default connect(null, mapDispatchToProps)(SearchBar);