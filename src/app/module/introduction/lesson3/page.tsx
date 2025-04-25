"use client";
import React from 'react';
import '../IntroductionToNeuralNetworksModule.css';
import { useRouter } from 'next/navigation';

const Lesson3: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Introduction to Neural Networks Module</h1>
      <section id="lesson3" className="section">
        <h2>Lesson 3: The Artificial Neuron (Perceptron) - The Foundation of Deep Learning</h2>
        <p>In our journey to understand neural networks, the <strong>artificial neuron</strong>, or <strong>perceptron</strong>, stands as a pivotal concept. It is the fundamental processing unit that, when interconnected in vast numbers, enables the remarkable capabilities of modern deep learning. This lesson will dissect the perceptron, revealing its inner workings and its crucial role in building intelligent systems.</p>
        <h3>Why is the Perceptron So Important?</h3>
        <ul>
          <li><strong>Weighted Inputs:</strong> It mimics how biological neurons prioritize certain inputs over others through the strength of their connections (synapses). In the perceptron, these strengths are represented by <strong>weights</strong>. Understanding how weights influence the neuron's output is fundamental to grasping how networks learn patterns from data.</li>
          <li><strong>Thresholding/Activation:</strong> The decision of a biological neuron to "fire" is based on whether the incoming signals exceed a certain threshold. The perceptron models this with an <strong>activation function</strong>, which determines the neuron's output based on the weighted sum of its inputs. This non-linearity introduced by activation functions is crucial for learning complex relationships in data.</li>
          <li><strong>Bias for Flexibility:</strong> The <strong>bias</strong> term provides an essential degree of freedom to the perceptron. It allows the activation threshold to be shifted, making it easier to learn different decision boundaries. Without bias, the neuron's decision boundary would always have to pass through the origin, significantly limiting its learning capacity.</li>
          <li><strong>The Building Block:</strong> Just as complex structures are built from simple cells, sophisticated neural networks are constructed from interconnected perceptrons (or more advanced versions of them). Understanding the individual unit is key to comprehending the behavior of the entire network.</li>
        </ul>
        <h3>Core Concepts Explained</h3>
        <h4>Inputs and Weights</h4>
        <p>Each input carries a certain level of importance to the neuron's decision, dictated by its weight. During the learning process, these weights are adjusted to make the network better at a specific task. Think of weights as the "learnable parameters" of the neuron.</p>
        <h4>Weighted Sum</h4>
        <p>The combination of inputs and their weights determines the overall signal strength received by the neuron. This weighted sum represents the evidence gathered from the inputs.</p>
        <h4>Bias</h4>
        <p>The bias acts as a constant input, allowing the neuron to activate even when all other inputs are zero. It's like having a baseline tendency to "fire" or not, independent of the main inputs. This is critical for fitting the data accurately.</p>
        <h4>Activation Function</h4>
        <p>This function introduces non-linearity. Without non-linear activation functions, a network of perceptrons would be equivalent to a single linear model, severely limiting its ability to learn complex, real-world patterns. Different activation functions (like Sigmoid, ReLU) have different properties that make them suitable for various tasks and network architectures.</p>
        <h4>Output</h4>
        <p>The neuron's output is its "decision" or the signal it passes on to other neurons. In a classification task, the output might represent the predicted class. In a regression task, it might be a continuous value.</p>
        <h3>The Power of Interconnection</h3>
        <p>The true power of perceptrons lies in their interconnection. By linking the output of one layer of perceptrons to the input of another, we can build <strong>multi-layer perceptrons (MLPs)</strong>, which are capable of learning highly complex, non-linear relationships in data. This ability to learn intricate patterns is what underpins the success of deep learning in fields like image recognition, natural language processing, and many others.</p>
        <h3>Limitations and the Path Forward</h3>
        <p>While the perceptron is a foundational concept, it has limitations, particularly in dealing with complex, non-linearly separable data with a single layer. Understanding these limitations paved the way for the development of more sophisticated neural network architectures and learning algorithms.</p>
        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/introduction/lesson2')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/introduction/lesson4')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default Lesson3;
