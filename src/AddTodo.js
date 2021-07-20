import React, {Component} from 'react';

class AddTodo extends Component{

    state = {
        content: ''
    }

    addTodo = (e) => {
        let newTodo = e.target.value;
        this.setState({content: newTodo});
    }


    formSubmit = (e) => {
        e.preventDefault();
        const todo = document.querySelector('#newtodo');

        if(todo.value === '' || todo.value === ' ') {}else{
            this.props.newTodo(this.state);
            todo.value = '';
        }

    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit} >
                    <div className='form-group d-flex'>
                        <input type='text' id='newtodo' onChange={this.addTodo} className='form-control mr-1 col-10' placeholder='Add task'/>
                        <input type='submit' className='form-control btn btn-success' />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;
