import React from 'react';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-deep-blue text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to InnovateTech</h1>
            <p className="text-xl mb-8">Revolutionizing the future with cutting-edge technology</p>
            <button className="bg-light-blue text-deep-blue font-bold py-2 px-4 rounded-full hover:bg-white transition duration-300">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
                <p>Harness the power of artificial intelligence to transform your business.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Cloud Computing</h3>
                <p>Scale your operations with our robust cloud infrastructure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
                <p>Protect your digital assets with our advanced security measures.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 InnovateTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;