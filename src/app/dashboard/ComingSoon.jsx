import React from 'react';
import "../globals.css";

const services = [
  { name: 'Jobs', icon: '📁' },
  { name: 'IT Trainings & Courses', icon: '💻' },
  { name: 'Events', icon: '📅' },
  { name: 'Legal Consultancy', icon: '👨‍⚖️' },
  { name: 'Coupons', icon: '🎟️' },
  { name: 'I Am Here', icon: '📍' }
];

const ComingSoon = () => {
  return (
    <>
      <style jsx>{`
        @keyframes jelly {
          0% {
            transform: scale(1, 1);
          }
          25% {
            transform: scale(0.9, 1.1);
          }
          50% {
            transform: scale(1.1, 0.9);
          }
          75% {
            transform: scale(0.95, 1.05);
          }
          100% {
            transform: scale(1, 1);
          }
        }

        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .icon-hover-rotate:hover .icon {
          animation: rotate360 0.5s linear forwards, jelly 0.5s ease;
        }
          
      `}</style>
      <div className="bg-red-700 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl mb-4 cssanimation leMagnify sequence" >We have more services <span className="font-bold">COMING SOON</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center xl:w-28 xl:p-3 icon-hover-rotate hover:bg-[rgba(0,0,0,0.2)] rounded-lg">
                <div className="bg-white text-red-700 w-16 h-16 flex items-center justify-center rounded-full mb-2 text-2xl ">
                  <div className="icon text-3xl bg-white p-2 xl:w-14 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <p className="text-sm">{service.name} <span className="ml-1"></span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;