import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { getFilters, addFilter, removeFilter, clearFilters, getSearchOptions } from '../actions'; 
import { reduxForm, Field } from 'redux-form'; 

import SearchBar from './search_bar'; 

class SearchField extends Component {
	componentWillMount() {
		this.props.getFilters(); 
		this.props.getSearchOptions();
		console.log("mount, ", this.props); 
	} 
	renderTags(tag) {
		return (
			<div key ={tag} className="tag col-sm-1">
				<button className="btn btn-sm btn-default" onClick={() => this.props.removeFilter(tag)}> {tag} </button>
	    	</div>)
	}

	handleFormSubmit(tag) {
		let string = tag.tag.value; 
		console.log("Handling form submit", string); 
		this.props.addFilter(string); 
	}

	render() {
		//<Field placeholder="search for..." className="form-control" name="tag" component="input" type="text"/>
		const { handleSubmit } = this.props;
		let filters = this.props.activeFilters.map(this.renderTags.bind(this));
	    const options = [
	        {'label': 'Germany', 'value': 'Game Development'},
	        {'label': 'Russian Federation', 'value': 'RU'},
	        {'label': 'United States', 'value': 'US'}
	    ];
	    console.log("rendering, options: ", this.props.searchOptions); 
		return(
			<div className="search-container">
				<div className="row search-field">
					<div className="col-sm-7 col-sm-offset-2">
						<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
							<div className="input-group">
						        <span className="input-group-btn">
						        	<button className="btn btn-default" type="submit">Submit</button>
						        </span>
						        <Field name="tag" options={this.props.searchOptions} component={SearchBar}/>
						        <span className="input-group-btn">
						        	<button onClick={this.props.clearFilters} className="btn btn-default" type="button">Clear filters</button>
						        </span>
					        </div>
					    </form>

				    </div>
			    </div>
			    <div className="row">
			    	<div className="col-sm-offset-3 tag-container">
			    		{filters}
		    		</div>
			    </div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	 console.log("Search field: MapStateToProps", state.filters); 
	return { 
		activeFilters : state.filters.activeFilters,
		searchOptions : state.filters.searchOptions

	}; 
} 

const mapDispatchToProps = {
	getFilters, 
	clearFilters, 
	addFilter,
	removeFilter, 
	getSearchOptions
}

function validate(formProps) {
	console.log("Recieved formprops", formProps)
}

SearchField = reduxForm({
	form: 'addTag', 
	validate
})(SearchField)

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)