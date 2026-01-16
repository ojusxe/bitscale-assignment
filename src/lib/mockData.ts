export interface GridRow {
  id: string;
  importedData: {
    name: string;
    avatar?: string;
  };
  lastUpdatedAt: string;
  companyName: {
    name: string;
    logo?: string;
  };
  companyWebsite: string;
  linkedinJobUrl: string;
  emailWaterfall: 'Email Found' | 'Run condition not met';
}

export const mockRows: GridRow[] = [
  {
    id: '1',
    importedData: { name: 'Mike Braham' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Google' },
    companyWebsite: 'https://www.example.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '2',
    importedData: { name: 'Alex Johnson' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Amazon' },
    companyWebsite: 'https://www.sample.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '3',
    importedData: { name: 'Sarah Thompson' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'LinkedIn' },
    companyWebsite: 'https://www.testsite.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '4',
    importedData: { name: 'David Lee' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Microsoft' },
    companyWebsite: 'https://www.demo.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '5',
    importedData: { name: 'Emily Carter' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'TED' },
    companyWebsite: 'https://www.siteexample....',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '6',
    importedData: { name: 'James Smith' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Unilever' },
    companyWebsite: 'https://www.webpage.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '7',
    importedData: { name: 'Laura White' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Apple' },
    companyWebsite: 'https://www.mywebsite.c...',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '8',
    importedData: { name: 'Chris Brown' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Google' },
    companyWebsite: 'https://www.newsite.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '9',
    importedData: { name: 'Jessica Green' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Unilever' },
    companyWebsite: 'https://www.uniqueurl.com',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '10',
    importedData: { name: 'Daniel Harris' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Microsoft' },
    companyWebsite: 'https://www.originalsite.c...',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '11',
    importedData: { name: 'Megan Clark' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Apple' },
    companyWebsite: 'https://www.freshpage.c...',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '12',
    importedData: { name: 'Brian Lewis' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'TED' },
    companyWebsite: 'https://www.differentdo...',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '13',
    importedData: { name: 'Samantha Hall' },
    lastUpdatedAt: 'Oct 12, 2024 at 14:08 PM',
    companyName: { name: 'Google' },
    companyWebsite: 'https://www.alternativesi...',
    linkedinJobUrl: 'https://www.linkedin.com...',
    emailWaterfall: 'Email Found',
  },
  {
    id: '14',
    importedData: { name: 'Google' },
    lastUpdatedAt: '',
    companyName: { name: '' },
    companyWebsite: '',
    linkedinJobUrl: '',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '15',
    importedData: { name: 'Amazon' },
    lastUpdatedAt: '',
    companyName: { name: '' },
    companyWebsite: '',
    linkedinJobUrl: '',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '16',
    importedData: { name: 'LinkedIn' },
    lastUpdatedAt: '',
    companyName: { name: '' },
    companyWebsite: '',
    linkedinJobUrl: '',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '17',
    importedData: { name: 'LinkedIn' },
    lastUpdatedAt: '',
    companyName: { name: '' },
    companyWebsite: '',
    linkedinJobUrl: '',
    emailWaterfall: 'Run condition not met',
  },
  {
    id: '18',
    importedData: { name: 'LinkedIn' },
    lastUpdatedAt: '',
    companyName: { name: '' },
    companyWebsite: '',
    linkedinJobUrl: '',
    emailWaterfall: 'Run condition not met',
  },
];

export const companyLogos: Record<string, string> = {
  'Google': 'G',
  'Amazon': 'a',
  'LinkedIn': 'in',
  'Microsoft': 'M',
  'TED': 'TED',
  'Unilever': 'U',
  'Apple': '',
};
