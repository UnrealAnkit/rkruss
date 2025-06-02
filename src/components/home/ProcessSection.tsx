import React from 'react';
import { ClipboardCheck, UserCheck, FileText, Award } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  color: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  step, 
  color,
  isLast = false 
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-white", 
          color
        )}>
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 bg-gray-200 grow mt-4"></div>
        )}
      </div>
      <div className="pt-3 pb-8">
        <span className="inline-block text-sm font-medium text-gray-500 mb-1">Step {step}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: 'Initial Consultation',
      description: 'We assess your profile, goals, and eligibility for various immigration or study abroad programs.',
      color: 'bg-primary-500'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Customized Strategy',
      description: 'Our experts develop a personalized plan based on your qualifications and objectives.',
      color: 'bg-secondary-500'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documentation & Filing',
      description: 'We help prepare and review all required documents to ensure a complete and accurate application.',
      color: 'bg-accent-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Application Success',
      description: 'We support you through the approval process and help prepare for your move abroad.',
      color: 'bg-success-500'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="mb-6">How We Help You Succeed</h2>
            <p className="text-lg text-gray-600 mb-8">
              We've simplified the complex immigration and study abroad process into clear, manageable steps. Our experienced consultants guide you through each stage to ensure a smooth journey.
            </p>
            
            <div className="hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
                <p className="text-gray-800 italic">
                  "Global Migration Experts made the entire visa process seamless. Their attention to detail and personalized guidance helped us achieve our dream of moving to Canada."
                </p>
                <div className="mt-4 flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Successfully immigrated to Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  step={index + 1}
                  color={step.color}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;