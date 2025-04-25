import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background p-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">
              SNT NeuralNet Navigator
            </h1>
            <p className="text-sm text-muted-foreground">
              Explore the fascinating world of Neural Networks with our interactive
              learning modules.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/about" className="text-primary hover:text-accent">
              About Us
            </Link>
            <Link href="/login" className="text-primary hover:text-accent">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-accent text-primary-foreground px-4 py-2 rounded hover:bg-accent-foreground hover:text-accent"
            >
              Signup
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 flex-grow">
        {/* Featured Modules/Learning Paths */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Featured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Featured Module */}
            <div className="bg-card rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Introduction to Neural Networks
              </h3>
              <p className="text-sm text-muted-foreground">
                Get started with the basics of neural networks and their
                applications.
              </p>
              <Link
                href="/module/introduction"  // Modified href here
                className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Start Learning
              </Link>
            </div>
            {/* Add more featured modules here */}
            <div className="bg-card rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Deep Learning Fundamentals
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore the fundamentals of deep learning and neural networks.
              </p>
              <Link
                href="/module/deeplearning"
                className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Start Learning
              </Link>
            </div>
             {/* Add more featured modules here */}
             <div className="bg-card rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Convolutional Neural Networks (CNNs)
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn about the architecture and applications of CNNs.
              </p>
              <Link
                href="/module/convolutional-neural-networks"
                className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Start Learning
              </Link>
            </div>
             {/* Add more featured modules here */}
             <div className="bg-card rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Recurrent Neural Networks (RNNs)
              </h3>
              <p className="text-sm text-muted-foreground">
                Understand the principles and uses of RNNs for sequential data.
              </p>
              <Link
                href="/module/recurrent-neural-networks"
                className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Start Learning
              </Link>
            </div>
             {/* Add more featured modules here */}
             <div className="bg-card rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Transformers and Attention Mechanisms
              </h3>
              <p className="text-sm text-muted-foreground">
                Dive into the world of transformers and attention mechanisms.
              </p>
              <Link
                href="/module/transformers"
                className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </section>

        {/* Module Catalog Preview */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">
            Module Catalog Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Example Module Preview */}
            <div className="bg-card rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow">
              <h3 className="text-md font-semibold text-foreground mb-2">
                What are Neural Networks?
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover the basics of neural networks...
              </p>
              <Link
                href="/module/what-are-neural-networks"
                className="inline-block mt-2 text-accent hover:text-primary"
              >
                Learn More
              </Link>
            </div>
            {/* Add more module previews here */}
            <div className="bg-card rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow">
              <h3 className="text-md font-semibold text-foreground mb-2">
                Convolutional Neural Networks
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn about CNNs and their applications...
              </p>
              <Link
                href="/module/convolutional-neural-networks"
                className="inline-block mt-2 text-accent hover:text-primary"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-card rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow">
              <h3 className="text-md font-semibold text-foreground mb-2">
                Recurrent Neural Networks
              </h3>
              <p className="text-sm text-muted-foreground">
                Understand RNNs and their applications...
              </p>
              <Link
                href="/module/recurrent-neural-networks"
                className="inline-block mt-2 text-accent hover:text-primary"
              >
                Learn More
              </Link>
            </div>
            {/* Add more module previews here */}
            <div className="bg-card rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow">
              <h3 className="text-md font-semibold text-foreground mb-2">
                Transformers
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore the transformative power of Transformers...
              </p>
              <Link
                href="/module/transformers"
                className="inline-block mt-2 text-accent hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SNT NeuralNet Navigator</p>
        </div>
      </footer>
    </div>
  );
}
