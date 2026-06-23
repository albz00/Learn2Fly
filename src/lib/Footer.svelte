<script>
  import { brand, contact, instructor } from './data.js';

  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Rates', href: '/rates' },
    { label: 'Aircraft', href: '/aircraft' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const complianceLinks = [
    { label: 'Privacy Policy', href: '/legal#privacy-policy' },
    { label: 'Terms of Use', href: '/legal#terms-of-use' },
    { label: 'Cookie Notice', href: '/legal#cookie-notice' },
    { label: 'Accessibility', href: '/legal#accessibility-statement' },
    { label: 'Safety Disclaimer', href: '/legal#safety-disclaimer' },
  ];
</script>

<footer class="bg-flight-night relative overflow-hidden text-paper" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Site footer</h2>
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" aria-hidden="true"></div>

  <div class="site-shell relative py-16 lg:py-18">
    <div class="grid gap-12 border-b border-line-dark/80 pb-14 md:grid-cols-2 lg:grid-cols-12">
      <section class="lg:col-span-4" aria-labelledby="footer-brand">
        <h3 id="footer-brand" class="sr-only">Learn2FlyFlorida</h3>
        <a href="/" class="inline-flex">
          <img src={brand.logo} alt={brand.logoAlt} class="h-12 w-auto brightness-0 invert" />
        </a>
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">
          FAA Part 61 training in {contact.city}. Private, Instrument, Commercial, and CFI paths taught one-on-one
          with clear standards, transparent pricing, and direct instructor access.
        </p>
      </section>

      <nav class="lg:col-span-3" aria-labelledby="footer-quick-links">
        <h3 id="footer-quick-links" class="label mb-5 text-paper/45">Quick links</h3>
        <ul class="space-y-2.5">
          {#each quickLinks as item}
            <li><a href={item.href} class="ulink text-sm text-paper/82">{item.label}</a></li>
          {/each}
        </ul>
      </nav>

      <nav class="lg:col-span-3" aria-labelledby="footer-compliance">
        <h3 id="footer-compliance" class="label mb-5 text-paper/45">Legal & compliance</h3>
        <ul class="space-y-2.5">
          {#each complianceLinks as item}
            <li><a href={item.href} class="ulink text-sm text-paper/82">{item.label}</a></li>
          {/each}
        </ul>
      </nav>

      <section class="lg:col-span-2" aria-labelledby="footer-contact">
        <h3 id="footer-contact" class="label mb-5 text-paper/45">Get in touch</h3>
        <address class="space-y-3 not-italic">
          <div><a href={contact.phoneHref} class="font-mono text-sm text-paper">{contact.phone}</a></div>
          <div><a href={contact.emailHref} class="ulink text-sm text-paper/82">{contact.email}</a></div>
          <div class="label pt-2 text-paper/45">{contact.airport}</div>
          <div class="label text-paper/45">{contact.city}</div>
        </address>
      </section>
    </div>

    <div class="flex flex-col items-start justify-between gap-3 pt-8 sm:flex-row sm:items-center">
      <span class="label text-paper/40">© {year} {brand.name} · {instructor.business}. All rights reserved.</span>
      <span class="label text-paper/40">Lake City · Florida · USA</span>
    </div>
  </div>
</footer>
