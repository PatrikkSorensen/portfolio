			<div className="search-container">
				<div className="row search-field">
					<div className="col-sm-6 col-sm-offset-3">
					    <div className="input-group">
					      <span className="input-group-btn">
					        <button className="btn btn-default" type="button">Go!</button>
					      </span>
					      <input type="text" className="form-control" placeholder="Search for..." />
					    </div>
				    </div>
				</div>
			    <div className="row">
			    	<div className="col-sm-offset-3 tag-container">
			    		{tags}
		    		</div>
			    </div>
			    <div className="col-sm-3">
			    	<button className="btn btn-default" onClick={this.props.clearFilters} type="button">clear filters</button>
			    </div>
			</div>