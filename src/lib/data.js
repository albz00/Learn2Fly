// Central content for the one-page site.

export const contact = {
  phone: '386-965-1502',
  phoneHref: 'tel:+13869651502',
  email: 'info@Learn2FlyFlorida.com',
  emailHref: 'mailto:info@Learn2FlyFlorida.com',
  airport: 'KLCQ · Lake City Gateway',
  city: 'Lake City, Florida',
  coords: '30.18° N · 82.58° W',
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
  'Airline Transport Pilot — Multiengine Land (ATP)',
  'CL-65 Type Rating — CRJ 200 / 700 / 900',
  'Flight Instructor — Single & Multiengine Land & Sea',
  'Flight Instructor — Instrument Airplane',
  'Advanced Ground Instructor',
  'Gold Seal Flight Instructor',
  'FAA Airframe Mechanic',
];

export const courses = [
  {
    id: '01',
    name: 'Private Pilot',
    hours: '45–55 hrs',
    summary:
      'Your first certificate and the foundation of every rating that follows. Most students finish well inside the national average.',
    points: [
      'Pre-solo and solo flight training',
      'Cross-country navigation & night flying',
      'FAA written, oral and practical (checkride) prep',
    ],
  },
  {
    id: '02',
    name: 'Instrument Rating',
    hours: '40 hrs',
    summary:
      'Fly confidently in the clouds and the system. Up to 10 hours may be flown in the Redbird simulator — no aircraft or instructor rental on those hours.',
    points: [
      'Approaches, holds and IFR enroute procedures',
      'Redbird FMX simulator integration',
      'Real-world ATC and flight-plan workflow',
    ],
  },
  {
    id: '03',
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
    id: '04',
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
      { label: 'MedXPress — Medical Certificate', meta: 'Class 1 / 2 / 3', href: 'https://medxpress.faa.gov' },
      { label: 'Find an AME (Medical Examiner)', meta: 'Locator', href: 'https://designee.faa.gov/designeeLocator' },
      { label: 'IACRA — Student Pilot Application', meta: 'Online', href: 'https://iacra.faa.gov' },
      { label: 'Knowledge Test Scheduling', meta: 'PSI', href: 'https://faa.psiexams.com' },
    ],
  },
  {
    group: 'Every Flight',
    items: [
      { label: 'Aviation Weather Center', meta: 'METAR · TAF', href: 'https://aviationweather.gov' },
      { label: 'Standard Weather Briefing', meta: '1-800-WX-BRIEF', href: 'https://www.1800wxbrief.com' },
      { label: 'KLCQ — Lake City Gateway', meta: 'Airport info', href: 'https://www.airnav.com/airport/KLCQ' },
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
  },
  {
    quote:
      'The Redbird time made instrument approaches second nature before I ever flew them for real. It saved me money and made me a sharper, safer pilot.',
    name: 'Marisa K.',
    detail: 'Instrument Rating',
  },
  {
    quote:
      'Learning to teach from a Gold Seal instructor changed how I think about flying. The CFI prep was thorough and honest about the checkride.',
    name: 'Anthony V.',
    detail: 'CFI · Now flying regional',
  },
  {
    quote:
      'One airplane, one instructor, one standard. No factory schedule, no revolving door of CFIs. Exactly what I was looking for.',
    name: 'Sofia L.',
    detail: 'Private Pilot in progress',
  },
];

export const faqs = [
  {
    q: 'Do I need any experience to start?',
    a: 'None at all. Most students begin with a discovery flight and no prior hours. Training is built from the ground up around you.',
  },
  {
    q: 'How long does the Private Pilot certificate take?',
    a: 'Most students complete the Private Pilot certificate in 45–55 hours of flight training. Your pace depends on how often you fly and how consistently you study.',
  },
  {
    q: 'Can the simulator count toward my rating?',
    a: 'Yes. The Redbird FMX is an approved advanced training device. Up to 10 of the 40 hours required for the instrument rating may be flown in the simulator — with no aircraft or instructor rental on those hours.',
  },
  {
    q: 'What about a medical certificate?',
    a: 'You will need an FAA medical certificate to solo. We will walk you through MedXPress and help you find a nearby Aviation Medical Examiner before that point.',
  },
  {
    q: 'How does payment work?',
    a: 'Training is pay-as-you-go. You pay for the aircraft and instruction you use — there are no large packages to commit to up front.',
  },
  {
    q: 'Where are you based?',
    a: 'All training is conducted out of KLCQ — Lake City Gateway Airport in Lake City, Florida, a quiet, uncongested field that is ideal for learning.',
  },
];
