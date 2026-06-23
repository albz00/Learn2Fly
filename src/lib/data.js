// Central content for the Learn2FlyFlorida site.

export const brand = {
  name: 'Learn2FlyFlorida',
  logo: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d4d31c0-9e19-41a3-15ae-fd862b440c00/public',
  logoAlt: 'Learn2FlyFlorida Flight Training in Lake City, Florida',
};

export const seo = {
  siteUrl: 'https://learn2flyflorida.com',
  title: 'Learn2FlyFlorida | Flight Training in Lake City, FL',
  description:
    'FAA Part 61 flight training in Lake City, Florida. Private Pilot, Instrument, Commercial and CFI paths taught one-on-one at KLCQ.',
  ogImageAlt: '1969 Piper Cherokee 140 training aircraft at Lake City Gateway Airport, Florida',
};

export const images = {
  planeHero:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/7b6ef135-6f82-44b4-f221-18991da3a200/public',
  instructor:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/2df1a2a4-6f36-4385-c9e3-4f57137a1600/public',
  instrumentCloseUp:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/4add3f94-3345-4844-1488-ec33380f8100/public',
  aircraftExterior:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/b4f2b8d7-bb37-4556-a370-1fd2a4bb1e00/public',
  aircraftCockpit:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/3ad5a228-0f95-4af1-0b5f-ad8634ccbd00/public',
  ratesMark:
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/e87211b1-39b5-4178-519e-6645941f0200/public',
};

export const instructor = {
  name: 'Ralph',
  title: 'Chief Flight Instructor',
  photoAlt: 'Ralph, Gold Seal flight instructor at Learn2FlyFlorida',
};

export const contact = {
  phone: '386-965-1502',
  phoneHref: 'tel:+13869651502',
  email: 'info@Learn2FlyFlorida.com',
  emailHref: 'mailto:info@Learn2FlyFlorida.com',
  addressLine1: '219 SW Plantation Terrace',
  addressLine2: 'Lake City, Florida 32025',
  airport: 'KLCQ · Lake City Gateway',
  city: 'Lake City, Florida',
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'The Instructor', href: '/about#instructor' },
      { label: 'Certificates & Ratings', href: '/about#credentials' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'Private Pilot', href: '/courses#private-pilot' },
      { label: 'Instrument Rating', href: '/courses#instrument-rating' },
      { label: 'Commercial Pilot', href: '/courses#commercial-pilot' },
      { label: 'Flight Instructor (CFI)', href: '/courses#flight-instructor-cfi' },
    ],
  },
  { label: 'Rates', href: '/rates' },
  { label: 'Aircraft', href: '/aircraft' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
];

export const certificates = [
  'Airline Transport Pilot, Multiengine Land (ATP)',
  'CL-65 Type Rating, CRJ 200 / 700 / 900',
  'Flight Instructor, Single & Multiengine Land & Sea',
  'Flight Instructor, Instrument Airplane',
  'Advanced Ground Instructor',
  'Gold Seal Flight Instructor',
  'FAA Airframe Mechanic',
];

export const courses = [
  {
    slug: 'private-pilot',
    name: 'Private Pilot',
    hours: 'Typical: 45 to 55 hrs',
    summary:
      'The foundation certificate for safe personal flying and every rating that comes next. Training is structured to keep momentum and avoid wasted flights.',
    points: [
      'Pre-solo to solo progression with clear benchmarks',
      'Cross-country, night, and towered/non-towered operations',
      'Written, oral, and practical exam preparation',
    ],
  },
  {
    slug: 'instrument-rating',
    name: 'Instrument Rating',
    hours: 'Typical: 40 hrs',
    summary:
      'Build real IFR capability, not just test prep. Simulator integration lowers cost while improving procedures and scan discipline.',
    points: [
      'Approaches, holds, departures, arrivals, and enroute workflow',
      'Up to 10 hours in the Redbird FMX toward the rating',
      'If signed off and you do not pass, retraining in failed areas is covered',
    ],
  },
  {
    slug: 'commercial-pilot',
    name: 'Commercial Pilot',
    hours: 'Skill refinement',
    summary:
      'Refine aircraft control, precision, and judgement to commercial standards so you can fly for compensation with confidence.',
    points: [
      'Commercial maneuvers to ACS standards',
      'Professional decision-making and scenario-driven training',
      'Time-building strategy and next-rating planning',
    ],
  },
  {
    slug: 'flight-instructor-cfi',
    name: 'Flight Instructor · CFI',
    hours: 'Instructor prep',
    summary:
      'Train to teach from a Gold Seal instructor and convert your experience into the rating that unlocks your next career step.',
    points: [
      'Fundamentals of Instruction and lesson delivery',
      'Lesson planning, endorsements, and student risk management',
      'Spin endorsement and focused CFI checkride preparation',
    ],
  },
];

export const rates = [
  {
    item: 'Piper Cherokee 140',
    detail: 'Aircraft rental in our primary trainer',
    price: '$150',
    unit: '/ hr wet',
  },
  {
    item: 'Piper Cherokee 140',
    detail: 'Dry option for qualified renters',
    price: '$110',
    unit: '/ hr dry',
  },
  {
    item: 'Flight Instruction (Our Aircraft)',
    detail: 'One-on-one instruction in school aircraft',
    price: '$50',
    unit: '/ hr',
  },
  {
    item: 'Flight Instruction (Owner Aircraft)',
    detail: 'Instruction provided in customer-owned aircraft',
    price: '$75',
    unit: '/ hr',
  },
  {
    item: 'Ground Instruction',
    detail: 'Ground briefings and targeted oral prep',
    price: '$25',
    unit: '/ hr',
  },
  {
    item: 'Redbird FMX Simulator',
    detail: 'Procedural and instrument proficiency training',
    price: '$35',
    unit: '/ hr',
  },
  {
    item: 'Discovery Flight Lesson',
    detail: 'Introductory lesson for new students',
    price: '$159',
    unit: 'flat',
  },
];

