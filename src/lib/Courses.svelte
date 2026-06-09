<script>
  import SectionHead from './SectionHead.svelte';
  import Check from './Check.svelte';
  import { courses } from './data.js';
</script>

<section id="courses" class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
  <SectionHead title="Every certificate, one flight line." />

  <div class="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
    {#each courses as c}
      <article class="group flex flex-col bg-paper p-8 transition-colors hover:bg-paper-2/60 lg:p-10">
        {#if c.image}
          <div class="mb-6 overflow-hidden rounded-xl border border-line">
            <img
              src={c.image}
              alt={c.imageAlt}
              class="w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        {/if}

        <div class="flex items-center justify-between">
          <span class="h-2.5 w-2.5 bg-signal"></span>
          <span class="label text-soft">{c.hours}</span>
        </div>

        <h3 class="display mt-6 text-3xl text-ink lg:text-[2.5rem]">{c.name}</h3>
        <p class="mt-4 max-w-md text-base leading-relaxed text-soft">{c.summary}</p>

        <ul class="mt-7 space-y-3 border-t border-line pt-6">
          {#each c.points as p}
            <li class="flex items-start gap-3 text-[0.95rem] text-ink/85">
              <Check />
              <span>{p}</span>
            </li>
          {/each}
        </ul>

        <a
          href="#contact"
          class="ulink mt-8 inline-flex w-fit text-sm text-ink"
        >
          Start this training →
        </a>
      </article>
    {/each}
  </div>
</section>
