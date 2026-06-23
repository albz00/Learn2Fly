<script>
  let {
    title,
    summary,
    primaryCta = null,
    secondaryCta = null,
    image = null,
    imageAlt = '',
  } = $props();
</script>

<section class="bg-flight-night relative overflow-hidden text-paper">
  <div class="pointer-events-none absolute inset-0" aria-hidden="true">
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]"></div>
  </div>

  <div class="site-shell relative pb-16 pt-42 lg:pb-18 lg:pt-48">
    <div class="relative">
      <div>
        <span class="micro-head text-paper/84">
          <span class="label">Learn2FlyFlorida</span>
        </span>
        <h1 class="display mt-6 max-w-3xl text-[clamp(1.95rem,4.5vw,3.25rem)] leading-[1.14] text-paper">
          {title}
        </h1>
        <p class="mt-7 max-w-2xl text-base leading-relaxed text-paper/76 sm:text-lg">{summary}</p>
        {#if primaryCta || secondaryCta}
          <div class="mt-8 flex flex-wrap items-center gap-4">
            {#if primaryCta}
              <a href={primaryCta.href} class="btn-gradient-signal">{primaryCta.label}</a>
            {/if}
            {#if secondaryCta}
              <a href={secondaryCta.href} class="btn-gradient-light">{secondaryCta.label}</a>
            {/if}
          </div>
        {/if}
      </div>

      {#if image}
        <img
          src={image}
          alt={imageAlt}
          class="pointer-events-none absolute bottom-0 right-0 hidden h-[102%] w-auto max-w-[min(37vw,29rem)] object-contain object-bottom drop-shadow-[0_18px_40px_rgba(4,16,28,0.55)] lg:block xl:h-[106%]"
          loading="eager"
          decoding="async"
        />
      {/if}
    </div>
  </div>
</section>
