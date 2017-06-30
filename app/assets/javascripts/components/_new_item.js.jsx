var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;

    console.log('The name value is ' + name + ' the description is ' + description);
  },

  render() { 
    return ( 
			<div>
        <input ref="name" placeholder="Item name" />
        <input ref="description" placeholder="Enter Description" />
        <button onClick={this.handleClick}>Submit</button>
			</div>
		) 
	} 
});
