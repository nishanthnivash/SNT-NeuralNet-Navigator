"use client";
import React from 'react';
import './ConvolutionalNeuralNetworksModule.css';
import { useRouter } from 'next/navigation';

const ConvolutionalNeuralNetworksModule: React.FC = (): JSX.Element => {
  const router = useRouter();

  const handleCompleteModule = () => {
    router.push('/module/convolutional-neural-networks/congratulations');
  };

  return (
    <div className="module-container">
      <h1>Convolutional Neural Networks (CNNs) Module</h1>
      <div className="module-overview">
        <h2>Welcome!</h2>
        <p>Welcome! In this module, you will delve into the fundamental concepts of Convolutional Neural Networks (CNNs) and their applications.</p>
        <ul>
          <li><strong>Estimated Time:</strong> 45-60 minutes</li>
          <li><strong>Prerequisites:</strong> Basic understanding of neural networks is recommended.</li>
        </ul>
        <h3>Lessons:</h3>
        <ul>
          <li><a href="#lesson1">1. Introduction to Convolutional Neural Networks</a></li>
          <li><a href="#lesson2">2. CNN Architecture</a></li>
          <li><a href="#lesson3">3. Convolutional Layers</a></li>
          <li><a href="#lesson4">4. Pooling Layers</a></li>
          <li><a href="#lesson5">5. CNN Applications</a></li>
        </ul>
      </div>

      <section id="lesson1" className="section">
        <h2>Lesson 1: Introduction to Convolutional Neural Networks</h2>
        <h3>What are Convolutional Neural Networks?</h3>
        <p>
          Convolutional Neural Networks (CNNs) are a class of deep neural networks, most commonly applied to analyzing visual imagery.
          They are also known as Shift Invariant or Space Invariant Artificial Neural Networks (SIANN).
        </p>
        <div className="ai-capabilities">
          <p>
            Feature Extraction: Automatically learns relevant features from images.
          </p>
          <p>Spatial Hierarchy: Captures spatial relationships between features.</p>
          <p>Translation Invariance: Recognizes patterns regardless of their location in the image.</p>
          <p>Parameter Sharing: Reduces the number of parameters by reusing weights.</p>
        </div>
        <p>
          CNNs are particularly effective in tasks such as image and video recognition, recommender systems, and natural language processing.
        </p>
        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson2'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson2" className="section">
        <h2>Lesson 2: CNN Architecture</h2>
        <p>In this lesson, we'll explore the architecture and components of CNNs.</p>
        <h3>Basic Structure of CNNs</h3>
        <p>CNNs typically consist of multiple layers, including convolutional layers, pooling layers, and fully connected layers.</p>
        <h4>Convolutional Layers</h4>
        <p>These layers perform convolution operations to extract features from the input data.</p>
        <p className="visual-aid">Visual Aid: A diagram of a CNN showing convolutional layers.</p>
        <h4>Pooling Layers</h4>
        <p>These layers reduce the spatial dimensions of the feature maps.</p>
        <p className="analogy">Analogy: Pooling layers help to reduce the computational complexity and make the network more robust.</p>
        <h4>Fully Connected Layers</h4>
        <p>These layers perform classification or regression based on the extracted features.</p>
        <p className="visual-aid">Visual Aid: A diagram of a CNN showing fully connected layers.</p>
        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson1'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson3'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson3" className="section">
        <h2>Lesson 3: Convolutional Layers</h2>
        <p>Convolutional layers are the core building blocks of CNNs. They perform convolution operations to extract features from the input data.</p>
        <h3>Convolution Operation</h3>
        <ul>
          <li><strong>Filters:</strong> Convolutional layers use filters (also known as kernels) to detect patterns in the input data.</li>
          <li><strong>Feature Maps:</strong> The output of a convolutional layer is a set of feature maps, which represent the detected features.</li>
          <li><strong>Stride:</strong> The stride determines how the filter moves across the input data.</li>
          <li><strong>Padding:</strong> Padding is used to control the size of the output feature maps.</li>
        </ul>
        <h3>Types of Convolutional Layers</h3>
        <h4>1D Convolutional Layers</h4>
        <p>These layers are used to process sequential data, such as audio or text.</p>
        <h4>2D Convolutional Layers</h4>
        <p>These layers are used to process images or videos.</p>
        <h4>3D Convolutional Layers</h4>
        <p>These layers are used to process 3D data, such as medical images.</p>
        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson2'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson4'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson4" className="section">
        <h2>Lesson 4: Pooling Layers</h2>
        <p>Pooling layers reduce the spatial dimensions of the feature maps, reducing the computational complexity and making the network more robust.</p>
        <h3>Types of Pooling Layers</h3>
        <ul>
          <li>
            <strong>Max Pooling:</strong> Selects the maximum value from each pooling region.
            <p className="analogy">Analogy: Max pooling helps to capture the most important features.</p>
          </li>
          <li>
            <strong>Average Pooling:</strong> Computes the average value from each pooling region.
            <p><strong>Advantages:</strong> Average pooling can help to smooth the feature maps.</p>
            <p><strong>Disadvantages:</strong> Average pooling may blur the important features.</p>
          </li>
        </ul>
        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson3'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson5'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson5" className="section">
        <h2>Lesson 5: CNN Applications</h2>
        <p>CNNs have a wide range of applications in various fields.</p>
        <h3>Image Recognition</h3>
        <ul>
          <li>
            <strong>Object Detection:</strong> Identifying and locating objects in images.
          </li>
          <li>
            <strong>Image Classification:</strong> Categorizing images based on their content.
          </li>
          <li>
            <strong>Image Segmentation:</strong> Dividing an image into multiple regions or objects.
          </li>
        </ul>

        <h3>Video Analysis</h3>
        <ul>
          <li><strong>Video Classification:</strong> Categorizing videos based on their content.</li>
          <li><strong>Action Recognition:</strong> Identifying human actions in videos.</li>
        </ul>

        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson4'}>Previous Lesson</button>
          <button onClick={handleCompleteModule}>Complete Module</button>
        </div>
      </section>
    </div>
  );
};

export default ConvolutionalNeuralNetworksModule;
