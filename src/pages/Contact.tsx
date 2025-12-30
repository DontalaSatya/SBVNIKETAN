import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    studentClass: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        studentClass: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Have questions? We're here to help. Reach out to us for admissions, inquiries, or any
            information about our school.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Numbers</h3>
                    <p className="text-gray-700 mb-1">
                      <a href="tel:8919990688" className="hover:text-blue-600 transition-colors">
                        8919990688
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a href="tel:9052104849" className="hover:text-blue-600 transition-colors">
                        9052104849
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-green-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Our Campus</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Beside Shivalayam,<br />
                      Anandapuram Village,<br />
                      Anandapuram Mandal,<br />
                      Visakhapatnam District, 530052
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Campus tours available by appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:30 AM - 4:30 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                    <p className="text-sm text-gray-600 mt-2">Appointments recommended for admissions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-purple-50 p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-700">For detailed inquiries, use the form or call us directly</p>
                    <p className="text-sm text-gray-600 mt-2">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you soon</p>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                    <p className="font-semibold">Thank you for your inquiry!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="10-digit number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="studentClass" className="block text-sm font-semibold text-gray-700 mb-2">
                        Class/Grade
                      </label>
                      <select
                        id="studentClass"
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Class</option>
                        <option value="KG">Kindergarten</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                        <option value="4">Class 4</option>
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="campus">Campus Visit</option>
                        <option value="curriculum">Curriculum Information</option>
                        <option value="transport">Transportation</option>
                        <option value="fees">Fee Structure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
      <p className="text-gray-600">Located in Anandapuram Village, Visakhapatnam District</p>
    </div>
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <a 
        href="https://maps.app.goo.gl/4n5U9AZjfeUiyZi58"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative" style={{ height: '450px' }}>
          {/* Embedded Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3796.5843046982814!2d83.36631899999999!3d17.904880999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU0JzE3LjYiTiA4M8KwMjEnNTguOCJF!5e0!3m2!1sen!2sin!4v1767082474522!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/20 transition-colors">
            <div className="text-center p-8 text-White">
              <MapPin className="mx-auto mb-4" size={48} />
              <p className="text-lg font-semibold mb-2">
                Sri Bharathi Vidya Nikethan E.M School
              </p>
              <p className="text-sm">
                Beside Shivalayam, Anandapuram Village,<br />
                Anandapuram Mandal, Visakhapatnam District, 530052
              </p>
              
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
