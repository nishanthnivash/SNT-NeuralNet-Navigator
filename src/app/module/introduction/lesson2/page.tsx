"use client";
import React from 'react';
import '../IntroductionToNeuralNetworksModule.css';
import { useRouter } from 'next/navigation';

const Lesson2: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="module-container">
      <h1>Introduction to Neural Networks Module</h1>
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
          <button onClick={() => router.push('/module/introduction')}>Previous Lesson</button>
          <button onClick={() => router.push('/module/introduction/lesson3')}>Next Lesson</button>
        </div>
      </section>
    </div>
  );
};

export default Lesson2;
