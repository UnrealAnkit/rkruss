import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
      <div className={cn("h-2", color)}></div>
      <div className="p-8">
        <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors", 
          color.replace('bg-', 'bg-opacity-10 text-').replace('-500', '-600')
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Immigration Consulting',
      description: 'Comprehensive immigration services for permanent residency, citizenship, and work permits tailored to your specific needs.',
      icon: <Users className="w-7 h-7" />,
      link: '/immigration',
      color: 'bg-primary-500'
    },
    {
      title: 'Study Abroad Programs',
      description: 'Expert guidance for international education opportunities, university applications, and student visa processing.',
      icon: <BookOpen className="w-7 h-7" />,
      link: '/study-abroad',
      color: 'bg-secondary-500'
    },
    {
      title: 'Visa Solutions',
      description: 'Specialized visa services for tourists, business travelers, and families with high approval rates and quick processing.',
      icon: <Briefcase className="w-7 h-7" />,
      link: '/visa-solutions',
      color: 'bg-accent-500'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Expert Services</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive immigration and education consulting services to help you achieve your international goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;