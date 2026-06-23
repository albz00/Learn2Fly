<script>
  import { onMount } from 'svelte';
  import { images } from './data.js';
  import Check from './Check.svelte';

  const highlights = [
    ['Base Airport', 'KLCQ'],
    ['Instruction', '1:1'],
    ['Aircraft', 'Cherokee 140'],
    ['Track', 'Private to CFI'],
  ];

  const sections = [
    {
      href: '/about',
      label: 'About',
      eyebrow: 'The Instructor',
      title: 'Instructor background and standards',
      body: 'Learn2Fly is intentionally a single-instructor operation. You train with the same airline-experienced, Gold Seal CFI from your first lesson through your checkride, so standards, expectations, and feedback stay consistent the entire way.',
      cta: 'Meet your instructor',
      variant: 'feature',
    },
    {
      href: '/courses',
      label: 'Courses',
      eyebrow: 'Training Pathways',
      title: 'Private through CFI pathways',
      body: 'Every rating from Private through CFI follows a clear, milestone-based syllabus with realistic hour estimates. You always know what you are working toward this lesson, this phase, and this certificate, with no guesswork about what comes next.',
      cta: 'View pathways',
      variant: 'tint',
    },
    {
      href: '/rates',
      label: 'Rates',
      eyebrow: 'Pricing',
      title: 'Pricing that is easy to plan',
      body: 'Aircraft, instruction, simulator, and discovery-flight pricing are laid out plainly with the policies that go with them. You can budget the full training timeline up front instead of discovering costs lesson by lesson.',
      cta: 'See rates',
      variant: 'accent',
    },
    {
      href: '/aircraft',
      label: 'Aircraft',
      eyebrow: 'The Airplane',
      title: 'A single, modernized trainer',
      body: 'All training happens in one modernized 1969 Piper Cherokee 140. Flying a single, familiar airplane day after day builds muscle memory faster and removes the friction of jumping between different panels and handling characteristics.',
      cta: 'Explore the aircraft',
      variant: 'tint',
    },
    {
      href: '/resources',
      label: 'Resources',
      eyebrow: 'Student Toolkit',
      title: 'Reference library for students',
      body: 'The student toolkit pulls the same FAA handbooks, ACS standards, medical and IACRA links, and weather-planning tools used in your training into one place, so your study workflow matches how you actually fly.',
      cta: 'Open library',
      variant: 'feature',
    },
    {
      href: '/faq',
      label: 'FAQ',
      eyebrow: 'Good To Know',
      title: 'Direct answers before you commit',
      body: 'Straight answers to the questions students actually ask: realistic timelines, checkride expectations, scheduling, medical requirements, and what to bring to each lesson, before you ever commit a dollar.',
      cta: 'Read the FAQ',
      variant: 'tint',
    },
  ];

  const slug = (href) => href.replace('/', '');

  let activeIndex = $state(0);
  let panelEls = [];

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeIndex = Number(entry.target.dataset.index);
          }
        }
      },
      // fire when a panel crosses the vertical middle of the viewport
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    for (const el of panelEls) if (el) io.observe(el);
    return () => io.disconnect();
  });
</script>

