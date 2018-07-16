import React, { Component } from 'react'

import { Column, Title } from 'bloomer';
import TaskCard from './TaskCard';

class ProgressSection extends Component {
    onDropHandler = (e) => {
        const {
            titleCode,
            updateTaskStatus,
        } = this.props;

        e.preventDefault();

        const taskTitle = e.dataTransfer.getData('text');

        updateTaskStatus(taskTitle, titleCode);
    };

    render() {
        const {
            title,
            titleCode,
            tasks = [],
        } = this.props;

        return (
            <Column
                isSize='1/3'
                className={`${titleCode}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={this.onDropHandler}
            >
                <div>
                    <Title
                        isSize={3}
                        hasTextAlign='centered'>{title}
                    </Title>
                    {
                        tasks.map((task) => {
                            return <TaskCard task={task} key={task.title} />
                        })
                    }
                </div>
            </Column>
        );
    }
}

export default ProgressSection;
