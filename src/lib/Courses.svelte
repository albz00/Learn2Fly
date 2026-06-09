<script>
  import SectionHead from './SectionHead.svelte';
  import { courses } from './data.js';
</script>

<section id="courses" class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
  <SectionHead index="02" kicker="Courses" title="Every certificate, one flight line." />

  <div class="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
    {#each courses as c}
      <article class="group flex flex-col bg-paper p-8 transition-colors hover:bg-paper-2/60 lg:p-10">
        <div class="flex items-start justify-between">
          <span class="label text-signal">{c.id}</span>
          <span class="label text-soft">{c.hours}</span>
        </div>

        <h3 class="display mt-8 text-3xl text-ink lg:text-[2.5rem]">{c.name}</h3>
        <p class="mt-4 max-w-md text-base leading-relaxed text-soft">{c.summary}</p>

        <ul class="mt-7 space-y-2.5 border-t border-line pt-6">
          {#each c.points as p}
            <li class="flex items-start gap-3 text-[0.95rem] text-ink/85">
              <span class="mt-2 h-1 w-1 shrink-0 bg-signal"></span>
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
