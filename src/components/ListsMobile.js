import React, { Component } from 'react';
import './Lists.css';

class ListsMobile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newListName: '',
    }
  }
  
  //listens to keypresses inside the form and records that in this.state.NewListName
  handleChange = (event) => {
    this.setState({
      newListName: event.target.value
    })
  }

  // Submit form to create new list name and clear input upon submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.submitList();
    this.myFormRef.reset();
  }
  
  submitList = () => { 
    this.props.addList(this.state.newListName);
   }


  render() {
    return(
      <div className='lists listsMobile'>
        <h2>Reading Lists</h2>
        <div className="addList">
          <form action="submit" onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
            <input type="text" onChange={this.handleChange} placeholder="Create new list" required/>
            <button type="submit"><i className="fas fa-plus"></i></button>
          </form>
        </div>
        <div className="showLists">
            {
              this.props.passedState.lists.map(data => {
                return(
                  <div className="list clearfix" key={data.key}>
                    <i className="fas fa-bookmark"></i>
                    <p onClick={() => {this.props.handleActiveListMobile(data)}}>{data.listTitle}</p>
                    <button className="hidden" onClick={() => this.props.deleteList(data.key)}><i className="fas fa-trash"></i></button>
                  </div>
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default ListsMobile;