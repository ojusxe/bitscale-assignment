"use client"

import Image from 'next/image'

// Map company names to their domains for favicon fetching
const companyDomains: Record<string, string> = {
  'Google': 'google.com',
  'Amazon': 'amazon.com',
  'LinkedIn': 'linkedin.com',
  'Microsoft': 'microsoft.com',
  'TED': 'ted.com',
  'Unilever': 'unilever.com',
  'Apple': 'apple.com',
  'Meta': 'meta.com',
  'Netflix': 'netflix.com',
  'Spotify': 'spotify.com',
  'Twitter': 'twitter.com',
  'Uber': 'uber.com',
  'Airbnb': 'airbnb.com',
  'Slack': 'slack.com',
  'Zoom': 'zoom.us',
  'Shopify': 'shopify.com',
  'Salesforce': 'salesforce.com',
  'Adobe': 'adobe.com',
  'IBM': 'ibm.com',
  'Oracle': 'oracle.com',
}

interface CompanyLogoProps {
  name: string
}

export function CompanyLogo({ name }: CompanyLogoProps) {
  const domain = companyDomains[name]
  
  if (domain) {
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
    
    return (
      <div className="h-5 w-5 flex items-center justify-center shrink-0">
        <Image
          src={faviconUrl}
          alt={`${name} logo`}
          width={16}
          height={16}
          className="rounded-sm"
          unoptimized
        />
      </div>
    )
  }

  // Fallback for unknown companies
  return (
    <div className="h-5 w-5 rounded flex items-center justify-center shrink-0 bg-slate-200">
      <span className="text-[10px] font-medium text-slate-600">{name.charAt(0)}</span>
    </div>
  )
}
