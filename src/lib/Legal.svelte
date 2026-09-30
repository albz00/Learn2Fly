<script>
  import { brand, contact, instructor } from './data.js';
  import { acceptAnalytics, declineAnalytics, getConsent, openCookieSettings } from './consent.js';

  const updated = 'September 30, 2026';

  let choice = $state(getConsent());

  function refreshChoice() {
    choice = getConsent();
  }

  function allow() {
    acceptAnalytics();
    refreshChoice();
  }

  function essential() {
    declineAnalytics();
    refreshChoice();
  }

  const sections = [
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      paragraphs: [
        `${brand.name} is operated by ${instructor.business} in ${contact.city}. This policy explains what this website collects, why it is collected, and the choices you have. It covers the public website, the contact form, and the analytics described in the cookie notice. It does not replace the records required once you begin flight training.`,
        `The school can be reached at ${contact.phone}, ${contact.email}, or ${contact.addressLine1}, ${contact.addressLine2}. Messages sent through the contact form are delivered to the instructor at ralph@zahnle.net. You may use either address for a privacy request.`,
        'If you use the contact form, we ask for your name, email address, the training you are interested in, and your message. Phone number, preferred date, and preferred time are optional. We use that information to answer you, schedule a discovery flight or lesson, and follow up about training. A confirmation copy is emailed to the address you enter. We do not sell personal information, and we do not use it for advertising profiles.',
        'The form is protected by Cloudflare Turnstile, which checks that the submission comes from a person rather than an automated script. Cloudflare processes that check, including technical data such as your IP address, under its own terms. Email is sent through Resend from Learn2FlyFlorida. The site and its photographs are delivered through Cloudflare.',
        'Inquiry emails are kept long enough to respond and to schedule training. If you become a student, information you later provide for instruction, scheduling, and FAA records is kept as required for that training and for the school’s operations. You may ask us to correct contact details, or to delete an inquiry we no longer need, by emailing the school. We may retain a copy where a law, an accounting need, or an active training record requires it.',
        'If you allow analytics, Matomo on this site records pages viewed, the site you came from, general device and browser information, and an approximate location derived from your IP address. That data is used to understand which pages are useful. It is not sold and it is not used to advertise to you on other sites. You can refuse analytics in the cookie banner, and you can change that choice at any time.',
        'This website is not directed to children under 13, and we do not knowingly collect their information through the form. Flight training has its own eligibility rules, including age, identification, and medical requirements, which are handled directly with the instructor rather than through this policy.',
        'We may update this policy when the site or the tools it uses change. The date at the top of this page is the latest revision. Continued use of the site after an update means the revised policy applies to new visits and new form submissions.',
      ],
    },
    {
      id: 'terms-of-use',
      title: 'Terms of Use',
      paragraphs: [
        `These terms apply to your use of the ${brand.name} website. The school is ${instructor.business}, located at ${contact.addressLine1}, ${contact.addressLine2}. Training itself is arranged separately with the instructor. A page on this site is an invitation to inquire. It is not, by itself, a contract to train, rent an aircraft, or guarantee a certificate.`,
        'Training is conducted under FAA Part 61. Course descriptions, typical hour ranges, and checkride preparation notes describe how the school usually structures Private Pilot, Instrument, Commercial, and CFI training. Actual time and cost depend on your experience, preparation, weather, aircraft availability, and examiner scheduling. Where a course page states a specific commitment, such as retraining in failed areas after an instrument sign-off, that commitment is limited to the wording on that page and is confirmed before you rely on it.',
        'Published rates are the school’s current prices for the Piper Cherokee 140, flight and ground instruction, the Redbird FMX simulator, and the discovery flight. They can change. The price that applies to you is the price confirmed when you schedule. Examiner fees are paid to the examiner, not to the school. Items such as online ground school and non-owned aircraft insurance are third-party costs, listed so you can budget, and are purchased by you.',
        'A discovery flight is an introductory lesson. It is not a certificate, a rental checkout, or a promise of a particular amount of solo time. Aircraft rental, including overnight or away-from-base use, requires prior approval and the conditions stated on the rates page, including the new-renter check flight before solo. Non-owned aircraft insurance is required before you solo the school aircraft.',
        'Lessons are scheduled directly with the instructor. Weather, maintenance, air traffic, and safety can move or cancel a lesson. Cancellation and rescheduling expectations are confirmed when you book, because they depend on the aircraft and the day’s plan. The instructor may decline or stop a lesson when it would be unsafe or when you are not prepared.',
        'The text, logo, and photographs on this site belong to the school unless a credit says otherwise. You may share links to public pages. You may not copy the lesson material, photos, or branding for another flight school or advertisement without permission. Links to FAA handbooks, weather, medical, and testing sites are provided for convenience. Those sites are run by other organizations, and their terms and availability are theirs.',
        'The website is provided as a source of current school information. We work to keep it accurate, and we correct it when something changes, but a page can lag a schedule, a rate, or a regulation. Do not rely on the site alone for a flight decision, a medical decision, or a regulatory interpretation. Ask the instructor, or use the official FAA source, before you act.',
        'These website terms do not limit liability for flight instruction or aircraft operation. That responsibility is governed by the training arrangement you make with the school, by insurance, and by applicable aviation law. For the website itself, the school is not liable for losses caused by your reliance on a page that is incomplete or out of date, or by a third-party site linked from here.',
        `These terms are governed by the laws of the State of Florida, without regard to conflict-of-law rules. Questions about the site can be sent to ${contact.email} or ralph@zahnle.net, or by calling ${contact.phone}.`,
      ],
    },
    {
      id: 'cookie-notice',
      title: 'Cookie Notice',
      paragraphs: [
        'This site uses a small amount of storage on your device. There are no advertising cookies and no cookies that follow you around the web to build a marketing profile.',
        'Essential storage remembers whether you chose “Allow analytics” or “Essential only.” That choice is saved in local storage in this browser under the name l2f-cookie-consent. The site needs it so the banner does not ask on every page and so analytics stay off if you refused them. Declining does not block the site, the phone number, or the contact form.',
        'Analytics cookies are set only after you allow them. The tool is Matomo, loaded from raven-10.hostverna.com, for this site only. It uses first-party cookies such as _pk_id and _pk_ses to count visits, pages, and referring sites, and to tell a new visit from a return visit. IP addresses may be processed to estimate a general region. You can refuse analytics, and if you later switch to essential only, the site asks Matomo to opt you out and clears those cookies in this browser.',
        'The contact form loads Cloudflare Turnstile when you open a page that includes the form. Turnstile may use a cookie or similar storage to complete the security check and reduce spam. It is not used for advertising. It runs only for that check.',
        'Photographs are loaded from Cloudflare Images. Your browser, and this site’s cache, may store those image files so the next visit paints faster. That cache holds pictures, not an account of who you are.',
        'You can change your choice with Cookie settings in the footer or with the buttons below. You can also block cookies in your browser. Blocking all storage may make the banner appear again and may prevent the contact form’s security check from completing.',
      ],
    },
    {
      id: 'accessibility-statement',
      title: 'Accessibility Statement',
      paragraphs: [
        `${brand.name} wants this website to be readable and usable with a keyboard, a phone, and common assistive technology. Pages use text headings, visible labels on the contact form, and link names that describe where they go. The navigation can be used without a mouse.`,
        'Photographs have text alternatives where they carry meaning. Decorative marks are hidden from assistive technology. If a carousel, a color contrast, or a document is still hard to use, that is a gap we want to fix.',
        `If you cannot access something on this site, contact ${instructor.fullName} at ${contact.phone} or ${contact.email}. Tell us the page and what you needed. We will provide the information in another way, such as by phone or email, and we will correct the page when we can. Training information, rates, and scheduling are also available directly from the instructor if the website is not the right format for you.`,
      ],
    },
    {
      id: 'safety-disclaimer',
      title: 'Safety Disclaimer',
      paragraphs: [
        'Flight training involves the risk of injury, death, and damage to property. Nothing on this website removes that risk or promises a particular outcome. Lessons are flown only when the instructor judges that the weather, the aircraft, the airspace, and the people on board meet the standard for that flight.',
        'The instructor may delay, change, or cancel a lesson for weather, maintenance, traffic, your preparation, or any other safety reason. A published schedule or a paid block of time does not override that judgment. Safety outranks the plan for the day.',
        'You are responsible for showing up fit to fly, with the documents the lesson requires. That includes an honest self-check for illness, medication, stress, alcohol, and fatigue. Medical certification, student pilot application, knowledge tests, and examiner appointments are your steps to complete unless the instructor has agreed to help you through a specific one. The school does not issue medical certificates or FAA credentials.',
        'The aircraft is maintained for training, and a flight is not conducted when it is not airworthy. You should still understand that a training aircraft is a machine operated in a changing environment. Renter and student procedures, including the checkout before solo and the insurance noted on the rates page, exist so those operations stay within known limits.',
        'Hour estimates, pass rates, and course outlines are planning tools. They are not a guarantee that you will finish in a set number of hours, pass a knowledge test, or pass a checkride on a given date. Examiner availability and FAA standards are outside the school’s control. Read each course page for the exact scope of what is included.',
        'Do not use this website as a briefing for a flight. Weather, NOTAMs, aircraft status, and your personal minimums have to be checked for the flight you are actually taking. If something here conflicts with the instructor, the aircraft documents, or an FAA requirement, follow the stricter source.',
      ],
    },
  ];
