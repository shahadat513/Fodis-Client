const About = () => {
    return (
      <div className="bg-[#acb9c2] py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                Who We Are
              </h1>
              <p className="text-lg text-gray-600 leading-8 mb-6">
              Welcome to <strong>Fodis</strong>, where culinary art meets passion! We are your destination for an
              unforgettable dining experience. At Fodis, we bring flavors from around the globe to your plate, crafted
              with love and care by our expert chefs.
            </p>
            <p className="text-lg text-gray-600 leading-8">
              Our philosophy is rooted in fresh, locally sourced ingredients and an unwavering commitment to quality.
              From delightful appetizers to indulgent desserts, every dish at Fodis is a masterpiece waiting to be
              savored.
            </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://i.ibb.co.com/56y2YhZ/pexels-minan1398-1482803.jpg"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Core Values Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly strive to bring cutting-edge solutions to our customers and stay ahead of the curve.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  Trust and transparency are at the core of everything we do, ensuring strong relationships with our
                  clients and partners.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Community</h3>
                <p className="text-gray-600">
                  We believe in giving back to the community and making a lasting, positive impact on people`s lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  
