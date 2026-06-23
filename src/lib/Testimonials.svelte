<script>
  import SectionHead from './SectionHead.svelte';
  import StarRating from './StarRating.svelte';
  import { testimonials } from './data.js';

  const featured = testimonials[0];
  const rest = testimonials.slice(1);
</script>

<section class="border-t border-line">
  <div class="site-shell section-space">
    <SectionHead kicker="Student Reviews" title="Students who wanted structure, not guesswork." />

    <!-- featured -->
    <figure
      class="card-elevated section-flow relative overflow-hidden p-8 sm:p-12 lg:p-14"
    >
      <div class="absolute right-7 top-4 font-display text-[4rem] leading-none text-signal/30 sm:text-[5rem]">&ldquo;</div>
      <StarRating rating={featured.rating} size="md" />
      <blockquote class="relative mt-5 max-w-3xl text-2xl font-light leading-snug text-ink sm:text-3xl lg:text-[2.05rem]">
        {featured.quote}
      </blockquote>
      <figcaption class="mt-8 flex items-center gap-4">
        <span class="h-px w-10 bg-signal"></span>
        <span class="display text-lg text-ink">{featured.name}</span>
        <span class="label text-soft">{featured.detail}</span>
      </figcaption>
    </figure>

    <!-- supporting -->
    <div class="section-flow-tight grid gap-6 md:grid-cols-3">
      {#each rest as t}
        <figure
          class="card-elevated radius-ui flex flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-1"
        >
          <StarRating rating={t.rating} />
          <blockquote class="mt-4 text-base leading-relaxed text-ink/85">
            {t.quote}
          </blockquote>
          <figcaption class="mt-6 border-t border-line pt-4">
            <div class="display text-base text-ink">{t.name}</div>
            <div class="label mt-1 text-soft">{t.detail}</div>
          </figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>
