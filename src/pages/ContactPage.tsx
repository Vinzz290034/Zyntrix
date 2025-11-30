import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Show success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-2xl">✓</span>
        <div>
          <p class="font-bold">Message Sent!</p>
          <p class="text-sm">We'll get back to you within 24 hours.</p>
        </div>
      </div>
    `;
    document.body.appendChild(notification);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Remove notification after 4 seconds
    setTimeout(() => notification.remove(), 4000);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Have questions? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition"
                    placeholder="janedoe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition"
                    placeholder="+63 917 123 4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a subject...</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="returns-refunds">Returns & Refunds</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A0DAD] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6A0DAD] to-[#1E90FF] text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transform transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6A0DAD] rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-white">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      91 Video Store, Sixth Street <br />
                      New Eridu<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-white">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: zyntriXx@gmail.com<br />
                      Sales: zyntrix.sales@gmail.com<br />
                      Technical Support: zyntrix.support@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6A0DAD] rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-white">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      Landline: (02) 8123-4567<br />
                      Mobile: +63 917 123 4567<br />
                      <span className="text-sm text-gray-500">Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t mt-2">
                    <span className="font-semibold">Public Holidays:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
                    <span className="text-white text-xl">f</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
                    <span className="text-white text-xl">𝕏</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
                    <span className="text-white text-xl">IG</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
                    <span className="text-white text-xl">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800">What are your shipping rates?</summary>
              <p className="mt-4 text-gray-600">
                We offer free shipping for orders over ₱5,000 within Sixth Street. For provincial areas, shipping fees vary based on location and weight. Standard rates start at ₱150.
              </p>
            </details>
            
            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800">Do you accept returns or exchanges?</summary>
              <p className="mt-4 text-gray-600">
                Yes, we accept returns and exchanges within 7 days of delivery for unopened items in original packaging. Defective items can be returned within the warranty period.
              </p>
            </details>
            
            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800">What payment methods do you accept?</summary>
              <p className="mt-4 text-gray-600">
                We accept credit/debit cards (Visa, Mastercard), GCash, PayMaya, bank transfers, and cash on delivery (COD) for select areas.
              </p>
            </details>
            
            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-800">How long does delivery take?</summary>
              <p className="mt-4 text-gray-600">
                New Eridu deliveries typically arrive within 1-3 business days. Provincial deliveries take 3-7 business days depending on the location.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
