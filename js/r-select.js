//1) npm install react-select
//1A)
//2) export Select Component
//3) pass in options
//4) @import css


var React = require('react');
var Select = require('react-select');




export var SelectComponent = React.createClass({

	_logChange: function(val) {
    console.log("Selected: " + val);
	},


	render: function(){
		return (
			<div className="select-react">
			<h3>React Select</h3>
			<hr/>
			<Select
			    name="form-field-name"
			    value={this.props.defaultVal}
			    options={this.props.options}
			    onChange={this._logChange()}
			/>
			</div>
		)
	}

})