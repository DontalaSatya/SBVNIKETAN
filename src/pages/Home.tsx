import { Phone, MapPin, Award, Users, BookOpen, Sparkles } from 'lucide-react';
import {  Calculator, Globe, FlaskConical, Languages, Palette, Music, Trophy, Heart, Lightbulb, Target } from 'lucide-react';



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/whatsapp_image_2025-12-27_at_10.18.31_pm.png"
            alt="School Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sri Bharathi Vidya Nikethan E.M School
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light italic text-blue-100">
              Nurturing Next Generation with Purpose Driven Learning
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-white">
              <a href="tel:+919052104849">Contact Us</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/sri_bharathi_vidya_nikethan.png"
                alt="School Campus"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our School</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Sri Bharathi Vidya Nikethan E.M School, we believe in nurturing every child's
                potential through a perfect blend of academic excellence and character development.
                Our vibrant campus provides a safe, engaging environment where children learn,
                grow, and thrive.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With dedicated faculty, modern facilities, and a curriculum designed to balance
                academic rigor with co-curricular activities, we prepare students not just for
                exams, but for life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Education</h3>
                    <p className="text-sm text-gray-600">KG to 10th Standard</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Faculty</h3>
                    <p className="text-sm text-gray-600">Dedicated Teachers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Holistic Development</h3>
                    <p className="text-sm text-gray-600">Mind, Body & Spirit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Modern Facilities</h3>
                    <p className="text-sm text-gray-600">State-of-the-art Campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Message from Our Chairman</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/3 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-4">
                  <img
                    src="/chairman.png"
                    alt="Chairman"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="border-l-4 border-white pl-4">
                  <p className="font-semibold text-xl">Dontala Ramarao</p>
                  <p className="text-lg mb-1">Chairman & Founder</p>
                  <p className="text-blue-100">Sri Bharathi Vidya Nikethan E.M School</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed mb-6">
                "Education is not just about acquiring knowledge; it's about shaping character,
                building confidence, and preparing our children for the challenges of tomorrow.
                At Sri Bharathi Vidya Nikethan, we are committed to providing an environment
                where every child can discover their unique talents and develop into responsible,
                compassionate citizens."
              </p>
              <p className="text-lg leading-relaxed mb-6">
                "Our dedicated team of educators works tirelessly to ensure that each student
                receives personalized attention and guidance. We believe in the power of
                purpose-driven learning, where education becomes a journey of self-discovery
                and growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a unique educational experience that prepares students for success in
              academics and life
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive curriculum designed to build strong foundations in all subjects,
                ensuring students excel in their academic pursuits and competitive examinations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Character Building</h3>
              <p className="text-gray-600 leading-relaxed">
                We emphasize moral values, discipline, and life skills that shape students into
                responsible citizens with strong ethical foundations and leadership qualities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Co-Curricular Activities</h3>
              <p className="text-gray-600 leading-relaxed">
                Sports, arts, cultural programs, and various activities ensure holistic development,
                allowing students to discover and nurture their unique talents and interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-700 mb-2">Phone Numbers:</p>
                  <p className="text-lg font-semibold text-blue-600"><a href="tel:+919052104849">9052104849</a></p>
                  <p className="text-lg font-semibold text-blue-600"><a href="tel:+918919984800">8919984800</a></p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beside Shivalayam, Anandapuram Village,<br />
                    Anandapuram Mandal,<br />
                    Visakhapatnam District, 530052
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );



    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Curriculum</h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            A comprehensive educational program that balances academic excellence with holistic development
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum from Kindergarten to 10th Standard aligned with educational standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Languages className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Languages</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                English, Telugu, and Hindi language instruction with focus on reading, writing,
                speaking, and comprehension skills.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Grammar and vocabulary development</li>
                <li>• Literature appreciation</li>
                <li>• Communication skills</li>
                <li>• Creative writing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Calculator className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mathematics</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Comprehensive mathematics program building strong foundations in numerical and
                analytical skills.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Number systems and operations</li>
                <li>• Algebra and geometry</li>
                <li>• Problem-solving techniques</li>
                <li>• Mental math and reasoning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <FlaskConical className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sciences</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Physics, Chemistry, and Biology with hands-on experiments and practical learning
                approach.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Concept-based learning</li>
                <li>• Laboratory experiments</li>
                <li>• Scientific method and inquiry</li>
                <li>• Environmental science</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Social Studies</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                History, Geography, Civics, and Economics to understand society, culture, and
                the world around us.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Indian history and heritage</li>
                <li>• World geography</li>
                <li>• Democratic values and civics</li>
                <li>• Economic understanding</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Computer Science</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Introduction to computers, basic programming, and digital literacy for the
                modern age.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Computer fundamentals</li>
                <li>• Coding and programming basics</li>
                <li>• Digital citizenship</li>
                <li>• Internet and applications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Moral Science</h3>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Value education focusing on ethics, character building, and developing good
                human qualities.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Ethical values and principles</li>
                <li>• Character development</li>
                <li>• Social responsibility</li>
                <li>• Emotional intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Non-Academic Activities</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Developing well-rounded personalities through diverse co-curricular programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Palette className="text-yellow-300" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Arts & Crafts</h3>
              </div>
              <p className="text-blue-50 leading-relaxed mb-4">
                Creative expression through various art forms helps develop imagination, fine motor
                skills, and aesthetic appreciation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Drawing & Painting</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Clay Modeling</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Craft Work</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Handwriting</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Music className="text-yellow-300" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Music & Dance</h3>
              </div>
              <p className="text-blue-50 leading-relaxed mb-4">
                Musical and dance training enhances rhythm, coordination, cultural awareness,
                and self-expression.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Vocal Music</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Classical Dance</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Folk Dance</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Instrumental Music</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Trophy className="text-yellow-300" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Physical Education</h3>
              </div>
              <p className="text-blue-50 leading-relaxed mb-4">
                Sports and physical activities promote fitness, teamwork, discipline, and healthy
                lifestyle habits.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Cricket</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Volleyball</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Athletics</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Yoga & Fitness</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="text-yellow-300" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Life Skills</h3>
              </div>
              <p className="text-blue-50 leading-relaxed mb-4">
                Essential skills for personal development, social interaction, and future success
                in life and career.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Communication</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Leadership</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Problem Solving</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold">Public Speaking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Educational Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-driven learning methodology that ensures comprehensive development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Concept-Based Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Focus on deep understanding of concepts rather than rote memorization, ensuring
                students grasp fundamentals and can apply knowledge effectively.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-green-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Teaching</h3>
              <p className="text-gray-600 leading-relaxed">
                Engaging teaching methods with visual aids, practical demonstrations, and student
                participation to make learning enjoyable and effective.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-orange-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Holistic Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Balanced focus on academics, physical fitness, creative arts, and character building
                to develop complete personalities ready for future challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  
}
