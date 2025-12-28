import { User, GraduationCap, Briefcase, Heart, Clock } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  qualification: string;
  designation: string;
  experience: string;
  interests: string;
  hobbies: string;
  isPrincipal?: boolean;
}

export default function Team() {
  const principal: TeamMember = {
    id: 0,
    name: 'Principal Name',
    image: '/api/placeholder/400/400',
    qualification: 'M.Ed., B.Ed.',
    designation: 'Principal',
    experience: '20+ Years',
    interests: 'Educational Leadership, Curriculum Development',
    hobbies: 'Reading, Mentoring',
    isPrincipal: true,
  };

  const teachers: TeamMember[] = Array.from({ length: 29 }, (_, i) => ({
    id: i + 1,
    name: `Teacher ${i + 1}`,
    image: '/api/placeholder/400/400',
    qualification: 'B.Ed., M.A.',
    designation: 'Subject Teacher',
    experience: '5+ Years',
    interests: 'Teaching, Student Development',
    hobbies: 'Reading, Sports',
  }));

  const TeacherCard = ({ member, featured = false }: { member: TeamMember; featured?: boolean }) => (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/3' : 'w-full'} bg-gradient-to-br from-blue-100 to-blue-50 p-8 flex items-center justify-center`}>
          <div className="text-center">
            <div
              className={`${
                featured ? 'w-48 h-48' : 'w-32 h-32'
              } mx-auto rounded-full bg-white shadow-lg flex items-center justify-center mb-4 overflow-hidden`}
            >
              <User className="text-gray-400" size={featured ? 96 : 64} />
            </div>
            {featured && (
              <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
                Principal
              </div>
            )}
          </div>
        </div>
        <div className={`${featured ? 'md:w-2/3' : 'w-full'} p-6`}>
          <h3 className={`${featured ? 'text-3xl' : 'text-xl'} font-bold text-gray-900 mb-3`}>
            {member.name}
          </h3>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-gray-700">Qualification</p>
                <p className="text-gray-600">{member.qualification}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Briefcase className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-gray-700">Designation</p>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="text-orange-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-gray-700">Experience</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Heart className="text-red-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-gray-700">Interests</p>
                <p className="text-gray-600">{member.interests}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Heart className="text-purple-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-gray-700">Hobbies</p>
                <p className="text-gray-600">{member.hobbies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Meet our dedicated faculty members who are committed to nurturing young minds and
            building a brighter future
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visionary leadership guiding the institution towards excellence
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            <TeacherCard member={principal} featured />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Faculty</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced and passionate educators dedicated to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} member={teacher} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            We are always looking for passionate educators who share our vision of providing
            quality education and nurturing young minds. If you're dedicated, creative, and
            committed to making a difference in students' lives, we'd love to hear from you.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg">
            Contact Us for Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
