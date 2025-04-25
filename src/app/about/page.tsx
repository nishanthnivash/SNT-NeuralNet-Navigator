import React from 'react';
import Image from 'next/image';

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
      <h2 className="text-xl font-semibold text-primary mb-4">Created By</h2>
       <Image
            src="https://res.cloudinary.com/dlxhuct7v/image/upload/v1745565080/Untitled_Project_1_jeg70l.jpg" // Replace with your actual image URL
            alt="Creator's Photo"
            width={200}
            height={200}
            className="rounded-md"
          />
      <p className="text-md text-muted-foreground mb-4">
        I am an aspiring AI/ML Engineer with a passion for creating intelligent and user-friendly applications. This platform, SNT NeuralNet Navigator, is a personal project developed during my Bachelor's of Technology in Artificial Intelligence & Data Science at Mahendra Engineering College to make learning about neural networks more accessible. It reflects my skills in AI/ML, web development, and my commitment to building engaging educational tools.
      </p>
      <h2 className="text-xl font-semibold text-primary mb-4">Contact Us</h2>
      <p className="text-md text-muted-foreground">
        Email: <a href="mailto:sritamilnishanth@gmail.com">sritamilnishanth@gmail.com</a>
      </p>
    </div>
  );
};

export default AboutUsPage;
