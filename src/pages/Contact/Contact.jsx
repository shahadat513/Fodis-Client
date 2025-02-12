
const Contact = () => {
    return (
      <div className=" py-12 bg-[#acb9c2] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-center mb-8">Get In Touch</h1>
          <p className="text-lg text-center mb-10 leading-8">
            Have questions or feedback? Reach out to us, and we’ll get back to you as soon as possible!
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Contact Info */}
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg flex-1">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-2">
                <strong>Email:</strong> support@fodis.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> (+880) 1956624479
              </p>
              <p>
                <strong>Address:</strong> Mirpur-10, Dhaka
              </p>
            </div>
            {/* Contact Form */}
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg flex-1 w-full">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8eef45] text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
