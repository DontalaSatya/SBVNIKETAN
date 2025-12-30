import { BookOpen, Calculator, Globe, FlaskConical, Languages, Palette, Music, Trophy, Heart, Lightbulb, Users, Target } from 'lucide-react';

export default function Curriculum() {
  return (
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
  );
}
