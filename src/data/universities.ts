export interface University {
  name: string;
  city?: string;
  country: string;
  type: 'Government' | 'Private';
  programs: string[];
  tuitionPerYear: string;
  hostelPerYear: string;
  medium: string;
  imageUrl: string;
}

export interface CountryUniversities {
  country: string;
  focus: string;
  eligibility: string;
  admissions: string;
  coverImage: string;
  universities: University[];
}

export const universitiesByCountry: CountryUniversities[] = [
  {
    country: 'Russia',
    focus: 'Medical Colleges',
    eligibility: 'Foreign applicants need a high-school diploma with ≥50–75% in science (PCB) and meet Russian equivalents; Indian students require NEET qualification.',
    admissions: 'Direct application and document review, interview/MMI may be required. Indian students must present NEET scores.',
    coverImage: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1600&h=900&fit=crop',
    universities: [
      {
        name: 'Kursk State Medical University',
        country: 'Russia',
        type: 'Government',
        programs: ['MBBS (6 yrs, MD)'],
        tuitionPerYear: '≈$5,500',
        hostelPerYear: '≈$1,200',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop'
      },
      {
        name: 'Perm State Medical University',
        country: 'Russia',
        type: 'Government',
        programs: ['MBBS (5 yrs + intern)'],
        tuitionPerYear: '$5,500',
        hostelPerYear: '$300',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop'
      },
      {
        name: 'Omsk State Medical University',
        country: 'Russia',
        type: 'Government',
        programs: ['MBBS (6 yrs + intern)'],
        tuitionPerYear: '≈$3,300',
        hostelPerYear: '≈$120',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    country: 'Singapore',
    focus: 'Hotel Management Colleges',
    eligibility: 'Requirements vary by institution. Generally needs Singapore-Cambridge O-Level or equivalent, English competency (IELTS ~6.0)',
    admissions: 'Polytechnics use JAE process, private institutes direct admission with interviews',
    coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&h=900&fit=crop',
    universities: [
      {
        name: 'Temasek Polytechnic',
        city: 'Tampines',
        country: 'Singapore',
        type: 'Government',
        programs: ['Diploma in Hospitality & Tourism (3 yrs)'],
        tuitionPerYear: 'SGD 12,570',
        hostelPerYear: 'SGD 400-600/month (off-campus)',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&h=600&fit=crop'
      },
      {
        name: 'SHATEC School of Hospitality',
        city: 'City Hall',
        country: 'Singapore',
        type: 'Private',
        programs: ['Diploma in Hotel Management (2 yrs)'],
        tuitionPerYear: 'SGD 26,429',
        hostelPerYear: 'No campus housing',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
      },
      {
        name: 'MDIS',
        city: 'Tai Seng',
        country: 'Singapore',
        type: 'Private',
        programs: ['Diploma in Hospitality', 'Bachelor in Hospitality'],
        tuitionPerYear: 'SGD 8,502-14,388',
        hostelPerYear: 'SGD 894-1,374/month',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    country: 'Dubai',
    focus: 'Medical Colleges',
    eligibility: 'High school diploma with strong science (85% in PCB), MOE attestation required, NEET for Indian students',
    admissions: 'Selective entry with MMI interviews and placement exams',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=900&fit=crop',
    universities: [
      {
        name: 'Mohammed Bin Rashid University of Medicine and Health Sciences',
        city: 'Dubai',
        country: 'Dubai',
        type: 'Government',
        programs: ['MBBS (6 yrs)'],
        tuitionPerYear: 'AED 160,000',
        hostelPerYear: 'No campus housing',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=800&h=600&fit=crop'
      },
      {
        name: 'Dubai Medical College for Girls',
        city: 'Dubai',
        country: 'Dubai',
        type: 'Private',
        programs: ['MBBS (6 yrs)'],
        tuitionPerYear: 'AED 126,000',
        hostelPerYear: 'AED 12,000-18,000',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    country: 'Armenia',
    focus: 'Medical Colleges',
    eligibility: '12-year school completion with high marks in science, 60-75% in PCB for Indian students plus NEET',
    admissions: 'Application-based with possible entrance tests/interviews',
    coverImage: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&h=900&fit=crop',
    universities: [
      {
        name: 'Yerevan State Medical University',
        city: 'Yerevan',
        country: 'Armenia',
        type: 'Government',
        programs: ['Medicine MD (6 yrs)'],
        tuitionPerYear: '$6,500',
        hostelPerYear: '$900',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=600&fit=crop'
      },
      {
        name: 'Armenian Medical Institute',
        city: 'Yerevan',
        country: 'Armenia',
        type: 'Private',
        programs: ['MBBS (6 yrs)'],
        tuitionPerYear: '$4,500',
        hostelPerYear: '$800',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
      },
      {
        name: 'St. Tereza Medical University',
        city: 'Yerevan',
        country: 'Armenia',
        type: 'Private',
        programs: ['MBBS (6 yrs)'],
        tuitionPerYear: '$4,000',
        hostelPerYear: '$700',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    country: 'Mauritius',
    focus: 'Medical Colleges',
    eligibility: 'Requirements vary by institution. UoM requires A-levels with strong science, SSR requires 60% in PCB and NEET',
    admissions: 'Government universities via national criteria, private institutes direct application',
    coverImage: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&h=900&fit=crop',
    universities: [
      {
        name: 'University of Mauritius',
        city: 'Reduit',
        country: 'Mauritius',
        type: 'Government',
        programs: ['MBBS (5 yrs + intern)'],
        tuitionPerYear: 'Subsidized for locals',
        hostelPerYear: 'Available on campus',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop'
      },
      {
        name: 'SSR Medical College',
        city: 'Pamplemousses',
        country: 'Mauritius',
        type: 'Private',
        programs: ['MBBS (5 yrs + intern)'],
        tuitionPerYear: '$8,000',
        hostelPerYear: '$1,200',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    country: 'Kazakhstan',
    focus: 'Medical Colleges',
    eligibility: '50% aggregate in PCB at 12th grade, English proficiency, NEET for Indian students',
    admissions: 'Application-based (Jan/Feb for Sep intake), some require video/campus interview',
    coverImage: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1600&h=900&fit=crop',
    universities: [
      {
        name: 'Kazakh National Medical University',
        city: 'Almaty',
        country: 'Kazakhstan',
        type: 'Government',
        programs: ['MD (6 yrs)'],
        tuitionPerYear: '$5,500',
        hostelPerYear: '$500',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop'
      },
      {
        name: 'Semey State Medical University',
        city: 'Semey',
        country: 'Kazakhstan',
        type: 'Government',
        programs: ['MD (6 yrs)'],
        tuitionPerYear: '$3,800',
        hostelPerYear: '$1,000',
        medium: 'English',
        imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=800&h=600&fit=crop'
      }
    ]
  }
]; 