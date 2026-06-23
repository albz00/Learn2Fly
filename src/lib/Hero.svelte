<script>
  import { images } from './data.js';

  const instructorPortrait =
    'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f66b1441-e406-4cf7-35ab-24f8a5e48700/public';
</script>

<section id="home" class="bg-flight-night relative overflow-hidden text-paper">
  <div
    class="absolute inset-0 bg-cover bg-center"
    style={`background-image:linear-gradient(120deg, rgba(11,31,51,0.86) 14%, rgba(17,46,74,0.64) 58%, rgba(20,52,82,0.78) 100%),url('${images.aircraftExterior}')`}
    aria-hidden="true"
  ></div>
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,36,59,0.3),rgba(13,36,59,0.06))]" aria-hidden="true"></div>

  <div class="site-shell relative">
    <div class="relative min-h-[88svh] pb-12 pt-44 lg:pb-16 lg:pt-48">
      <div class="relative">
        <div>
          <h1 class="display max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.14] text-paper">
            Flight training with a clear plan from first lesson to checkride.
          </h1>

          <p class="mt-8 max-w-xl text-lg leading-relaxed text-paper/82">
            Learn2FlyFlorida delivers private, instrument, commercial, and CFI training through one instructor,
            one proven aircraft, and standards designed for real-world confidence.
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
          alt="Learn2FlyFlorida brand mark"
          class="pointer-events-none absolute bottom-0 right-0 hidden h-[102%] w-auto max-w-[min(37vw,29rem)] object-contain object-bottom drop-shadow-[0_18px_40px_rgba(4,16,28,0.55)] lg:block xl:h-[106%]"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>
</section>
