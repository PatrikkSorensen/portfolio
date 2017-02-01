import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { getFilters, addFilter, removeFilter, clearFilters, getSearchOptions } from '../actions'; 
import { reduxForm, Field } from 'redux-form'; 

import SearchBar from './search_bar'; 

class SearchField extends Component {
	componentWillMount() {
		this.props.getFilters(); 
		this.props.getSearchOptions();
	} 
	renderTags(tag) {
		return (
			<div key ={tag} className="tag col-sm-1">
				<button className="btn btn-sm btn-default" onClick={() => this.props.removeFilter(tag)}> {tag} </button>
	    	</div>)
	}
	render() {
	    const { addFilter } = this.props;
		let filters = this.props.activeFilters.map(this.renderTags.bind(this));

		return(
			<div className="search-container">
				<div className="row search-field">
					<div className="col-sm-6 col-sm-offset-3">
			        	<span className="col-sm-12">
			        		<Field onChange={addFilter}  name="tag" options={this.props.searchOptions} component={SearchBar}/>
			        	</span>
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
	//console.log("Search field: MapStateToProps", state.filters); 
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
	//console.log("Recieved formprops", formProps)
}

SearchField = reduxForm({
	form: 'addTag', 
	validate
})(SearchField)

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)