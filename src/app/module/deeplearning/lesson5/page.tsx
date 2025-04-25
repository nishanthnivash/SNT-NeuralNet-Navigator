"use client";
import React from 'react';
import '../DeepLearningFundamentalsModule.css';
import { useRouter } from 'next/navigation';

const DeepLearningLesson5: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Deep Learning Fundamentals Module</h1>
      <section id="lesson5" className="section">
        <h2>Lesson 5: Loss Functions and Optimization</h2>
        <p>Loss functions measure the difference between the predicted output and the actual output. Optimization algorithms adjust the weights and biases to minimize the loss.</p>
        <h3>Common Loss Functions</h3>
        <ul>
          <li>
            <strong>Mean Squared Error (MSE):</strong> Measures the average squared difference between the predicted and actual values.
            <ul>
              <li><strong>Use Case:</strong> Regression problems.</li>
            </ul>
          </li>
          <li>
            <strong>Binary Cross-Entropy:</strong> Measures the difference between the predicted and actual probability distributions in binary classification problems.
            <ul>
              <li><strong>Use Case:</strong> Binary classification problems.</li>
            </ul>
          </li>
          <li>
            <strong>Categorical Cross-Entropy:</strong> Measures the difference between the predicted and actual probability distributions in multi-class classification problems.
            <ul>
              <li><strong>Use Case:</strong> Multi-class classification problems.</li>
            </ul>
          </li>
        </ul>

        <h3>Optimization Algorithms</h3>
        <ul>
          <li><strong>Gradient Descent:</strong> Iteratively adjusts the weights and biases in the direction of the negative gradient of the loss function.</li>
          <li><strong>Stochastic Gradient Descent (SGD):</strong> Updates the weights and biases after each training example.</li>
          <li><strong>Adam:</strong> Combines the advantages of AdaGrad and RMSProp.</li>
        </ul>

        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/deeplearning/lesson4')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/deeplearning/congratulations')}>Complete Module</button>
        </div>
      </section>
    </div>
  );
};

export default DeepLearningLesson5;
