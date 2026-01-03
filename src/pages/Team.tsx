import { User, GraduationCap, Briefcase, Heart, Clock, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  qualification: string;
  designation: string;
  Discipline: string;
  Contact: string;
  
  isPrincipal?: boolean;
}


export default function Team() {
  const principal: TeamMember = {
    id: 0,
    name: 'Y Krishna Sir',
    image: '/faculty16.jpeg',
    qualification: 'M.Sc. B.Ed. B.P.Ed',
    designation: 'Principal',
    Discipline: 'Mathematics',
    Contact: '9182376942',
    
      isPrincipal: true,
  };
  
  const teachers: TeamMember = {
    id: 0,
    name: 'P Ramana Sir',
    image: '/faculty2.jpeg',
    qualification: 'M.Sc. B.Ed',
    designation: 'Administrative Officer',
    Discipline: 'English',
    Contact: '9440332293',
      isPrincipal: true,
    
  };
  const teachers1: TeamMember = {
    id: 0,
    name: 'K Shankar Sir',
    image: '/faculty3.jpeg',
    qualification: 'M.A (Eng). B.Ed. B.P.Ed. B.L.i.Sc',
    designation: 'High School Faculty',
    Discipline: 'Social Studies',
    Contact: 'xxx',
   
  };
  const teachers2: TeamMember = {
    id: 0,
    name: 'K Rambabu Sir',
    image: '/faculty4.jpeg',
    qualification: 'B.Sc. B.Ed',
    designation: 'High School Faculty',
    Discipline: 'Biology',
    Contact: 'xxx',
   
  };
  const teachers3: TeamMember = {
    id: 0,
    name: 'I Raja Babu Sir',
    image: '/faculty5.jpeg',
    qualification: 'B.Sc. B.Ed',
    designation: 'High School Faculty',
    Discipline: 'Physics & English',
    Contact: 'xxx',
   
  };
  const teachers4: TeamMember = {
    id: 0,
    name: 'M Vamsi Sir',
    image: '/faculty6.jpeg',
    qualification: 'B.com. D.Ed.',
    designation: 'Upper Primary School Faculty',
    Discipline: 'English',
    Contact: 'xxx',
  };
  const teachers5: TeamMember = {
    id: 0,
    name: 'B Dileep Kumar Sir',
    image: '/faculty7.jpeg',
    qualification: 'Trainee in sports & physical education',
    designation: 'P.E.T',
    Discipline: 'Physical Education',
    Contact: 'xxx',
  };
  const teachers6: TeamMember = {
    id: 0,
    name: "E Uma Maheswari Ma'am",
    image: '/faculty8.jpeg',
    qualification: 'MA (Hindi) & B.Ed.',
    designation: 'High School Faculty',
    Discipline: 'Hindi',
    Contact: 'xxx',
   
  };
  const teachers7: TeamMember = {
    id: 0,
    name: "P Sravani Ma'am",
    image: '/faculty9.jpeg',
    qualification: 'BA B.Ed.',
    designation: 'Upper Primary School Faculty',
    Discipline: 'Hindi & Social Studies',
    Contact: 'xxx',
   
  };
  const teachers8: TeamMember = {
    id: 0,
    name: "P Sirisha Ma'am",
    image: '/faculty10.jpeg',
    qualification: 'D.El.Ed.',
    designation: 'Primary & Upper Primary School Faculty',
    Discipline: 'Environmental Studies, Mathematics & Science',
    Contact: 'xxx',
   
  };
  const teachers9: TeamMember = {
    id: 0,
    name: "R Lalitha Ma'am",
    image: '/faculty11.jpeg',
    qualification: 'B.Sc. B.Ed',
    designation: 'Primary & Upper Primary School Faculty',
    Discipline: 'Mathematics & Science',
    Contact: 'xxx',
  };
  const teachers10: TeamMember = {
    id: 0,
    name: "K Anuradha Ma'am",
    image: '/faculty12.jpeg',
    qualification: 'MSc.',
    designation: 'Primary & Upper Primary School Faculty',
    Discipline: 'Environmental Studies & Mathematics',
    Contact: 'xxx',
  };
  const teachers11: TeamMember = {
    id: 0,
    name: "B Pydiraju Ma'am",
    image: '/faculty13.jpeg',
    qualification: 'MA (Telugu) & B.Ed.',
    designation: 'High School Faculty',
    Discipline: 'Telugu',
    Contact: 'xxx',
   
  };
  const teachers12: TeamMember = {
    id: 0,
    name: "K Rama Lakshmi Ma'am",
    image: '/faculty14.jpeg',
    qualification: 'BSc',
    designation: 'Pre Primary School Faculty',
    Discipline: 'All Subjects',
    Contact: 'xxx',
   
  };
  const teachers13: TeamMember = {
    id: 0,
    name: "G Akhila Ma'am",
    image: '/faculty15-copy.jpg',
    qualification: 'B.Sc.',
    designation: 'Primary & Upper Primary School Faculty',
    Discipline: 'Mathematics & English',
    Contact: 'xxx',
   
  };

  const teachers15: TeamMember = {
    id: 0,
    name: "P Renuka Ma'am",
    image: '/faculty17.jpeg',
    qualification: 'D.El.Ed.',
    designation: 'Primary & Upper Primary School Faculty',
    Discipline: 'All Subjects',
    Contact: 'xxx',
   
  };
  const teachers16: TeamMember = {
    id: 0,
    name: "B Bharathi Ma'am",
    image: '/faculty18.jpeg',
    qualification: 'B.El.Ed.',
    designation: 'Primary School Faculty',
    Discipline: 'English & Mathematics',
    Contact: 'xxx',
   
  };
  const teachers17: TeamMember = {
    id: 0,
    name: "B Jhansi Lakshmi Bai Ma'am",
    image: '/Faculty19.jpeg',
    qualification: 'B.Com. Computers',
    designation: 'Accountant & Computer Operator',
    Discipline: 'IT & Accounting',
    Contact: 'xxx',
   
  };
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
                featured ? 'w-[220px] h-[250px]' : 'w-[220px] h-[270px]'
              } mx-auto rounded full bg-white shadow-lg mb-4 overflow-hidden relative`}
            >
              {member.image && member.image !== '/api/placeholder/400/400' ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="text-gray-400" size={featured ? 96 : 64} />
                </div>
              )}
            </div>
            {featured && (
              <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
                {member.designation}
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
                <p className="text-sm font-semibold text-gray-700">Area of Expertise</p>
                <p className="text-gray-600">{member.Discipline}</p>
              </div>
             </div>
             { featured && (<div className="flex items-start space-x-3">
              <Phone className="text-orange-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-gray-700">Contact</p>
                <p className="text-gray-600">{member.Contact}</p>
              </div>
             </div>
            )}
            

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
            Meet our dedicated faculty & non academic staff, who are committed to our shared vision of nurturing young minds and
            building a brighter future
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            
          </div>

          <div className="grid gap-8 mb-16">
            
            <TeacherCard member={teachers} featured />
            <TeacherCard member={principal} featured />
          </div>

         

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
              
              <TeacherCard  member={teachers1} />
              <TeacherCard  member={teachers2} />
              <TeacherCard  member={teachers3} />
              
              
              <TeacherCard  member={teachers6} />
              <TeacherCard  member={teachers11} />
             
              <TeacherCard  member={teachers7} />
              <TeacherCard  member={teachers4} />
              <TeacherCard  member={teachers17} />
              <TeacherCard  member={teachers5} />
              <TeacherCard  member={teachers8} />
              <TeacherCard  member={teachers9} />
              <TeacherCard  member={teachers10} />
              
              
              <TeacherCard  member={teachers13} />
              
              <TeacherCard  member={teachers15} />
              <TeacherCard  member={teachers16} />
              <TeacherCard  member={teachers12} />

            
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
