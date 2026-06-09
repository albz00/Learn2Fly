<script>
  import SectionHead from './SectionHead.svelte';
  import StarRating from './StarRating.svelte';
  import { testimonials } from './data.js';

  const featured = testimonials[0];
  const rest = testimonials.slice(1);
</script>

<section class="border-t border-line bg-paper-2/40">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead kicker="Testimonials" title="Pilots who started exactly where you are." />

    <!-- featured -->
    <figure class="relative mt-14 overflow-hidden border border-line bg-paper p-8 shadow-[0_30px_80px_-50px_rgba(16,21,27,0.55)] sm:p-12 lg:p-16">
      <div class="absolute right-8 top-2 font-display text-[9rem] leading-none text-signal/15 sm:text-[12rem]">&ldquo;</div>
      <StarRating rating={featured.rating} size="md" />
      <blockquote class="relative mt-5 max-w-3xl text-2xl font-light leading-snug text-ink sm:text-3xl lg:text-[2.25rem]">
        {featured.quote}
      </blockquote>
      <figcaption class="mt-8 flex items-center gap-4">
        <span class="h-px w-10 bg-signal"></span>
        <span class="display text-lg text-ink">{featured.name}</span>
        <span class="label text-soft">{featured.detail}</span>
      </figcaption>
    </figure>

    <!-- supporting -->
    <div class="mt-6 grid gap-6 md:grid-cols-3">
      {#each rest as t}
        <figure class="flex flex-col justify-between border-t-2 border-signal bg-paper p-7 shadow-[0_20px_60px_-50px_rgba(16,21,27,0.5)] transition-transform duration-300 hover:-translate-y-1">
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
