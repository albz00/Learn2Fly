<script>
  import { onMount } from 'svelte';
  import { brand, images, seo } from './lib/data.js';
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  import Faq from './lib/Faq.svelte';
  import Courses from './lib/Courses.svelte';
  import Rates from './lib/Rates.svelte';
  import Aircraft from './lib/Aircraft.svelte';
  import Resources from './lib/Resources.svelte';
  import Testimonials from './lib/Testimonials.svelte';
  import Contact from './lib/Contact.svelte';
  import Legal from './lib/Legal.svelte';
  import Footer from './lib/Footer.svelte';
  import PageBanner from './lib/PageBanner.svelte';
  import HomeDeck from './lib/HomeDeck.svelte';
  import LoadingScreen from './lib/LoadingScreen.svelte';

  const routeConfigs = {
    '/about': {
      section: About,
      banner: {
        title: 'Train with one instructor, one standard, one clear plan.',
        summary:
          'No rotating roster and no generic lesson flow. You work directly with an airline-experienced, Gold Seal instructor from first lesson to checkride.',
        primaryCta: { href: '/courses', label: 'View training paths' },
        secondaryCta: { href: '/contact', label: 'Speak with instructor' },
        image: images.aboutMark,
        imageAlt: 'Ralph, Gold Seal flight instructor at Learn2FlyFlorida, in uniform',
      },
      seo: {
        title: `About | ${brand.name}`,
        description:
          'Meet the instructor behind Learn2FlyFlorida and review the FAA certificates, ratings, and training standards used with every student.',
      },
      withTestimonials: false,
      withContact: true,
    },
    '/courses': {
      section: Courses,
      banner: {
        title: 'From first lesson to CFI, each rating has a real roadmap.',
        summary:
          'Course blocks are built around practical outcomes, clear milestones, and checkride readiness rather than just logging time.',
        primaryCta: { href: '/contact', label: 'Reserve a training slot' },
        secondaryCta: { href: '/rates', label: 'Review rates' },
        image: images.coursesMark,
        imageAlt: 'Graduation cap and open book mark representing Learn2FlyFlorida training courses',
      },
      seo: {
        title: `Courses | ${brand.name}`,
        description:
          'Private, Instrument, Commercial, and CFI training paths in Lake City, Florida with one-on-one instruction and practical checkride preparation.',
      },
      withTestimonials: true,
      withContact: true,
    },
    '/rates': {
      section: Rates,
      banner: {
        title: 'Transparent pricing so your budget matches your plan.',
        summary:
          'Aircraft, instruction, ground, and simulator rates are laid out clearly, with operating notes up front so there are no surprises later.',
        primaryCta: { href: '/courses', label: 'Choose your course' },
        secondaryCta: { href: '/contact', label: 'Ask a pricing question' },
        image: images.ratesMark,
        imageAlt: 'Airplane illustration with price tag representing flight training rates',
      },
      seo: {
        title: `Rates | ${brand.name}`,
        description:
          'Current aircraft rental, instruction, ground, simulator, and discovery-flight pricing for Learn2FlyFlorida in Lake City.',
      },
      withTestimonials: false,
      withContact: true,
    },
    '/aircraft': {
      section: Aircraft,
      banner: {
        title: 'A proven Cherokee platform, upgraded for serious training.',
        summary:
          'You train in one airplane that is modernized, well understood, and consistently available, so your learning stays focused and efficient.',
        primaryCta: { href: '/rates', label: 'See aircraft rates' },
        secondaryCta: { href: '/contact', label: 'Ask about scheduling' },
        image: images.aircraftProfile,
        imageAlt: 'Learn2FlyFlorida 1969 Piper Cherokee 140 N833WT',
      },
      seo: {
        title: `Aircraft | ${brand.name}`,
        description:
          'Explore Learn2FlyFlorida training aircraft details, avionics upgrades, and rental information for the Piper Cherokee 140.',
      },
      withTestimonials: false,
      withContact: true,
    },
    '/resources': {
      section: Resources,
      banner: {
        title: 'Use the exact handbooks and tools your training depends on.',
        summary:
          'This library keeps FAA references, weather tools, and pre-training requirements in one place so you can prep with the right material every time.',
        primaryCta: { href: '/faq', label: 'Read common questions' },
        secondaryCta: { href: '/contact', label: 'Ask before you start' },
        image: images.resourcesMark,
        imageAlt: 'Stack of books mark representing Learn2FlyFlorida training resources',
      },
      seo: {
        title: `Resources | ${brand.name}`,
        description:
          'FAA handbooks, ACS links, weather tools, and essential student resources curated for Learn2FlyFlorida students.',
      },
      withTestimonials: false,
      withContact: true,
    },
    '/faq': {
      section: Faq,
      banner: {
        title: 'Straight answers on schedule, standards, and expectations.',
        summary:
          'Before committing to training, review how pacing, checkrides, and written-exam prep are handled so you know exactly what to expect.',
        primaryCta: { href: '/contact', label: 'Ask your question directly' },
        secondaryCta: { href: '/courses', label: 'Compare course options' },
        image: images.faqMark,
        imageAlt: 'Speech bubbles with a question mark representing Learn2FlyFlorida FAQ',
      },
      seo: {
        title: `FAQ | ${brand.name}`,
        description:
          'Read Learn2FlyFlorida FAQs on training start dates, practical exams, instrument conditions, payment structure, and written exam expectations.',
      },
      withTestimonials: false,
      withContact: true,
    },
    '/contact': {
      section: Contact,
      banner: {
        title: 'Talk directly with the instructor who will train you.',
        summary:
          'Use the form, call, or email to reserve a training slot, schedule a discovery flight, or map your path from private pilot through CFI.',
        primaryCta: { href: '/courses', label: 'View course options' },
        secondaryCta: { href: '/rates', label: 'Review pricing first' },
        image: images.contactMark,
        imageAlt: 'Envelope and phone icon representing contacting Learn2FlyFlorida',
      },
      seo: {
        title: `Contact | ${brand.name}`,
        description:
          'Contact Learn2FlyFlorida in Lake City to schedule a discovery flight, reserve training, or ask questions about pilot certification paths.',
      },
      withTestimonials: false,
      withContact: false,
    },
    '/legal': {
      section: Legal,
      banner: {
        title: 'Policies and standards that support safe, transparent training.',
        summary:
          'Review the privacy, terms, cookie, accessibility, and safety statements used for Learn2FlyFlorida operations and communication.',
        primaryCta: { href: '/contact', label: 'Contact for policy requests' },
        secondaryCta: { href: '/faq', label: 'Browse common questions' },
      },
      seo: {
        title: `Legal | ${brand.name}`,
        description:
          'Read Learn2FlyFlorida legal and compliance information including privacy policy, terms of use, cookie notice, accessibility statement, and safety disclaimer.',
      },
      withTestimonials: false,
      withContact: false,
    },
  };

  const supportedPaths = new Set(['/', ...Object.keys(routeConfigs)]);

  function normalizePath(pathname) {
    if (!pathname) return '/';
    const lower = pathname.toLowerCase();
    if (lower === '/') return '/';
    return lower.endsWith('/') ? lower.slice(0, -1) : lower;
  }

  function getCurrentPath() {
    if (typeof window === 'undefined') return '/';
    return normalizePath(window.location.pathname);
  }

  function getCurrentHash() {
    if (typeof window === 'undefined') return '';
    return window.location.hash || '';
  }

  let currentPath = $state(getCurrentPath());
  let currentHash = $state(getCurrentHash());
  let activeRoute = $derived(routeConfigs[currentPath] ?? null);

  function setMetaName(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function setMetaProperty(property, content) {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function setCanonical(href) {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', 'canonical');
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  function updateSeo(path) {
    const routeSeo =
      path === '/'
        ? { title: seo.title, description: seo.description }
        : activeRoute?.seo ?? { title: `${brand.name} | Flight Training`, description: seo.description };

    const canonical = `${seo.siteUrl}${path === '/' ? '/' : path}`;

    document.title = routeSeo.title;
    setMetaName('description', routeSeo.description);
    setMetaProperty('og:title', routeSeo.title);
    setMetaProperty('og:description', routeSeo.description);
    setMetaProperty('og:url', canonical);
    setMetaName('twitter:title', routeSeo.title);
    setMetaName('twitter:description', routeSeo.description);
    setCanonical(canonical);
  }

  function syncLocationState() {
    currentPath = getCurrentPath();
    currentHash = getCurrentHash();
  }

  function scrollToHash(hash) {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleInternalNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const anchor = event.target.closest('a');
    if (!anchor) return;
    if (anchor.target && anchor.target !== '_self') return;
    if (anchor.hasAttribute('download')) return;

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    const url = new URL(anchor.href, window.location.origin);
    if (url.origin !== window.location.origin) return;

    const nextPath = normalizePath(url.pathname);
    if (!supportedPaths.has(nextPath)) return;

    event.preventDefault();

    const nextHash = url.hash || '';
    const currentUrl = `${currentPath}${currentHash}`;
    const nextUrl = `${nextPath}${nextHash}`;
    if (nextUrl === currentUrl) {
      requestAnimationFrame(() => {
        scrollToHash(nextHash);
      });
      return;
    }

    window.history.pushState({}, '', nextUrl);
    syncLocationState();

    requestAnimationFrame(() => {
      scrollToHash(nextHash);
    });
  }

  onMount(() => {
    syncLocationState();
    updateSeo(currentPath);
    requestAnimationFrame(() => scrollToHash(currentHash));

    const onPopState = () => {
      syncLocationState();
      requestAnimationFrame(() => scrollToHash(currentHash));
    };

    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', handleInternalNavigation);

    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', handleInternalNavigation);
    };
  });

  $effect(() => {
    if (typeof document === 'undefined') return;
    updateSeo(currentPath);
  });
</script>

<LoadingScreen />

<Navbar {currentPath} />

<main class="page-flow">
  {#if currentPath === '/'}
    <Hero />
    <HomeDeck />
    <Testimonials />
    <Contact />
  {:else if activeRoute}
    <PageBanner {...activeRoute.banner} />
    {@const ActiveSection = activeRoute.section}
    <ActiveSection />
    {#if activeRoute.withTestimonials}
      <Testimonials />
    {/if}
    {#if activeRoute.withContact}
      <Contact />
    {/if}
  {:else}
    <PageBanner
      title="This route does not exist on the current build."
      summary="Use the primary navigation to continue, or head back to the homepage."
      primaryCta={{ href: '/', label: 'Return home' }}
      secondaryCta={{ href: '/contact', label: 'Contact Learn2FlyFlorida' }}
    />
    <Contact />
  {/if}
</main>

<Footer />
