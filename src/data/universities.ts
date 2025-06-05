export interface University {
  name: string;
  city?: string;
  country: string;
  type: 'Government' | 'Private';
  programs: string[];
  tuitionPerYear: string;
  hostelPerYear: string;
  medium: string;
}

export interface CountryUniversities {
  country: string;
  focus: string;
  eligibility: string;
  admissions: string;
  universities: University[];
}

export const universitiesByCountry: CountryUniversities[] = [
  {
    country: 'Russia',
    focus: 'Medical Colleges',
    eligibility: 'Foreign applicants need a high-school diploma with ≥50–75% in science (PCB) and meet Russian equivalents; Indian students require NEET qualification.',
    admissions: 'Direct application and document review, interview/MMI may be required. Indian students must present NEET scores.',
    universities: [
      {
        name: 'Kursk State Medical University',
        country: 'Russia',
        type: 'Government',
        programs: ['MBBS (6 yrs, MD)'],
        tuitionPerYear: '≈$5,500',
        hostelPerYear: '≈$1,200',
        medium: 'English'
      },
      {
        name: 'Perm State Medical University',
        country: 'Russia',
        type: 'Government',
        programs: ['MBBS (5 yrs + intern)'],
        tuitionPerYear: '$5,500',
        hostelPerYear: '$300',
        medium: 'English'
      },
      {
        name: 'Omsk State Medical University',
        country: 'Russia',
        type: 'Government',
        programs: ['MBBS (6 yrs + intern)'],
        tuitionPerYear: '≈$3,300',
        hostelPerYear: '≈$120',
        medium: 'English'
      }
    ]
  },
  {
    country: 'Singapore',
    focus: 'Hotel Management Colleges',
    eligibility: 'Requirements vary by institution. Generally needs Singapore-Cambridge O-Level or equivalent, English competency (IELTS ~6.0)',
    admissions: 'Polytechnics use JAE process, private institutes direct admission with interviews',
    universities: [
      {
        name: 'Temasek Polytechnic',
        city: 'Tampines',
        country: 'Singapore',
        type: 'Government',
        programs: ['Diploma in Hospitality & Tourism (3 yrs)'],
        tuitionPerYear: 'SGD 12,570',
        hostelPerYear: 'SGD 400-600/month (off-campus)',
        medium: 'English'
      },
      {
        name: 'SHATEC School of Hospitality',
        city: 'City Hall',
        country: 'Singapore',
        type: 'Private',
        programs: ['Diploma in Hotel Management (2 yrs)'],
        tuitionPerYear: 'SGD 26,429',
        hostelPerYear: 'No campus housing',
        medium: 'English'
      },
      {
        name: 'MDIS',
        city: 'Tai Seng',
        country: 'Singapore',
        type: 'Private',
        programs: ['Diploma in Hospitality', 'Bachelor in Hospitality'],
        tuitionPerYear: 'SGD 8,502-14,388',
        hostelPerYear: 'SGD 894-1,374/month',
        medium: 'English'
      }
    ]
  },
  {
    country: 'Dubai',
    focus: 'Medical Colleges',
    eligibility: 'High school diploma with strong science (85% in PCB), MOE attestation required, NEET for Indian students',
    admissions: 'Selective entry with MMI interviews and placement exams',
    universities: [
      {
        name: 'Mohammed Bin Rashid University of Medicine and Health Sciences',
        city: 'Dubai',
        country: 'Dubai',
        type: 'Government',
        programs: ['MBBS (6 yrs)'],
        tuitionPerYear: 'AED 160,000',
        hostelPerYear: 'No campus housing',
        medium: 'English'
      },
      {
        name: 'Dubai Medical College for Girls',
        city: 'Dubai',
        country: 'Dubai',
        type: 'Private',
        programs: ['MBBS (6 yrs)'],
        tuitionPerYear: 'AED 126,000',
        hostelPerYear: 'AED 12,000-18,000',
        medium: 'English'
      }
    ]
  },
  {
    country: 'Armenia',
    focus: 'Medical Colleges',
    eligibility: '12-year school completion with high marks in science, 60-75% in PCB for Indian students plus NEET',
    admissions: 'Application-based with possible entrance tests/interviews',
    universities: [
      {
        name: 'Yerevan State Medical University',
        city: 'Yerevan',
        country: 'Armenia',
        type: 'Government',
        programs: ['Medicine MD (6 yrs)'],
        tuitionPerYear: '$6,500',
        hostelPerYear: '$900',
        medium: 'English'
      },
      {
        name: 'Yerevan Haybusak University',
        city: 'Yerevan',
        country: 'Armenia',
        type: 'Private',
        programs: ['MD (5 yrs)'],
        tuitionPerYear: '$3,800',
        hostelPerYear: 'Private accommodation',
        medium: 'English'
      },
      {
        name: 'Mkhitar Gosh Armenian-Russian International University',
        city: 'Yerevan',
        country: 'Armenia',
        type: 'Private',
        programs: ['MD (5 yrs)'],
        tuitionPerYear: '$2,900',
        hostelPerYear: 'Private accommodation',
        medium: 'English'
      }
    ]
  },
  {
    country: 'Mauritius',
    focus: 'Medical Colleges',
    eligibility: 'Requirements vary by institution. UoM requires A-levels with strong science, SSR requires 60% in PCB and NEET',
    admissions: 'Government universities via national criteria, private institutes direct application',
    universities: [
      {
        name: 'University of Mauritius',
        city: 'Reduit',
        country: 'Mauritius',
        type: 'Government',
        programs: ['MBBS (5 yrs + intern)'],
        tuitionPerYear: 'Subsidized for locals',
        hostelPerYear: 'Available on campus',
        medium: 'English'
      },
      {
        name: 'SSR Medical College',
        city: 'Pamplemousses',
        country: 'Mauritius',
        type: 'Private',
        programs: ['MBBS (5 yrs + intern)'],
        tuitionPerYear: '$8,000',
        hostelPerYear: '$1,200',
        medium: 'English'
      }
    ]
  },
  {
    country: 'Kazakhstan',
    focus: 'Medical Colleges',
    eligibility: '50% aggregate in PCB at 12th grade, English proficiency, NEET for Indian students',
    admissions: 'Application-based (Jan/Feb for Sep intake), some require video/campus interview',
    universities: [
      {
        name: 'Kazakh National Medical University',
        city: 'Almaty',
        country: 'Kazakhstan',
        type: 'Government',
        programs: ['MD (6 yrs)'],
        tuitionPerYear: '$5,500',
        hostelPerYear: '$500',
        medium: 'English'
      },
      {
        name: 'Semey State Medical University',
        city: 'Semey',
        country: 'Kazakhstan',
        type: 'Government',
        programs: ['MD (6 yrs)'],
        tuitionPerYear: '$3,800',
        hostelPerYear: '$1,000',
        medium: 'English'
      }
    ]
  }
]; 