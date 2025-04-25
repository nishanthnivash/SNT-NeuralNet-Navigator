import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold text-primary mb-4">
        About SNT NeuralNet Navigator
      </h1>
      <p className="text-md text-muted-foreground mb-4">
        SNT NeuralNet Navigator is an e-learning platform dedicated to
        providing high-quality education on neural networks and deep learning.
      </p>
      <p className="text-md text-muted-foreground mb-4">
        Our mission is to make complex topics accessible to everyone, from
        beginners to experienced professionals.
      </p>
      <h2 className="text-xl font-semibold text-primary mb-4">Our Team</h2>
      <p className="text-md text-muted-foreground mb-4">
        We are a team of passionate educators and AI experts committed to
        creating engaging and informative learning experiences.
      </p>
      <h2 className="text-xl font-semibold text-primary mb-4">Contact Us</h2>
      <p className="text-md text-muted-foreground">
        Email: <a href="mailto:info@example.com">info@example.com</a>
      </p>
    </div>
  );
};

export default AboutUsPage;
