<script>
  import { onMount } from 'svelte';
  import { images } from './data.js';

  const heroSlides = [
    images.aircraftExterior,
    images.planeHero,
    images.aircraftCockpit,
  ];

  const heroOverlay =
    'linear-gradient(120deg, rgba(8,24,40,0.92) 14%, rgba(12,36,58,0.76) 58%, rgba(14,40,64,0.86) 100%)';

  let {
    title,
    summary,
    primaryCta = null,
    secondaryCta = null,
    image = null,
    imageAlt = '',
    imageClass = '',
  } = $props();

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

<section class="bg-flight-night relative overflow-hidden text-paper">
  <div class="absolute inset-0" aria-hidden="true">
    {#each heroSlides as slide, i}
      <div
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
        style={`background-image:${heroOverlay},url('${slide}');opacity:${i === activeSlide ? 1 : 0}`}
      ></div>
    {/each}
  </div>
  <div class="pointer-events-none absolute inset-0" aria-hidden="true">
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,36,59,0.3),rgba(13,36,59,0.06))]"></div>
  </div>

  <div class="site-shell relative pb-16 pt-42 lg:pb-18 lg:pt-48">
    <div class="relative">
      <div>
        <span class="micro-head text-paper/84">
          <img
            src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/e414d6b0-d6ea-4429-9bef-62fdcb734000/public"
            alt="Learn2FlyFlorida"
            class="h-3.5 w-auto object-contain sm:h-4"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </span>
        <h1 class="display mt-6 max-w-3xl text-[clamp(1.95rem,4.5vw,3.25rem)] leading-[1.14] text-paper">
          {title}
        </h1>
        <p class="mt-7 max-w-2xl text-base leading-relaxed text-paper/76 sm:text-lg">{summary}</p>
        {#if image}
          <img
            src={image}
            alt={imageAlt}
            class={`mt-5 h-[4.25rem] w-auto max-w-[9.5rem] object-contain object-left opacity-90 sm:mt-6 sm:h-20 sm:max-w-[10.5rem] md:h-[5.5rem] md:max-w-[11.5rem] lg:pointer-events-none lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[102%] lg:w-[min(37vw,29rem)] lg:max-w-none lg:object-bottom lg:opacity-100 xl:h-[106%] ${imageClass}`}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        {/if}
        {#if primaryCta || secondaryCta}
          <div class="mt-6 flex flex-wrap items-center gap-4 lg:mt-8">
            {#if primaryCta}
              <a href={primaryCta.href} class="btn-gradient-signal">{primaryCta.label}</a>
            {/if}
            {#if secondaryCta}
              <a href={secondaryCta.href} class="btn-gradient-light">{secondaryCta.label}</a>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
