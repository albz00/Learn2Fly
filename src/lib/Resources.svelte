<script>
  import SectionHead from './SectionHead.svelte';
  import { resources } from './data.js';
</script>

<section id="resources" class="bg-ink text-paper">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead dark title="Everything you need, in one place." />

    <p class="mt-8 max-w-xl text-base leading-relaxed text-paper/65">
      A curated shelf of the official handbooks, standards and tools your training will actually rely on.
      Bookmark this page. You will come back to it often.
    </p>

    <div class="mt-14 grid gap-6 lg:grid-cols-3">
      {#each resources as col}
        <div class="flex flex-col border border-line-dark bg-ink-2/60 p-7 transition-colors hover:border-signal/60 lg:p-8">
          <div class="flex items-center gap-3">
            <span class="h-2.5 w-2.5 bg-signal"></span>
            <h3 class="display text-xl text-paper">{col.group}</h3>
          </div>

          <ul class="mt-6 flex-1">
            {#each col.items as it}
              <li>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between gap-4 border-t border-line-dark py-4 transition-colors hover:bg-paper/5"
                >
                  <span class="min-w-0 flex-1">
                    <span class="block text-[0.95rem] leading-snug text-paper transition-transform duration-300 group-hover:translate-x-1">
                      {it.label}
                    </span>
                    <span class="label mt-1.5 block text-paper/40">{it.meta}</span>
                  </span>
                  <span
                    class="shrink-0 text-paper/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                    >&#8599;</span
                  >
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