<section class="section-band deck-section">
  <div
    class="deck-section__media"
    style={`background-image: url(${images.aircraftProfile});`}
    aria-hidden="true"
  ></div>
  <div class="site-shell section-space">
    <div
      id="deck-top"
      class="grid items-end gap-8 border-b border-line pb-8 lg:grid-cols-[1.35fr_1fr]"
    >
      <div>
        <span class="label text-accent/75">Welcome to Learn2Fly</span>
        <h2 class="display mt-4 max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
          Structured training. Clear milestones. Real progress every week.
        </h2>
      </div>
      <ul class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {#each highlights as [label, value]}
          <li class="flex items-start gap-3">
            <Check />
            <span class="text-base leading-snug text-ink">
              <span class="font-semibold">{value}</span>
              <span class="text-soft"> · {label}</span>
            </span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="section-flow-tight deck-layout">
      <nav class="deck-index" aria-label="Explore Learn2Fly">
        <span class="deck-index__head">On this page</span>
        <ul class="deck-index__list">
          {#each sections as section, i}
            <li>
              <a
                class="deck-index__item"
                class:is-active={activeIndex === i}
                href={`#deck-${slug(section.href)}`}
              >
                <span class="deck-index__num">{i + 1}.</span>
                <span class="deck-index__name">{section.label}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <div class="deck-panels">
        {#each sections as section, i}
          <article
            id={`deck-${slug(section.href)}`}
            class="deck-panel deck-panel--{section.variant}"
            data-index={i}
            bind:this={panelEls[i]}
          >
            <header class="deck-panel__head">
              <span class="deck-panel__num">{i + 1}.</span>
              <div class="deck-panel__heading">
                <span class="deck-panel__eyebrow">{section.eyebrow}</span>
                <h3 class="deck-panel__title display">{section.title}</h3>
              </div>
            </header>

            <hr class="deck-panel__rule" />

            <p class="deck-panel__body">{section.body}</p>

            <div class="deck-panel__actions">
              <a class="btn-gradient-paper" href={section.href}>{section.cta}</a>
              <a class="deck-panel__back" href="#deck-top">Back to overview</a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* faint image bleeding in from the right, fading out of the white */
  .deck-section {
    position: relative;
  }

  .deck-section > .site-shell {
    position: relative;
    z-index: 1;
  }

  .deck-section__media {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 38%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    opacity: 0.14;
    pointer-events: none;
    /* fade the left edge of the image into the white background */
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.55) 45%,
      rgba(0, 0, 0, 1) 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.55) 45%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  @media (max-width: 767px) {
    .deck-section__media {
      left: 12%;
      opacity: 0.08;
    }
  }

  .deck-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(1.25rem, 2.5vw, 2rem);
  }

  /* ---- left "on this page" index rail ---- */
  .deck-index {
    display: none;
  }

  .deck-index__head {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  .deck-index__list {
    margin-top: 1.4rem;
    list-style: none;
    padding: 0;
    border-left: 2px solid var(--color-line);
  }

  .deck-index__item {
    position: relative;
    display: flex;
    align-items: baseline;
    gap: 0.85rem;
    padding: 0.55rem 0 0.55rem 1.5rem;
    text-decoration: none;
  }
  /* segment of the guide line marking the active / hovered section */
  .deck-index__item::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 50%;
    height: 0;
    width: 2px;
    border-radius: 999px;
    background: var(--color-accent);
    transform: translateY(-50%);
    transition: height 0.25s ease;
  }
  .deck-index__item:hover::before,
  .deck-index__item.is-active::before {
    height: 1.7rem;
  }

  .deck-index__num {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 700;
    color: rgba(95, 114, 135, 0.6);
    transition: color 0.2s ease;
  }

  .deck-index__name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-ink);
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }

  .deck-index__item:hover .deck-index__num,
  .deck-index__item.is-active .deck-index__num {
    color: var(--color-accent);
  }
  .deck-index__item:hover .deck-index__name,
  .deck-index__item.is-active .deck-index__name {
    color: var(--color-accent);
    transform: translateX(2px);
  }

  /* ---- stacked big section panels ---- */
  .deck-panels {
    display: flex;
    flex-direction: column;
    gap: clamp(1.25rem, 2.4vw, 1.85rem);
  }

  .deck-panel {
    /* adaptive colors so the same markup works on light + dark panels */
    --p-num: var(--color-accent);
    --p-eyebrow: var(--color-soft);
    --p-title: var(--color-ink);
    --p-body: var(--color-soft);
    --p-rule: var(--color-line);
    --p-back: var(--color-soft);
    --p-back-hover: var(--color-accent);

    position: relative;
    overflow: hidden;
    padding: clamp(1.75rem, 3.5vw, 3rem);
    border-radius: var(--radius-card);
    background: linear-gradient(160deg, #f2f6fd 0%, #e7eef9 100%);
    box-shadow: 0 18px 34px -26px rgba(11, 34, 61, 0.42);
    scroll-margin-top: 6.75rem;
  }

  /* ---- dark feature gradient ---- */
  .deck-panel--feature {
    --p-num: var(--color-signal);
    --p-eyebrow: rgba(225, 236, 247, 0.7);
    --p-title: #ffffff;
    --p-body: rgba(225, 236, 247, 0.84);
    --p-rule: rgba(255, 255, 255, 0.16);
    --p-back: rgba(225, 236, 247, 0.7);
    --p-back-hover: #ffffff;
    background:
      radial-gradient(120% 130% at 100% 0%, rgba(47, 118, 182, 0.5) 0%, rgba(20, 47, 74, 0) 58%),
      linear-gradient(160deg, #16324f 0%, #1d4368 55%, #265274 100%);
  }

  /* ---- solid accent gradient ---- */
  .deck-panel--accent {
    --p-num: #ffffff;
    --p-eyebrow: rgba(255, 255, 255, 0.78);
    --p-title: #ffffff;
    --p-body: rgba(231, 241, 251, 0.9);
    --p-rule: rgba(255, 255, 255, 0.24);
    --p-back: rgba(255, 255, 255, 0.78);
    --p-back-hover: #ffffff;
    background: linear-gradient(150deg, #3a84c7 0%, #215f98 100%);
  }

  /* ---- soft tinted gradient ---- */
  .deck-panel--tint {
    background: linear-gradient(155deg, var(--color-paper-3) 0%, var(--color-paper-2) 58%, #ffffff 100%);
  }

  .deck-panel__head {
    display: flex;
    align-items: flex-start;
    gap: clamp(1rem, 2vw, 1.75rem);
  }

  .deck-panel__num {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5vw, 3.4rem);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.03em;
    color: var(--p-num);
  }

  .deck-panel__heading {
    padding-top: 0.2rem;
  }

  .deck-panel__eyebrow {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--p-eyebrow);
  }

  .deck-panel__title {
    margin-top: 0.55rem;
    font-size: clamp(1.5rem, 2.8vw, 2.15rem);
    line-height: 1.12;
    color: var(--p-title);
  }

  .deck-panel__rule {
    margin: clamp(1.4rem, 2.6vw, 2rem) 0;
    border: 0;
    border-top: 1px solid var(--p-rule);
  }

  .deck-panel__body {
    max-width: 60ch;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--p-body);
  }

  .deck-panel__actions {
    margin-top: clamp(1.5rem, 2.8vw, 2.1rem);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
  }

  .deck-panel__back {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--p-back);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .deck-panel__back:hover {
    color: var(--p-back-hover);
  }

  @media (min-width: 768px) {
    .deck-layout {
      grid-template-columns: minmax(11rem, 13rem) 1fr;
      column-gap: clamp(1.75rem, 3.5vw, 3.5rem);
      align-items: start;
    }

    .deck-index {
      display: block;
      position: sticky;
      top: 6.75rem;
    }
  }
</style>
