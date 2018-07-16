import React, { Component } from 'react'

import {
    Card,
    CardHeader,
    CardContent,
    Content,
    Title,
} from 'bloomer';

class TaskCard extends Component {
    onDragStartHandler = (e, taskTitle) => {
        e.dataTransfer.setData('text', taskTitle);
    };

    render() {
        const {
            task,
        } = this.props;

        return (
            <Card
                className='task-card'
                key={task.name}
                draggable
                onDragStart={(e) => this.onDragStartHandler(e, task.title)}
            >
                <CardHeader className='task-card__header'>
                    <Title
                        isSize={6}
                        hasTextAlign='centered'
                    >
                        {task.title}
                    </Title>
                </CardHeader>
                <CardContent>
                    <Content>
                        {task.description}
                    </Content>
                </CardContent>
            </Card>
        );
    }
}

export default TaskCard;
