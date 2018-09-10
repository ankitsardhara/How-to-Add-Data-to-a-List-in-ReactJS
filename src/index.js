import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/TodoItem.js'
import TodoForm from './component/TodoForm.js'


class TodoList extends React.Component {

        constructor() {
            super();
            this.changeStatus = this.changeStatus.bind(this);
            this.updateTask = this.updateTask.bind(this);
            this.addTask = this.addTask.bind(this);
            this.state = {
                tasks: [{
                        name: 'PHP',
                        completed: false
                    },
                    {
                        name: 'NodeJS',
                        completed: false
                    },
                    {
                        name: 'ReactJS',
                        completed: false
                    }
                ],
                currentTask: ''
            }
        }

        changeStatus(index) {
            
            var tasks = this.state.tasks;
            var task = this.state.tasks[index];
            task.completed = !task.completed;
            this.setState({
                tasks: tasks
            });
        }

        updateTask(newValue) {
            this.setState({
                currentTask: newValue.target.value
            })
        }
        addTask(evt) {
              console.log(this);
          
            evt.preventDefault();
          
          var tasks = this.state.tasks;
            let currentTask = this.state.currentTask;
            tasks.push({
                name: currentTask,
                completed: false
            })

            this.setState({
                tasks:tasks,
                currentTask:''
            })
        }
        render() {

            return ( <section >
                <TodoForm currentTask = {
                    this.state.currentTask
                }
                updateTask = {
                    this.updateTask
                }
                addTask = {
                    this.addTask
                }
                /> 
                <ul > 
                {
                    this.state.tasks.map((task, index) => {
                            return ( <TodoItem key = {
                                    task.name
                                }
                                index = {
                                    index
                                }
                                clickHandler = {
                                    this.changeStatus
                                }
                                detail = {
                                    task
                                }  />)
                            })
                    } 
                    </ul> </section>

                )
            }
        }




        ReactDOM.render( < TodoList / > , document.getElementById('root'))