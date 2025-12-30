import { Calendar, Clock, Palette, Music, Trophy, Heart, Globe, BookOpen } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

export default function Campus() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Life</h1>
          <p className="text-xl text-green-50 max-w-3xl">
            Experience a vibrant learning environment where every day brings new opportunities
            for growth, discovery, and joy.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Beautiful Campus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A modern facility designed to inspire learning and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <ImageCarousel
                images={[
                  
                  '/sri_bharathi_vidya_nikethan.png',
                  '/sciencelab.png',
                  '/library.png',
                ]}
                alt="School Campus"
                className="w-full h-96"
                autoScrollInterval={5000}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Infrastructure</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our three-story campus features spacious, well-ventilated classrooms with ample
                  natural light. The building is designed with child safety and comfort in mind,
                  featuring wide corridors and age-appropriate facilities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Spacious, well-ventilated classrooms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Smart boards and modern teaching aids</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Well-stocked library and laboratory</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Safe and secure campus environment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Facilities</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our expansive green playground provides ample space for physical activities,
                  sports, and outdoor learning. The colorful murals and child-friendly design
                  create an engaging atmosphere that makes learning fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Daily Activities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured day filled with learning, activities, and growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Morning Assembly</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Daily morning prayers, news updates, and motivational talks to start the day positively
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Academic Classes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Interactive lessons across all subjects with focus on concept clarity and practical application
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sports & Games</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Physical education, sports training, and outdoor games for fitness and teamwork
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Palette className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Creative Arts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Drawing, painting, craft work, and other creative activities to nurture artistic talents
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Special Events & Celebrations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating memorable experiences through cultural and educational events
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl">
            
              <ImageCarousel
                images={[
                  
                  '/Grouppicture.png',
                  
                  
                  
                  '/video4.mp4',
                  '/video5.mp4',
                  '/video3.mp4',
                  
                  
              
 
                  
                ]}
                
                alt="School Events"
                className="w-full h-96"
                autoScrollInterval={3500}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="text-orange-600" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Cultural Celebrations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We celebrate all major national festivals, cultural events, and important days
                  to instill cultural awareness and patriotic values in our students.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Independence Day & Republic Day celebrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Traditional festival celebrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Annual day and cultural programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>Sports day and competitions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="text-green-600" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Environmental Activities</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Regular tree plantation drives, cleanliness campaigns, and environmental awareness
                  programs teach students the importance of protecting nature and our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Co-Curricular Activities</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Beyond academics, we offer diverse activities to develop well-rounded personalities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Music className="text-yellow-300" size={32} />
                <h3 className="text-xl font-bold">Music & Dance</h3>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Training in vocal music, instrumental music, and various dance forms to nurture
                artistic expression
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="text-yellow-300" size={32} />
                <h3 className="text-xl font-bold">Sports</h3>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Cricket, football, badminton, athletics, and other sports with professional coaching
                and regular practice
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="text-yellow-300" size={32} />
                <h3 className="text-xl font-bold">Life Skills</h3>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Communication skills, leadership development, and personality enhancement programs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
