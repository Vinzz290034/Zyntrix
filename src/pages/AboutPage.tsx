import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zyntrix</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Your trusted partner for premium tech gadgets in the Philippines
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Zyntrix is an innovative online platform dedicated to offering high-quality computer hardware and accessories designed to enhance users' digital experiences. The name "Zyntrix" is a blend of the founder's name, Zyann, and the word "Matrix," symbolizing the interconnected and dynamic world of technology. This unique combination reflects the brand's focus on delivering personalized and cutting-edge tech solutions.
              </p>
              <p>
                The website features a clean and modern design that makes it easy for users to explore a variety of products, from keyboards and mice to monitors and laptops. Each item is carefully selected to balance performance, style, and reliability, catering to both casual users and tech enthusiasts. Clear navigation helps visitors quickly find the products that best suit their needs.
              </p>
              <p>
                Beyond just being a tech store, Zyntrix strives to build a connection with its community by offering products that empower productivity, creativity, and entertainment. The platform aims to create a seamless shopping experience, optimized for both desktop and mobile devices, with transparent product information and an intuitive layout.
              </p>
              <p>
                Ultimately, Zyntrix is more than a marketplace, it is a trusted destination for technology lovers who want reliable, stylish, and innovative products. By combining passion with innovation, Zyntrix is committed to helping users unlock their full potential in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">What We Stand For</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#6A0DAD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">100% Authentic</h3>
              <p className="text-gray-600">
                We guarantee that every product sold is genuine and sourced directly from authorized distributors. No fakes, no replicas.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing without compromising quality. We work directly with brands to offer you the best deals.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#6A0DAD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide dedicated support before and after your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">Why Shop With Us?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#6A0DAD] rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">🚚</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Reliable Shipping</h3>
                <p className="text-gray-600">
                  We ship nationwide with trusted courier partners. Most orders arrive within 3-7 business days.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">🔒</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payment</h3>
                <p className="text-gray-600">
                  Multiple payment options including credit cards, GCash, PayMaya, and bank transfers. All transactions are encrypted.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#6A0DAD] rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Warranty Protection</h3>
                <p className="text-gray-600">
                  All products come with manufacturer warranty. We also offer extended warranty options for peace of mind.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">💬</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our knowledgeable team is ready to help you choose the right products and answer any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#6A0DAD] to-[#1E90FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Setup?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Zyntrix for their tech needs
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-[#6A0DAD] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition shadow-2xl"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}
