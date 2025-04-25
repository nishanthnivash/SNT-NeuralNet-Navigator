import React from 'react';

const CongratulationsPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}>
      <div>
        <h1 style={{
          color: '#28a745',
          fontSize: '2.5em',
          marginBottom: '20px',
        }}>Congratulations!</h1>
        <p style={{
          fontSize: '1.2em',
          color: '#333',
          marginBottom: '30px',
        }}>You have successfully completed the Introduction to Neural Networks Module.</p>
        <p style={{
          fontSize: '1.1em',
          color: '#555',
        }}>We appreciate your dedication and hard work. Keep exploring!</p>
      </div>
    </div>
  );
};

export default CongratulationsPage;
