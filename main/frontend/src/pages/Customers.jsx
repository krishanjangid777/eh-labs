import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "President, Tech Society",
    feedback:
      "EH-Labs helped us reach thousands of students for our annual hackathon. The engagement and response were incredible!",
    image: "/user.png",
  },
  {
    name: "Priya Verma",
    role: "Freelancer & Mentor",
    feedback:
      "The freelancing opportunities through EH-Labs have been a game-changer. I connected with amazing clients effortlessly!",
    image: "/user.png",
  },
  {
    name: "Rahul Mehta",
    role: "HR Manager, XYZ Corp",
    feedback:
      "Finding fresh talent for internships was seamless with EH-Labs. Highly recommend for companies looking to recruit!",
    image: "/user.png",
  },
];

const brands = [
  "/images/google.png",
  "/images/microsoft.png",
  "/images/aws.png",
  "/images/tcs.png",
];

const Customers = () => {
  return (
    <div className="max-w-7xl bg-slate-800 text-white mx-auto px-6 py-12">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Empowering Communities, Students & Businesses Together!
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto">
        EH-Labs connects students, college societies, and businesses, making event management and community building effortless.
      </p>

      {/* Testimonials Section */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-slate-700 shadow-md rounded-lg p-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-4">{testimonial.name}</h3>
            <p className="text-sm text-gray-400 text-center">{testimonial.role}</p>
            <p className="text-gray-300 text-center mt-2">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>

      {/* Partners / Brands Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6">Our Collaborations & Partners</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt="Brand Logo"
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
