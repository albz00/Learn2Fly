<script>
  import { testimonials } from './data.js';
</script>

<section class="bg-ink text-paper">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <div class="flex items-end justify-between gap-6 border-b border-line-dark pb-6">
      <div>
        <div class="label mb-4 flex items-center gap-3 text-signal">
          <span>06</span>
          <span class="h-px w-8 bg-line-dark"></span>
          <span class="text-paper/60">Testimonials</span>
        </div>
        <h2 class="display max-w-2xl text-3xl text-paper sm:text-4xl md:text-5xl">
          Pilots who started exactly where you are.
        </h2>
      </div>
    </div>

    <div class="mt-14 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2">
      {#each testimonials as t, i}
        <figure class="flex flex-col justify-between bg-ink p-8 lg:p-10">
          <blockquote class="text-lg font-light leading-relaxed text-paper/90 lg:text-xl">
            <span class="text-signal">“</span>{t.quote}<span class="text-signal">”</span>
          </blockquote>
          <figcaption class="mt-8 flex items-center justify-between border-t border-line-dark pt-5">
            <span class="text-sm text-paper">{t.name}</span>
            <span class="label text-paper/45">{t.detail}</span>
          </figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>
