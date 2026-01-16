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

const names = [
  'Mike Braham', 'Alex Johnson', 'Sarah Thompson', 'David Lee', 'Emily Carter',
  'James Smith', 'Laura White', 'Chris Brown', 'Jessica Green', 'Daniel Harris',
  'Megan Clark', 'Brian Lewis', 'Samantha Hall', 'Ryan Martinez', 'Ashley Taylor',
  'Kevin Wilson', 'Nicole Anderson', 'Matthew Thomas', 'Stephanie Jackson', 'Andrew Moore',
  'Rachel Martin', 'Joshua Garcia', 'Amanda Rodriguez', 'Brandon Davis', 'Melissa Lopez',
]

const companies = [
  'Google', 'Amazon', 'LinkedIn', 'Microsoft', 'Apple', 'TED', 'Unilever',
  'Meta', 'Netflix', 'Spotify', 'Twitter', 'Uber', 'Airbnb', 'Slack', 'Zoom',
  'Shopify', 'Salesforce', 'Adobe', 'IBM', 'Oracle',
]

const websites = [
  'https://www.example.com', 'https://www.sample.com', 'https://www.testsite.com',
  'https://www.demo.com', 'https://www.webpage.com', 'https://www.mywebsite.com',
  'https://www.newsite.com', 'https://www.uniqueurl.com', 'https://www.freshpage.com',
]

// generate a single row (deterministic based on index)
function generateRow(index: number): GridRow {
  const hasFullData = index < 13 || index % 3 !== 0
  const isEmailFound = index % 5 !== 0 && index % 7 !== 0
  
  return {
    id: String(index + 1),
    importedData: { name: names[index % names.length] },
    lastUpdatedAt: hasFullData ? 'Oct 12, 2024 at 14:08 PM' : '',
    companyName: { name: hasFullData ? companies[index % companies.length] : '' },
    companyWebsite: hasFullData ? websites[index % websites.length] : '',
    linkedinJobUrl: hasFullData ? 'https://www.linkedin.com...' : '',
    emailWaterfall: isEmailFound ? 'Email Found' : 'Run condition not met',
  }
}

// generate rows on demand
export function generateRows(start: number, count: number): GridRow[] {
  return Array.from({ length: count }, (_, i) => generateRow(start + i))
}

export const TOTAL_ROWS = 200
