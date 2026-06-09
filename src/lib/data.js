// Central content for the one-page site.

export const brand = {
  name: 'Learn2FlyFlorida',
  logo: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d4d31c0-9e19-41a3-15ae-fd862b440c00/public',
  logoAlt: 'Learn2FlyFlorida Flight Training in Lake City, Florida',
};

export const seo = {
  siteUrl: 'https://learn2flyflorida.com',
  title: 'Learn2FlyFlorida — Flight Training · Lake City, FL',
  description:
    'FAA Part 61 flight school in Lake City, Florida. Private Pilot, Instrument, Commercial and CFI training with one-on-one instruction at Lake City Gateway Airport (KLCQ).',
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
  airport: 'KLCQ · Lake City Gateway',
  city: 'Lake City, Florida',
};

export const nav = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'The Instructor', href: '#about' },
      { label: 'Certificates & Ratings', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    label: 'Courses',
    href: '#courses',
    children: [
      { label: 'Private Pilot', href: '#courses' },
      { label: 'Instrument Rating', href: '#courses' },
      { label: 'Commercial Pilot', href: '#courses' },
      { label: 'Flight Instructor (CFI)', href: '#courses' },
    ],
  },
  { label: 'Rates', href: '#rates' },
  { label: 'Aircraft', href: '#aircraft' },
  { label: 'Resources', href: '#resources' },
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
    name: 'Private Pilot',
    hours: '45 to 55 hrs',
    summary:
      'Your first certificate and the foundation of every rating that follows. Most students finish well inside the national average.',
    points: [
      'Pre-solo and solo flight training',
      'Cross-country navigation & night flying',
      'FAA written, oral and practical (checkride) prep',
    ],
  },
  {
    name: 'Instrument Rating',
    hours: '40 hrs',
    summary:
      'Fly confidently in the clouds and the system. Up to 10 hours may be flown in the Redbird simulator, with no aircraft or instructor rental on those hours.',
    points: [
      'Approaches, holds and IFR enroute procedures',
      'Redbird FMX simulator integration',
      'Real-world ATC and flight-plan workflow',
    ],
  },
  {
    name: 'Commercial Pilot',
    hours: 'Build & refine',
    summary:
      'Sharpen your stick-and-rudder skills to commercial standards and open the door to flying for compensation.',
    points: [
      'Commercial maneuvers to ACS tolerances',
      'Complex / high-performance familiarization',
      'Career and time-building guidance',
    ],
  },
  {
    name: 'Flight Instructor · CFI',
    hours: 'Teach to fly',
    summary:
      'Learn to teach from a Gold Seal flight instructor. Turn your skills into the most valuable rating you can hold.',
    points: [
      'Fundamentals of instruction',
      'Lesson planning and the teaching environment',
      'Spin endorsement & CFI checkride prep',
    ],
  },
];

export const rates = [
  {
    item: 'Piper Cherokee 140',
    detail: 'Aircraft rental, wet (fuel & oil included on local flights)',
    price: '$150',
    unit: '/ hr',
  },
  {
    item: 'Flight Instruction',
    detail: 'Dual instruction given in our aircraft',
    price: '$50',
    unit: '/ hr',
  },
  {
    item: 'Redbird FMX Simulator',
    detail: 'Loggable toward up to 10 hrs of the instrument rating',
    price: 'Incl.',
    unit: 'w/ course',
  },
];

export const rateNotes = [
  'Fuel and oil purchases are reimbursed up to current published rates at KLCQ.',
  'Aircraft scheduled overnight away from base carries a 3-hour-per-day minimum.',
  'Overnight / away-from-base rental requires prior approval.',
];

export const aircraftSpecs = [
  { k: 'Model', v: 'Piper Cherokee 140' },
  { k: 'Year', v: '1969' },
  { k: 'Avionics', v: 'All-new panel' },
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
    a: 'Training can start any day of the week. If you are interested in training we can find a convenient start time for you. Since designated examiners do not generally work on Sundays, I like to start so your training doesn’t end with a Sunday practical exam.',
  },
  {
    q: 'What is a Practical Exam?',
    a: 'The FAA term for a checkride is the Practical Exam. Most FAA practical exams consist of three phases. Phase one is check-in and verification of identity, written exam results and eligibility to take the practical exam you have applied for. Phase two is the oral exam — most oral exams take between two and four hours, though the oral technically never ends and continues through phase three. Phase three is the flight test, which consists of the maneuvers and flying skills outlined in the FAA Airman Certification Standards.',
  },
  {
    q: 'Does the cost have to be paid in advance?',
    a: 'No, you can pay as you go.',
  },
  {
    q: 'Do you guarantee a student will leave with an instrument rating?',
    a: 'No. My guarantee is that once I sign you off for a practical exam you will pass, or I will re-train you in the areas you failed for free. Most students complete the course in the amount of time and cost outlined in my course descriptions. However, some students may need additional training before they are ready to sit for their practical exam. I will do everything I can to get you done on-time and on budget.',
  },
  {
    q: 'Will we fly in actual instrument conditions?',
    a: 'Yes! However, for safety I require a ceiling no lower than 800 feet and visibility of 3 miles or better. We also must be able to file a legal alternate within our fuel requirements. In addition, no thunderstorms or icing can be forecast or present when we fly. Depending on the time of year, you may get a lot of actual time or none.',
  },
  {
    q: 'Do I have to have my written exam done before I start training?',
    a: 'Yes. The written exam can be easily self-studied before you get here. For the most part it is an exercise in rote memorization, and you will not have the time or energy to study for it once you are here and flight training. I recommend the King Schools Instrument Prep Course.',
  },
];
