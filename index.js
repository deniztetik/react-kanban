import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Columns } from 'bloomer';

import 'bulma/css/bulma.css';

import ProgressSection from './ProgressSection';

import './index.scss';

class App extends Component {
  state = {
    tasks: [
      {
        title: 'Stream React Kanban tutorial on Twitch',
        description: 'Make a react Kanaban tutorial using techniques such as drag and drop. Also use React Context.',
        status: 'to-do',
      },
      {
        title: 'Go buy groceries',
        description: 'buy milk, tomatoes, brocolli, cheese',
        status: 'to-do',
      },
      {
        title: 'Get coffee with friend',
        description: 'go to the coffeeshop in flatiron that you like and order a matcha latte!',
        status: 'to-do',
      },
    ],
  }

  filterTasksForCategory(categoryCode) {
    const {
      tasks,
    } = this.state;

    return tasks.filter((task) => task.status === categoryCode);
  }

  updateTaskStatus = (taskTitle, status) => {
    const updatedTasks = [ ...this.state.tasks ];

    updatedTasks.forEach((task) => {
      if (task.title === taskTitle) {
        task.status = status;
      }
    });

    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    return (
      <div className="App">
        <Columns isCentered>
          <ProgressSection
            title='To Do'
            titleCode='to-do'
            tasks={this.filterTasksForCategory('to-do')}
            updateTaskStatus={this.updateTaskStatus}
          />
          <ProgressSection
            title='In Progress'
            titleCode='in-progress'
            tasks={this.filterTasksForCategory('in-progress')}
            updateTaskStatus={this.updateTaskStatus}
          />
          <ProgressSection
            title='Done'
            titleCode='done'
            tasks={this.filterTasksForCategory('done')}
            updateTaskStatus={this.updateTaskStatus}
          />
        </Columns>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
