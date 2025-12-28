import { Bus, Home, Users, BookOpen, Heart, Trophy, Shield, Lightbulb, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-teal-50 max-w-3xl">
            Begin your child's journey towards excellence. Admissions open for academic year 2025-26
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Enroll Your Child?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Give your child the best foundation for a successful future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Comprehensive Curriculum:</span> From Kindergarten to 10th Standard,
                    aligned with state board standards
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Experienced Faculty:</span> Qualified and dedicated teachers with
                    proven track records
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Small Class Sizes:</span> Personalized attention ensuring every
                    child's needs are met
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Modern Teaching Methods:</span> Interactive learning with smart
                    boards and digital resources
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Holistic Development</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Balance of Skills:</span> Equal emphasis on academic excellence
                    and interpersonal skills development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Character Building:</span> Focus on values, ethics, and moral
                    education
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Life Skills Training:</span> Communication, leadership, and
                    critical thinking development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <span className="font-semibold">Emotional Intelligence:</span> Programs to develop self-awareness
                    and social skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">School Amenities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class facilities designed for optimal learning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Transportation</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Safe and reliable bus service covering multiple routes across Anandapuram and
                surrounding areas with trained drivers and attendants
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Play Arena</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Spacious outdoor playground with modern play equipment, green fields for sports,
                and dedicated areas for different age groups
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Library</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Well-stocked library with diverse collection of books, reference materials, and
                reading spaces to encourage love for reading
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Smart Classrooms</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Modern classrooms equipped with smart boards, projectors, and digital learning
                tools for interactive education
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Safety & Security</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                24/7 security staff, CCTV surveillance, controlled entry/exit, and comprehensive
                safety protocols for student protection
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Sports Facilities</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Dedicated areas for cricket, football, badminton, athletics, and other sports
                with proper equipment and coaching
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Medical Care</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                First-aid facilities, regular health checkups, and immediate medical attention
                availability for student well-being
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Activity Rooms</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Dedicated spaces for art, music, dance, and other co-curricular activities with
                required equipment and materials
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple and transparent admission procedure
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact & Inquiry</h3>
                <p className="text-gray-700 leading-relaxed">
                  Call us or visit the school to learn more about our programs. Our staff will be
                  happy to answer all your questions and provide a campus tour.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-green-50 p-6 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Form</h3>
                <p className="text-gray-700 leading-relaxed">
                  Collect and fill out the admission application form with all required details
                  and attach necessary documents including birth certificate and previous school records.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interaction Session</h3>
                <p className="text-gray-700 leading-relaxed">
                  Parents and students will have an interaction with the principal and teachers to
                  understand the child's needs and discuss expectations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-teal-50 p-6 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Admission Confirmation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete the admission formalities, pay the fees, and receive confirmation.
                  Welcome to Sri Bharathi Vidya Nikethan family!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Give your child the gift of quality education in a nurturing environment. Contact us
            today to begin the admission process or schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
              <Phone className="text-white" size={24} />
              <div className="text-left">
                <p className="text-sm text-blue-100">Call Us</p>
                <p className="font-semibold">8919990688, 9052104849</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
              <Mail className="text-white" size={24} />
              <div className="text-left">
                <p className="text-sm text-blue-100">Or</p>
                <p className="font-semibold">Visit Contact Page</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
