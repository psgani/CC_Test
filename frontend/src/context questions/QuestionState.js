import React, { useState, useEffect } from 'react';
import questionContext from './questionContext';
import axios from 'axios';

const QuestionState = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await axios.get('https://cc-test-three.vercel.app/api/question/getquestions');
      const fetchedQuestions = response.data.output;
      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <questionContext.Provider value={{ questions, getQuestions }}>
      {props.children}
    </questionContext.Provider>
  );
};

export default QuestionState;
