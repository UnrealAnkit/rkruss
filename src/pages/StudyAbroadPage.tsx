import React from 'react';
import UniversityList from '../components/universities/UniversityList';

const StudyAbroadPage: React.FC = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center py-24 bg-primary-50">Study Abroad Programs</h1>
      <div className="container-custom py-12">
        <UniversityList />
      </div>
    </div>
  );
};

export default StudyAbroadPage;