"use client";
import React from 'react';
import './IntroductionToNeuralNetworksModule.css';

const IntroductionToNeuralNetworksModule: React.FC = (): JSX.Element => {
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
          <li><a href="#lesson1">1. What is AI and ML?</a></li>
          <li><a href="#lesson2">2. The Biological Inspiration: The Human Neuron</a></li>
          <li><a href="#lesson3">3. The Artificial Neuron (Perceptron)</a></li>
          <li><a href="#lesson4">4. Layers and Basic Architectures</a></li>
          <li><a href="#lesson5">5. Applications of Neural Networks</a></li>
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
          <button onClick={() => window.location.href='#lesson2'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson2" className="section">
        <h2>Lesson 2: The Biological Inspiration: The Human Neuron</h2>
        <p>In the previous lesson, we introduced the concept of Artificial Intelligence and its subfield, Machine Learning. Now, we'll take a step back and explore the fascinating biological inspiration behind the architecture of neural networks: the <strong>human neuron</strong>. Understanding the basic structure and function of a biological neuron provides valuable intuition for how artificial neurons are designed and how they process information.</p>
        <h3>The Basic Structure of a Biological Neuron</h3>
        <p>The human brain is a complex network of billions of interconnected cells called <strong>neurons</strong>, or nerve cells. Each neuron is a fundamental unit responsible for receiving, processing, and transmitting information through electrical and chemical signals. A typical neuron consists of several key components:</p>
        <h4>Dendrites</h4>
        <p>These are branch-like extensions of the neuron that act as the primary receivers of signals from other neurons. Think of them as the "ears" of the neuron, listening for incoming messages.</p>
        <p className="visual-aid">Visual Aid: Include a clear, labeled diagram of a biological neuron highlighting the dendrites.</p>
        <h4>Cell Body (Soma)</h4>
        <p>The main body of the neuron that contains the nucleus and other essential cellular machinery. It integrates the signals received from the dendrites.</p>
        <p className="analogy">Analogy: The cell body acts like a central processing unit, summing up the incoming information.</p>
        <h4>Axon</h4>
        <p>A long, slender projection of the neuron that transmits signals away from the cell body to other neurons, muscles, or glands. It's the "voice" of the neuron, sending out the processed information.</p>
        <p className="visual-aid">Visual Aid: Ensure the axon is clearly depicted in your diagram.</p>
        <h4>Myelin Sheath</h4>
        <p>A fatty insulating layer that surrounds the axon of some neurons. It helps to speed up the transmission of electrical signals.</p>
        <p className="note">Note: Mention that not all neurons have a myelin sheath.</p>
        <h4>Axon Terminals (Synaptic Boutons)</h4>
        <p>The branched endings of the axon that transmit signals to other neurons at specialized junctions called <strong>synapses</strong>.</p>
        <p className="visual-aid">Visual Aid: Show the axon terminals and their proximity to the dendrites of another neuron at a synapse.</p>
        <h4>Synapse</h4>
        <p>The small gap between the axon terminal of one neuron and the dendrite (or cell body) of another neuron. Communication between neurons occurs through the release of chemical messengers called <strong>neurotransmitters</strong> across this gap.</p>
        <p className="analogy">Analogy: The synapse is like a communication bridge where information is passed from one neuron to the next.</p>
        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson1'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson3'}>Next Lesson</button>
        </div>
      </section>

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
          <button onClick={() => window.location.href='#lesson2'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson4'}>Next Lesson</button>
        </div>
      </section>

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
          <button onClick={() => window.location.href='#lesson3'}>Previous Lesson</button>
          <button onClick={() => window.location.href='#lesson5'}>Next Lesson</button>
        </div>
      </section>

      <section id="lesson5" className="section">
        <h2>Lesson 5: Applications of Neural Networks - Transforming Industries</h2>
        <p>Having explored the building blocks and basic architectures of neural networks, we now arrive at the exciting stage of witnessing their impact on the real world. Neural networks are no longer just a theoretical concept; they are the driving force behind numerous cutting-edge technologies that are transforming industries and shaping our daily lives. This lesson will showcase some of the most significant and impactful applications of neural networks across various domains.</p>

        <h3>The Breadth of Neural Network Applications</h3>
        <p>The versatility of neural networks stems from their ability to learn complex patterns from vast amounts of data. This has led to their successful deployment in a wide array of fields:</p>
        <ul>
          <li>
            <strong>Image Recognition and Computer Vision:</strong> Neural networks, particularly Convolutional Neural Networks (CNNs), have revolutionized how computers "see" and interpret images.
            <ul>
              <li><strong>Examples:</strong></li>
              <li>Object Detection: Identifying and locating objects (e.g., cars, pedestrians) in images and videos, crucial for autonomous vehicles and surveillance systems.</li>
              <li>Image Classification: Categorizing images based on their content (e.g., identifying different species of plants or animals).</li>
              <li>Facial Recognition: Identifying individuals from images or videos, used in security systems and social media tagging.</li>
              <li>Medical Imaging Analysis: Assisting in the detection of diseases like cancer from X-rays, MRIs, and CT scans.</li>
            </ul>
          </li>
          <li>
            <strong>Natural Language Processing (NLP):</strong> Recurrent Neural Networks (RNNs) and their more advanced variants (LSTMs, Transformers)
            have enabled significant advancements in understanding and generating human language.
            <ul>
              <li><strong>Examples:</strong></li>
              <li>Machine Translation: Translating text between different languages with increasing accuracy.</li>
              <li>Chatbots and Virtual Assistants: Creating conversational agents that can understand and respond to user queries.</li>
              <li>Sentiment Analysis: Determining the emotional tone (positive, negative, neutral) of text data, valuable for market research and customer feedback analysis.</li>
              <li>Text Summarization: Automatically generating concise summaries of long documents or articles.</li>
              <li>Speech Recognition: Converting spoken language into text, powering voice assistants and dictation software.</li>
              <li>Natural Language Generation: Generating human-like text for various purposes, such as writing articles or creating creative content.</li>
            </ul>
          </li>
          <li>
            <strong>Healthcare and Medicine:</strong> Neural networks are playing an increasingly vital role in improving diagnostics, drug discovery, and personalized medicine.
            <ul>
              <li><strong>Examples:</strong></li>
              <li>Disease Diagnosis: Assisting doctors in diagnosing diseases based on patient data, medical images, and genetic information.</li>
              <li>Drug Discovery and Development: Identifying potential drug candidates and predicting their effectiveness and side effects.</li>
              <li>Personalized Treatment Plans: Tailoring medical treatments based on individual patient characteristics and data.</li>
              <li>Predictive Healthcare: Identifying patients at high risk of developing certain conditions, enabling proactive interventions.</li>
            </ul>
          </li>
          <li>
            <strong>Finance and Economics:</strong> Neural networks are used for complex modeling and prediction in the financial sector.
            <ul>
              <li><strong>Examples:</strong></li>
              <li>Fraud Detection: Identifying unusual patterns in financial transactions to prevent fraudulent activities.</li>
              <li>Algorithmic Trading: Developing automated trading strategies based on market analysis and predictions.</li>
              <li>Credit Risk Assessment: Evaluating the creditworthiness of individuals and businesses.</li>
              <li>Economic Forecasting: Predicting economic trends and market movements.</li>
            </ul>
          </li>
          <li>
            <strong>Transportation and Logistics:</strong> Neural networks are crucial for the development of intelligent transportation systems.
            <ul>
              <li><strong>Examples:</strong></li>
              <li>Autonomous Vehicles: Enabling self-driving cars to perceive their environment, make decisions, and navigate roads.</li>
              <li>Traffic Prediction and Optimization: Forecasting traffic flow and optimizing traffic light timings to reduce congestion.</li>
              <li>Route Optimization: Finding the most efficient routes for delivery vehicles and transportation networks.</li>
            </ul>
          </li>
          <li>
            <strong>Entertainment and Media:</strong> Neural networks are being used to enhance creativity and personalize experiences.
            <ul>
              <li><strong>Examples:</strong></li>
              <li>Recommendation Systems: Suggesting movies, music, books, and other content based on user preferences.</li>
              <li>Content Generation: Creating music, art, and even generating realistic images and videos.</li>
              <li>Style Transfer: Applying the artistic style of one image to another.</li>
            </ul>
          </li>
        </ul>

        <h3>The Future of Neural Network Applications</h3>
        <p>The applications of neural networks are continuously expanding as research progresses and computational power increases. We can expect to see even more transformative applications in the future, addressing complex challenges in various fields and further integrating AI into our daily lives.</p>

        <h3>Ethical Considerations</h3>
        <p>As neural networks become more powerful and pervasive, it's crucial to consider the ethical implications of their use, including issues of bias in data, transparency of decision-making, and the potential impact on employment. Responsible development and deployment of these technologies are paramount.</p>

        <h3>Conclusion</h3>
        <p>This lesson has provided a glimpse into the vast and rapidly evolving landscape of neural network applications. From enabling machines to see and understand language to revolutionizing healthcare and transportation, neural networks are demonstrating their potential to solve some of the world's most challenging problems and create new possibilities. As you continue your learning journey, keep in mind the real-world impact of these powerful tools.</p>

        <div className="navigation-buttons">
          <button onClick={() => window.location.href='#lesson4'}>Previous Lesson</button>
          <button>Complete Module</button>
        </div>
      </section>
    </div>
  );
};

export default IntroductionToNeuralNetworksModule;