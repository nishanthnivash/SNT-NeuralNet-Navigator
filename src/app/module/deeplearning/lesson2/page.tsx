"use client";
import React from 'react';
import '../DeepLearningFundamentalsModule.css';
import { useRouter } from 'next/navigation';

const DeepLearningLesson2: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Deep Learning Fundamentals Module</h1>
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
          <button onClick={() => router.push('/module/deeplearning/lesson1')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/deeplearning/lesson3')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default DeepLearningLesson2;