export const rateNotes = [
  'Fuel and oil purchases are reimbursed up to currently published rates at KLCQ.',
  'Aircraft scheduled overnight away from base carries a 3-hour-per-day minimum.',
  'Overnight or away-from-base rental requires prior approval.',
  'All new renters complete a check flight (minimum one hour ground and one hour flight) before solo authorization.',
];

export const aircraftSpecs = [
  { k: 'Model', v: 'Piper Cherokee 140' },
  { k: 'Year', v: '1969' },
  { k: 'Primary Display', v: 'uAvionix AV-30' },
  { k: 'Navigator', v: 'Garmin 430' },
  { k: 'Autopilot', v: 'BendixKing AeroCruze' },
  { k: 'ADSB', v: 'uAvionix ADS-B Out' },
  { k: 'Interior', v: 'Refurbished' },
  { k: 'Exhaust', v: 'PowerFlow' },
  { k: 'Rate', v: '$150 / hr wet' },
];

export const resources = [
  {
    group: 'Knowledge & Standards',
    items: [
      { label: 'Pilot’s Handbook of Aeronautical Knowledge', meta: 'FAA-H-8083-25', href: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak' },
      { label: 'Airplane Flying Handbook', meta: 'FAA-H-8083-3', href: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook' },
      { label: 'Instrument Flying Handbook', meta: 'FAA-H-8083-15', href: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook' },
      { label: 'Airman Certification Standards', meta: 'PVT · IFR · COM', href: 'https://www.faa.gov/training_testing/testing/acs' },
    ],
  },
  {
    group: 'Before You Fly',
    items: [
      { label: 'MedXPress Medical Certificate', meta: 'Class 1 / 2 / 3', href: 'https://medxpress.faa.gov' },
      { label: 'Find an AME (Medical Examiner)', meta: 'Locator', href: 'https://designee.faa.gov/designeeLocator' },
      { label: 'IACRA Student Pilot Application', meta: 'Online', href: 'https://iacra.faa.gov' },
      { label: 'Knowledge Test Scheduling', meta: 'PSI', href: 'https://faa.psiexams.com' },
    ],
  },
  {
    group: 'Every Flight',
    items: [
      { label: 'Aviation Weather Center', meta: 'METAR · TAF', href: 'https://aviationweather.gov' },
      { label: 'Standard Weather Briefing', meta: '1-800-WX-BRIEF', href: 'https://www.1800wxbrief.com' },
      { label: 'KLCQ Lake City Gateway', meta: 'Airport info', href: 'https://www.airnav.com/airport/KLCQ' },
      { label: 'Chart Supplement (Southeast)', meta: 'FAA', href: 'https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd' },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'I went from a discovery flight to my Private certificate without ever feeling rushed. Every lesson had a plan, and the debriefs are where it really clicked.',
    name: 'Daniel R.',
    detail: 'Private Pilot · 49 hrs',
    rating: 5,
  },
  {
    quote:
      'The Redbird time made instrument approaches second nature before I ever flew them for real. It saved me money and made me a sharper, safer pilot.',
    name: 'Marisa K.',
    detail: 'Instrument Rating',
    rating: 5,
  },
  {
    quote:
      'Learning to teach from a Gold Seal instructor changed how I think about flying. The CFI prep was thorough and honest about the checkride.',
    name: 'Anthony V.',
    detail: 'CFI · Now flying regional',
    rating: 5,
  },
  {
    quote:
      'One airplane, one instructor, one standard. No factory schedule, no revolving door of CFIs. Exactly what I was looking for.',
    name: 'Sofia L.',
    detail: 'Private Pilot in progress',
    rating: 5,
  },
];

export const faqs = [
  {
    q: 'What day of the week does training start?',
    a: 'Training can start any day of the week. We schedule around your availability and your examiner timeline so training stays efficient from day one.',
  },
  {
    q: 'What is a Practical Exam?',
    a: 'A practical exam is the FAA checkride. It includes check-in and eligibility review, an oral exam, and a flight test based on the Airman Certification Standards for your rating.',
  },
  {
    q: 'Does the cost have to be paid in advance?',
    a: 'No, you can pay as you go.',
  },
  {
    q: 'Do you guarantee I will pass my checkride?',
    a: 'No school can guarantee a pass before training is complete. The promise is this: once you are signed off as checkride-ready, if you receive an unsatisfactory result, retraining in the failed areas is provided at no additional training cost.',
  },
  {
    q: 'Will we fly in actual instrument conditions?',
    a: 'Yes, when conditions support safe training. We use conservative weather limits, legal alternates, and strict thunderstorm/icing avoidance so you gain real experience without gambling risk.',
  },
  {
    q: 'Do I need the written exam complete before starting?',
    a: 'For instrument training, yes. Completing the written first keeps your flight block focused on flying and checkride prep instead of trying to split attention between two workloads.',
  },
];
