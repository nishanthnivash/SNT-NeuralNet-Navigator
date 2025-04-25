"use client";
import React from 'react';
import '../DeepLearningFundamentalsModule.css';
import { useRouter } from 'next/navigation';

const DeepLearningLesson3: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Deep Learning Fundamentals Module</h1>
      <section id="lesson3" className="section">
        <h2>Lesson 3: Training Deep Networks</h2>
        <p>Training a deep neural network involves adjusting the weights and biases to minimize the difference between the predicted output and the actual output.</p>
        <h3>Backpropagation Algorithm</h3>
        <ul>
          <li><strong>Forward Pass:</strong> Input data is passed through the network to generate a prediction.</li>
          <li><strong>Loss Calculation:</strong> A loss function measures the difference between the predicted output and the actual output.</li>
          <li><strong>Backward Pass:</strong> The gradients of the loss function with respect to the weights and biases are calculated using the chain rule.</li>
          <li><strong>Weight Update:</strong> The weights and biases are updated using an optimization algorithm like gradient descent.</li>
        </ul>
        <h3>Challenges in Training Deep Networks</h3>
        <h4>Vanishing Gradients</h4>
        <p>Gradients may become very small during backpropagation, making it difficult to update the weights in the earlier layers.</p>
        <h4>Exploding Gradients</h4>
        <p>Gradients may become very large during backpropagation, leading to unstable training.</p>
        <h4>Overfitting</h4>
        <p>The network may learn to memorize the training data, leading to poor generalization performance.</p>
        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/deeplearning/lesson2')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/deeplearning/lesson4')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default DeepLearningLesson3;
