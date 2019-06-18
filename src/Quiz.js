import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = { quiz_position: 1};
    }

    render() {
        const index = this.state.quiz_position-1;
        const question = quizData.quiz_questions[index];

        return (
            <QuizQuestion quiz_question={question} />
        );
    }
}

export default Quiz;