</script>

<section id="legal" class="site-shell section-space">
  <div class="max-w-3xl">
    <div class="micro-head text-ink/86">
      <span class="label">Legal</span>
    </div>
    <h2 class="display mt-4 text-3xl text-ink sm:text-4xl md:text-5xl">Legal & compliance information</h2>
    <p class="mt-5 text-base leading-relaxed text-soft">
      Privacy, terms, cookies, accessibility, and safety for {brand.name}. Updated {updated}.
    </p>
  </div>

  <div class="section-flow grid gap-5">
    {#each sections as policy}
      <article id={policy.id} class="card-elevated p-6 lg:p-8">
        <h3 class="display text-2xl text-ink sm:text-3xl">{policy.title}</h3>
        <div class="mt-4 space-y-4">
          {#each policy.paragraphs as paragraph}
            <p class="text-base leading-relaxed text-soft">{paragraph}</p>
          {/each}
        </div>
        {#if policy.id === 'cookie-notice'}
          <div class="mt-6 flex flex-col items-start gap-3 border-t border-line pt-5">
            <p class="text-sm font-semibold text-ink">
              {#if choice === 'accepted'}
                Analytics cookies are on for this browser.
              {:else if choice === 'declined'}
                Only essential storage is on for this browser.
              {:else}
                You have not chosen yet. The cookie banner is waiting for a choice.
              {/if}
            </p>
            <div class="flex flex-wrap gap-2.5">
              <button type="button" class="btn-gradient-accent" onclick={allow}>Allow analytics</button>
              <button type="button" class="legal-quiet" onclick={essential}>Essential only</button>
              <button type="button" class="legal-quiet" onclick={openCookieSettings}>Open cookie banner</button>
            </div>
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>

<style>
  .legal-quiet {
    border-radius: 999px;
    background: #ffffff;
    color: #122941;
    padding: 0.78rem 1.25rem;
    font-size: 0.9375rem;
  }

  .legal-quiet:hover {
    background: #f7fbff;
  }
</style>
