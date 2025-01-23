import React, { useState } from 'react';
import { BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate an API or form submission service like Formspree here
    // After successful submission, update the form status.
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact pt-16 ">
      <div className="container mx-auto px-4" data-aos="fade-up">
       
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:p-10">
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start border border-gray-900 rounded-md p-8">
            <div className="info lg:space-y-6 space-y-4">
              <div className="address text-center lg:text-left">
                <i className="bi bi-geo-alt text-3xl"></i>
                <h4 className="text-xl font-semibold text-left ">Location:</h4>
                <p className="lg:text-lg text-sm text-left">
                  Thakur College Of Engineering And Technology. <br />
                  A-Block, Thakur Educational Campus, <br />
                  Shyamnarayan Thakur Marg, Thakur Village, Kandivali(E). <br />
                  Mumbai - 400101.
                </p>
              </div>

              <div className="email text-left">
                <i className="bi bi-envelope text-3xl"></i>
                <h4 className="text-xl font-semibold">Email:</h4>
                <p>
                  <a href="mailto:acmtcet8@gmail.com" className="text-blue-500">
                    tcet.hackanova@gmail.com
                  </a>
                </p>
              </div>

              <div className="phone text-left">
                <i className="bi bi-phone text-3xl"></i>
                <h4 className="text-xl font-semibold">Call:</h4>
                <p>
                  <a href="https://wa.me/918850512993" className="text-blue-500">
                    Joint Technical: +91 88505 12993
                  </a>
                  ,{' '}
                  <a href="https://wa.me/917039554518" className="text-blue-500">
                    Joint Technical: +91 70395 54518
                  </a>
                </p>
              </div>
              <div className="gap-5 flex">
                <h1 className='text-xl font-semibold'>Socials</h1>
              <a href="https://www.instagram.com/tsdw_tcet?igsh=eXN1NDdyNjd5cG8z">
          <BsInstagram className="text-2xl text-white"  />
          </a>
          <a target="blank" href="https://www.youtube.com/@tcet_tsdw" >
          <BsYoutube className="text-2xl text-white" />
          
          </a>
          <a href="https://t.me/+T-xYOtvS4IwwY2U9">
          <BsTelegram className="text-2xl text-white"  />
        
          </a>
              </div>
              <div className="gap-5 flex justify-center">

          </div>
              <div className="map mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2403849990666!2d72.8720307!3d19.2063003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sbg!4v1630295655559!5m2!1sen!2sbg"
                  frameBorder="0"
                  style={{ border: '0', width: '100%', height: '290px' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 mt-8 lg:mt-0 border border-gray-800 rounded-md p-8">
            <form
              onSubmit={handleSubmit}
              className="php-email-form space-y-6"
              method="POST"
              action="mailto:core@tcet.acm.org"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="text-lg">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control w-full p-3 border border-gray-300 rounded-md"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-lg">Your Email</label>
                  <input
                    type="email"
                    className="form-control w-full p-3 border border-gray-300 rounded-md"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="text-lg">Team Name</label>
                <input
                  type="text"
                  className="form-control w-full p-3 border border-gray-300 rounded-md"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="text-lg">Queries</label>
                <textarea
                  className="form-control w-full p-3 border border-gray-300 rounded-md"
                  name="message"
                  rows="10"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {isSubmitted && (
                <div className="sent-message text-green-500 text-center">
                  Your message has been sent. Thank you!
                </div>
              )}

              <div className="text-center">
                <button type="submit" className="bg-purple-500 text-white py-3 px-8 rounded-full hover:bg-blue-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
