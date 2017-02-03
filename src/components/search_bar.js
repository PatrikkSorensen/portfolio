import React, { Component } from 'react'; 
import Select from 'react-select';

class SearchBar extends Component {
	render() {
		return(
			<Select 
			    {...this.props}
			    placeholder="Search by title or tags..."
			    value={this.props.input.value}
			    onChange={(value) => this.props.input.onChange(value)}
			    onBlur={() => this.props.input.onBlur(this.props.input.value)}
			    options={this.props.options}
		    />
		);
	}
}

export default SearchBar; 