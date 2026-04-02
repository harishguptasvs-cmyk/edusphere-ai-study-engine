import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const history = useHistory();

  const topics = [
    { id: 1, name: 'Introduction to DBMS', description: 'Learn the basics of Database Management Systems' },
    { id: 2, name: 'ER Model', description: 'Understand Entity-Relationship Model' },
    { id: 3, name: 'Normalization', description: 'Master database normalization techniques' },
    { id: 4, name: 'SQL Basics', description: 'Learn SQL fundamentals' },
    { id: 5, name: 'Transactions', description: 'Understand ACID properties and transactions' }
  ];

  const handleStartLearning = (topicId) => {
    history.push(`/learning/${topicId}`);
  };

  const handleStartPractice = (topicId) => {
    history.push(`/practice/${topicId}`);
  };

  const handleStartTest = (topicId) => {
    history.push(`/test/${topicId}`);
  };

  const handleLogout = () => {
    history.push('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>EduSphere - AI Study Flow Engine</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>
      <div className="dashboard-content">
        <h2>DBMS Topics</h2>
        <div className="topics-grid">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              <div className="topic-actions">
                <button className="btn-learn" onClick={() => handleStartLearning(topic.id)}> 📚 Learn </button>
                <button className="btn-practice" onClick={() => handleStartPractice(topic.id)}> ✏️ Practice </button>
                <button className="btn-test" onClick={() => handleStartTest(topic.id)}> ✅ Test </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;