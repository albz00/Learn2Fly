<script>
  import { contact, images, instructor } from './data.js';

  const heroImages = [
    {
      src: images.aircraftExterior,
      alt: '1969 Piper Cherokee 140 N833WT on the ramp at Lake City Gateway Airport',
      caption: 'N833WT · Cherokee 140',
      featured: true,
    },
    {
      src: images.aircraftCockpit,
      alt: 'Modernized instrument panel of the Learn2FlyFlorida Cherokee 140 with Garmin avionics',
    },
    {
      src: images.instructor,
      alt: instructor.photoAlt,
    },
  ];
</script>

<section id="home" class="relative overflow-hidden bg-ink text-paper">
  <!-- atmospheric glows for depth -->
  <div class="pointer-events-none absolute inset-0" aria-hidden="true">
    <div class="absolute -right-40 -top-48 h-[42rem] w-[42rem] rounded-full bg-signal/15 blur-[120px]"></div>
    <div class="absolute -bottom-56 -left-40 h-[40rem] w-[40rem] rounded-full bg-accent/40 blur-[130px]"></div>
  </div>

  <!-- dashed flight path -->
  <svg
    class="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1200 700"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <path
      d="M-50 620 C 250 600, 430 470, 640 360 S 1050 120, 1280 60"
      fill="none"
      stroke="var(--color-signal)"
      stroke-width="1.5"
      stroke-dasharray="2 8"
      stroke-linecap="round"
      opacity="0.55"
    />
    <circle cx="640" cy="360" r="3.5" fill="var(--color-signal)" />
    <circle cx="640" cy="360" r="11" fill="none" stroke="var(--color-signal)" stroke-width="1" opacity="0.5" />
  </svg>

  <div class="relative mx-auto max-w-[1240px] px-6 lg:px-10">
    <div class="grid min-h-[100svh] items-start gap-12 pb-20 pt-28 lg:grid-cols-12 lg:gap-16 lg:pt-32">
      <div class="lg:col-span-7 lg:pt-4">
        <h1 class="display max-w-4xl text-[clamp(2.35rem,6.5vw,5rem)] text-paper">
          Become the pilot<br />
          you keep <span class="text-signal">promising</span><br />
          yourself.
        </h1>

        <p class="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
          From your first discovery flight to your flight-instructor certificate, taught one-on-one out of
          Lake City, Florida. One airplane. One instructor. One standard.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#courses"
            class="rounded-lg border border-paper bg-paper px-7 py-3.5 text-sm text-ink transition-colors hover:bg-transparent hover:text-paper"
          >
            Explore the courses
          </a>
          <a
            href="#contact"
            class="rounded-lg border border-line-dark px-7 py-3.5 text-sm text-paper transition-colors hover:border-paper"
          >
            Book a discovery flight
          </a>
        </div>
      </div>

      <div class="relative -mt-2 space-y-4 lg:col-span-5 lg:-mt-6">
        <div
          class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line-dark shadow-[0_40px_90px_-50px_rgba(0,0,0,0.8)]"
        >
          <img
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            class="h-full w-full object-cover"
            fetchpriority="high"
            decoding="async"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 font-mono text-xs text-paper/80">{heroImages[0].caption}</div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each heroImages.slice(1) as image}
            <div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line-dark">
              <img
                src={image.src}
                alt={image.alt}
                class="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"></div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- flight-data strip -->
    <div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark sm:grid-cols-4">
      {#each [['LOCATION', contact.city], ['HOME FIELD', 'KLCQ'], ['FLEET', 'Cherokee 140'], ['INSTRUCTION', 'One-on-one']] as [k, v]}
        <div class="bg-ink px-5 py-6">
          <div class="label text-paper/45">{k}</div>
          <div class="mt-2 font-mono text-sm text-paper">{v}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
