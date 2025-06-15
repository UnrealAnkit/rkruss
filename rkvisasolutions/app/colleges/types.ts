export interface University {
  name: string;
  description: string;
  tests: string;
  language: string;
  admission: string;
  features?: string[];
  tuition: string;
  accommodation: string;
  duration: string;
  type: string;
  image: string;
}

export interface CountryUniversities {
  country: string;
  flag: string;
  description: string;
  universities: University[];
} 