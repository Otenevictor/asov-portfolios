import Cert1 from '../assets/cert1.png';
import Cert2 from '../assets/cert2.png';
import Cert3 from '../assets/cert3.png';
const certifications = [
    {
         title: 'Frontend Web Development',
         issuer: 'Altschool Africa',
         date: 'April 2023',
         image: Cert1,
         description: 'Comprehensive course covering modern frontend technologies including React, Vue, JavaScript, and responsive design principles.'
       },
       {
         title: 'Data Processing',
         issuer: 'Dominion Computer School',
         date: 'December 2014',
         image: Cert2,
         description: 'In-depth course on Micro-soft Office suite, Corel-Draw Graphics .'
       },
       {
         title: 'Engineering',
         issuer: 'Dominion Computer School',
         date: 'December 2015',
         image: Cert3,
         description: 'Advanced Software Installation and Hard-ware installation patterns.'
       }
  ];
  
  const Certifications = () => {
    return (
      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img src={cert.image} alt={cert.title} className="w-30 h-20 mb-4" />
                <h3 className="text-xl text-blue-400 font-semibold">{cert.title}</h3>
                <h6 className="text-xl text-blue-400 font-semibold">{cert.issuer}</h6>
                <p className="text-gray-800text-sm text-center">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;
  