"use client";
import React from 'react';
import './IntroductionToNeuralNetworksModule.css';
import { useRouter } from 'next/navigation';

const IntroductionToNeuralNetworksModule: React.FC = (): JSX.Element => {
  const router = useRouter();

  const handleCompleteModule = () => {
    router.push('/module/introduction/congratulations');
  };

  return (
    <div className="module-container">
      <h1>Introduction to Neural Networks Module</h1>
      <div className="module-overview">
        <h2>Welcome!</h2>
        <p>Welcome! In this module, you will learn the fundamental concepts of neural networks and their diverse applications.</p>
        <ul>
          <li><strong>Estimated Time:</strong> 30-45 minutes</li>
          <li><strong>Prerequisites:</strong> No prior knowledge of machine learning is required.</li>
        </ul>
        <h3>Lessons:</h3>
        <ul>
          <li><a href="/module/introduction/lesson1">1. What is AI and ML?</a></li>
          <li><a href="/module/introduction/lesson2">2. The Biological Inspiration: The Human Neuron</a></li>
          <li><a href="/module/introduction/lesson3">3. The Artificial Neuron (Perceptron)</a></li>
          <li><a href="/module/introduction/lesson4">4. Layers and Basic Architectures</a></li>
          <li><a href="/module/introduction/lesson5">5. Applications of Neural Networks</a></li>
        </ul>
      </div>

      <section id="lesson1" className="section">
        <h2>Lesson 1: What is AI and ML?</h2>
        <h3>What is Artificial Intelligence (AI)?</h3>
        <p>
          Artificial Intelligence is the field of computer science dedicated to creating
          machines that can perform tasks that typically require human intelligence.
          This encompasses a wide range of capabilities, including:
        </p>
        <div className="ai-capabilities">
          <p>
            Learning: Acquiring information and rules for using the
            information.
          </p>
          <p>Reasoning: Using logic to draw conclusions and make decisions.</p>
          <p>Problem-solving: Identifying and finding solutions to complex issues.</p>
          <p>Perception: Understanding sensory input such as vision, speech, and touch.</p>
          <p>Language understanding: Processing and interpreting human language.</p>
        </div>
        <p>
          Think of AI as the overarching goal – to build intelligent agents that can perceive their environment and take actions to maximize their chance of successfully achieving their goals. This ambition has driven decades of research and development, leading to the sophisticated AI systems we see today.
        </p>
        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/introduction/lesson2')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default IntroductionToNeuralNetworksModule;
