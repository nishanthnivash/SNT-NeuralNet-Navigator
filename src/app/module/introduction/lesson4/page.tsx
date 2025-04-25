"use client";
import React from 'react';
import '../IntroductionToNeuralNetworksModule.css';
import { useRouter } from 'next/navigation';

const Lesson4: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Introduction to Neural Networks Module</h1>
      <section id="lesson4" className="section">
        <h2>Lesson 4: Layers and Basic Architectures - Organizing Neural Networks</h2>
        <p>In the previous lesson, we explored the fundamental building block of neural networks: the artificial neuron or perceptron. Now, we'll delve into how these individual units are organized into <strong>layers</strong> and how these layers form the basic <strong>architectures</strong> of neural networks, enabling them to learn increasingly complex patterns and solve sophisticated problems.</p>
        <h3>The Concept of Layers</h3>
        <ul>
          <li>
            <strong>Input Layer:</strong> This is the first layer of the network. It receives the raw input data from the outside world. The number of neurons in the input layer corresponds to the number of features in your dataset. For example, if you're feeding in images that are 28x28 pixels, the input layer would typically have 784 neurons (one for each pixel).
            <p className="analogy">Analogy: Think of the input layer as the sensory organs of the network, directly receiving the initial information.</p>
          </li>
          <li>
            <strong>Hidden Layers:</strong> These are the intermediate layers situated between the input and output layers. A neural network can have zero, one, or multiple hidden layers. It's within these hidden layers that the network performs the crucial task of feature extraction and complex pattern recognition.
            <p><strong>Feature Extraction:</strong> Each neuron in a hidden layer learns to detect specific features or combinations of features from the input or the preceding layers. Deeper networks (with more hidden layers) can learn increasingly abstract and hierarchical representations of the data.</p>
            <p><strong>Complexity:</strong> The number of hidden layers and the number of neurons within each hidden layer are key architectural choices that influence the network's capacity to learn complex functions.</p>
          </li>
          <li>
            <strong>Output Layer:</strong> This is the final layer of the network. It produces the output or prediction of the model. The number of neurons in the output layer depends on the task at hand.
            <p><strong>Classification:</strong> For a binary classification task (e.g., cat vs. dog), the output layer might have a single neuron with a sigmoid activation function, outputting a probability between 0 and 1. For multi-class classification (e.g., identifying different types of animals), the output layer might have multiple neurons (one for each class) with a softmax activation function, outputting a probability distribution over the classes.</p>
            <p><strong>Regression:</strong> For a regression task (e.g., predicting house prices), the output layer typically has a single neuron with a linear or no activation function, outputting a continuous value.</p>
          </li>
        </ul>
        <h3>Basic Neural Network Architectures</h3>
        <ul>
          <li>
            <strong>Feedforward Neural Networks (FFNNs) or Multi-Layer Perceptrons (MLPs):</strong> This is the most basic type of neural network. Information flows in one direction, from the input layer through one or more hidden layers to the output layer, without any loops or cycles.
            <p><strong>Connectivity:</strong> Neurons in one layer are typically connected to every neuron in the subsequent layer (fully connected layers).</p>
            <p><strong>Applications:</strong> MLPs are effective for a wide range of tasks, including classification and regression on tabular data, image classification (though less efficient than CNNs for complex images), and natural language processing (for simpler tasks).</p>
          </li>
          <li>
            <strong>Convolutional Neural Networks (CNNs):</strong> CNNs are specifically designed for processing grid-like data, such as images. They utilize specialized layers called convolutional layers that can automatically learn spatial hierarchies of features.
            <p><strong>Convolutional Layers:</strong> These layers apply filters to local regions of the input, allowing the network to detect patterns like edges, textures, and shapes.</p>
            <p><strong>Pooling Layers:</strong> These layers reduce the spatial dimensions of the feature maps, making the network more robust to variations in the input (e.g., small shifts or rotations in an image).</p>
            <p><strong>Applications:</strong> CNNs have achieved remarkable success in image recognition, object detection, image segmentation, and even some natural language processing tasks.</p>
          </li>
          <li>
            <strong>Recurrent Neural Networks (RNNs):</strong> RNNs are designed to process sequential data, where the order of information is important (e.g., time series data, natural language). They have connections that form directed cycles, allowing them to maintain a "memory" of past inputs.
            <p><strong>Recurrent Connections:</strong> Neurons in RNNs can receive input not only from the previous layer but also from their own past states.</p>
            <p><strong>Applications:</strong> RNNs are used for tasks like natural language processing (e.g., language modeling, machine translation), speech recognition, and time series forecasting. Variations like LSTMs (Long Short-Term Memory) and GRUs (Gated Recurrent Units) address the vanishing gradient problem and can learn longer-range dependencies.</p>
          </li>
        </ul>
        <h3>Key Architectural Considerations</h3>
        <ul>
          <li><strong>Number of Layers:</strong> Deeper networks can learn more complex representations but are also harder to train and more prone to overfitting (performing well on training data but poorly on unseen data).</li>
          <li><strong>Number of Neurons per Layer:</strong> The width of a layer (number of neurons) determines the network's capacity to learn features at that level. Too few neurons might lead to underfitting (not learning the underlying patterns), while too many can contribute to overfitting.</li>
          <li><strong>Types of Layers:</strong> The choice of layer types (e.g., fully connected, convolutional, recurrent) depends heavily on the nature of the input data and the task.</li>
          <li><strong>Activation Functions:</strong> The activation functions used in each layer influence the non-linearity and the range of output values. Different activation functions are suitable for different parts of the network and different tasks.</li>
        </ul>
        <div className="navigation-buttons">
          <button onClick={() => router.push('/module/introduction/lesson3')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/introduction/lesson5')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default Lesson4;
