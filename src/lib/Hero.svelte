<script>
  import { onMount } from 'svelte';
  import { images } from './data.js';

  const instructorPortrait =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/4d3f5e2d-c440-4a6c-19c7-fad6ed736400/public';

  const heroSlides = [
    images.aircraftExterior,
    images.planeHero,
    images.aircraftCockpit,
  ];

  const heroOverlay =
    'linear-gradient(120deg, rgba(8,24,40,0.92) 14%, rgba(12,36,58,0.76) 58%, rgba(14,40,64,0.86) 100%)';

  let activeSlide = 0;

  onMount(() => {
    heroSlides.forEach((src) => {
      const preload = new Image();
      preload.src = src;
    });

    const interval = setInterval(() => {
      activeSlide = (activeSlide + 1) % heroSlides.length;
    }, 6000);

    return () => clearInterval(interval);
  });
</script>

<section id="home" class="bg-flight-night relative overflow-hidden text-paper">
  <div class="absolute inset-0" aria-hidden="true">
    {#each heroSlides as slide, i}
      <div
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
        style={`background-image:${heroOverlay},url('${slide}');opacity:${i === activeSlide ? 1 : 0}`}
      ></div>
    {/each}
  </div>
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,36,59,0.3),rgba(13,36,59,0.06))]" aria-hidden="true"></div>

  <div class="site-shell relative">
    <div class="relative min-h-[88svh] pb-12 pt-44 lg:pb-16 lg:pt-48">
      <div class="relative">
        <div>
          <h1 class="display max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.14] text-paper">
            Flight training with a clear plan from first lesson to checkride.
          </h1>

          <p class="mt-8 max-w-xl text-lg leading-relaxed text-paper/82">
            Learn2FlyFlorida is an FAA Part 61 flight school in Lake City, providing instruction for every
            pilot certificate, including Private Pilot, Instrument rating, Commercial Pilot, and Certified Flight Instructor.
          </p>

          <p class="mt-4 max-w-xl text-base leading-relaxed text-paper/72">
            Career-bound or flying for yourself, a solid Private Pilot foundation is the key to your
            Instrument and Commercial certificates.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/courses"
              class="btn-gradient-signal transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Training Programs
            </a>
            <a
              href="/contact"
              class="btn-gradient-light transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Discovery Flight
            </a>
          </div>
        </div>

        <img
          src={instructorPortrait}
          alt="Sketch of an airplane circling a globe representing Learn2FlyFlorida flight training"
          class="pointer-events-none absolute bottom-0 right-0 hidden h-[102%] w-[min(37vw,29rem)] object-contain object-bottom lg:block xl:h-[106%]"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>
</section>
