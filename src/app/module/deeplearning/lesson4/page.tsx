"use client";
import React from 'react';
import '../DeepLearningFundamentalsModule.css';
import { useRouter } from 'next/navigation';

const DeepLearningLesson4: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Deep Learning Fundamentals Module</h1>
      <section id="lesson4" className="section">
        <h2>Lesson 4: Activation Functions</h2>
        <p>Activation functions introduce non-linearity into the network, allowing it to learn complex relationships in the data.</p>
        <h3>Common Activation Functions</h3>
        <ul>
          <li>
            <strong>Sigmoid:</strong> Outputs values between 0 and 1.
            <p className="analogy">Analogy: Used in binary classification problems.</p>
          </li>
          <li>
            <strong>ReLU (Rectified Linear Unit):</strong> Outputs the input directly if it is positive, otherwise, it outputs 0.
            <p><strong>Advantages:</strong> Simple and computationally efficient.</p>
            <p><strong>Disadvantages:</strong> Can suffer from the "dying ReLU" problem.</p>
          </li>
          <li>
            <strong>Tanh (Hyperbolic Tangent):</strong> Outputs values between -1 and 1.
            <p><strong>Advantages:</strong> Outputs values between -1 and 1.</p>
            <p><strong>Disadvantages:</strong> Can suffer from vanishing gradients.</p>
          </li>
          <li>
            <strong>Softmax:</strong> Converts a vector of real numbers into a probability distribution.
            <p><strong>Advantages:</strong> Converts a vector of real numbers into a probability distribution.</p>
            <p><strong>Disadvantages:</strong> Requires careful tuning of hyperparameters.</p>
          </li>
        </ul>
        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/deeplearning/lesson3')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/deeplearning/lesson5')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default DeepLearningLesson4;
