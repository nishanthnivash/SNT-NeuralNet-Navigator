"use client";
import React from 'react';
import './DeepLearningFundamentalsModule.css';

const DeepLearningFundamentalsModule: React.FC = (): JSX.Element => {
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
          <li><a href="#lesson1">1. Introduction to Deep Learning</a></li>
          <li><a href="#lesson2">2. Deep Neural Networks</a></li>
          <li><a href="#lesson3">3. Training Deep Networks</a></li>
          <li><a href="#lesson4">4. Activation Functions</a></li>
          <li><a href="#lesson5">5. Loss Functions and Optimization</a></li>
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
          <button onClick={() => window.location.href='#lesson2'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson2" className="section">
        <h2>Lesson 2: Deep Neural Networks</h2>
        <p>In this lesson, we'll explore the architecture and components of deep neural networks.</p>
        <h3>Structure of Deep Neural Networks</h3>
        <p>Deep Neural Networks (DNNs) consist of multiple layers of interconnected nodes (neurons). Each layer performs a specific transformation on the input data.</p>
        <h4>Input Layer</h4>
        <p>The first layer of the network, which receives the raw input data.</p>
        <p className="visual-aid">Visual Aid: A diagram of a DNN showing the input layer.</p>
        <h4>Hidden Layers</h4>
        <p>The intermediate layers between the input and output layers, where the network learns to extract features and patterns.</p>
        <p className="analogy">Analogy: Hidden layers are like the "brain" of the network, where the actual learning happens.</p>
        <h4>Output Layer</h4>
        <p>The final layer of the network, which produces the output or prediction.</p>
        <p className="visual-aid">Visual Aid: A diagram of a DNN showing the output layer.</p>
        <h4>Connections and Weights</h4>
        <p>Neurons in adjacent layers are connected by weighted connections. The weights determine the strength of the connection.</p>
        <p className="note">Note: Weights are adjusted during the training process to improve the network's performance.</p>
        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson1'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson3'}>Next Lesson</button>
        </div>
      </section>

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
          <button onClick={() => window.location.href='#lesson2'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson4'}>Next Lesson</button>
        </div>
      </section>

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
          <button onClick={() => window.location.href='#lesson3'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson5'}>Next Lesson</button>
        </div>
      </section>

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
          <button onClick={() => window.location.href='#lesson4'}>Previous Lesson</button>
          <button>Complete Module</button>
        </div>
      </section>
    </div>
  );
};

export default DeepLearningFundamentalsModule;
