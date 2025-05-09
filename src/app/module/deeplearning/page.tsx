"use client";
import React from 'react';
import './DeepLearningFundamentalsModule.css';
import { useRouter } from 'next/navigation';

const DeepLearningFundamentalsModule: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Deep Learning Fundamentals Module</h1>
      <div className="module-overview">
        <h2>Welcome!</h2>
        <p>Welcome! In this module, you will delve into the fundamental concepts of deep learning and neural networks.</p>
        <ul>
          <li><strong>Estimated Time:</strong> 45-60 minutes</li>
          <li><strong>Prerequisites:</strong> Basic understanding of neural networks is recommended.</li>
        </ul>
        <h3>Lessons:</h3>
        <ul>
          <li><a href="/module/deeplearning/lesson1">1. Introduction to Deep Learning</a></li>
          <li><a href="/module/deeplearning/lesson2">2. Deep Neural Networks</a></li>
          <li><a href="/module/deeplearning/lesson3">3. Training Deep Networks</a></li>
          <li><a href="/module/deeplearning/lesson4">4. Activation Functions</a></li>
          <li><a href="/module/deeplearning/lesson5">5. Loss Functions and Optimization</a></li>
        </ul>
      </div>

      <section id="lesson1" className="section">
        <h2>Lesson 1: Introduction to Deep Learning</h2>
        <h3>What is Deep Learning?</h3>
        <p>
          Deep Learning is a subfield of machine learning that uses artificial neural networks with multiple layers (deep neural networks) to analyze data and solve complex problems.
          It is inspired by the structure and function of the human brain.
        </p>
        <div className="ai-capabilities">
          <p>
            Learning: Acquiring knowledge and patterns from large datasets.
          </p>
          <p>Representation Learning: Automatically discovering useful representations of the input data.</p>
          <p>Feature Extraction: Learning to extract relevant features from raw data.</p>
          <p>Abstraction: Creating hierarchical representations that capture the underlying structure of the data.</p>
        </div>
        <p>
          Deep Learning models can automatically learn to extract relevant features from raw data, making them suitable for tasks where manual feature engineering is difficult or impossible.
        </p>
        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/deeplearning/lesson2')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default DeepLearningFundamentalsModule;
