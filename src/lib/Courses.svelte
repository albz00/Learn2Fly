<script>
  import SectionHead from './SectionHead.svelte';
  import Check from './Check.svelte';
  import { courses } from './data.js';
</script>

<section id="courses" class="site-shell section-space">
  <SectionHead kicker="Our Courses" title="Training paths built for real completion." />

  <div class="radius-ui section-flow grid gap-5 md:grid-cols-2">
    {#each courses as c}
      <article
        id={c.slug}
        class="card-elevated group flex flex-col p-8 transition-colors hover:bg-paper-2/55 lg:p-10"
      >
        {#if c.image}
          <div class="radius-ui mb-6 overflow-hidden">
            <img
              src={c.image}
              alt={c.imageAlt}
              class="w-full object-cover"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
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

        {#if c.prereqs}
          <div class="mt-7 border-t border-line pt-6">
            <div class="label mb-4 text-signal">Prerequisites</div>
            <ul class="flex flex-wrap gap-2">
              {#each c.prereqs as pre}
                <li class="radius-ui bg-paper-2/70 px-3 py-1.5 text-[0.85rem] leading-snug text-soft">
                  {pre}
                </li>
              {/each}
            </ul>
          </div>
        {/if}

        <a
          href="/contact"
          class="ulink mt-8 inline-flex w-fit text-sm font-medium text-accent"
        >
          Start this training &#8594;
        </a>
      </article>
    {/each}
  </div>
</section>
