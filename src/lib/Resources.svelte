<script>
  import SectionHead from './SectionHead.svelte';
  import { resources } from './data.js';
</script>

<section id="resources" class="border-t border-line bg-paper-2/50">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead index="05" kicker="Student Resources" title="Everything you need, in one place." />

    <p class="mt-8 max-w-xl text-base leading-relaxed text-soft">
      A curated shelf of the official handbooks, standards and tools your training will actually rely on.
      Bookmark this page — you will come back to it often.
    </p>

    <div class="mt-14 grid gap-px border border-line bg-line lg:grid-cols-3">
      {#each resources as col}
        <div class="bg-paper p-7 lg:p-8">
          <h3 class="display mb-6 text-xl text-ink">{col.group}</h3>
          <ul class="space-y-px">
            {#each col.items as it}
              <li>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-start justify-between gap-4 border-t border-line py-4 transition-colors hover:bg-paper-2/70"
                >
                  <span class="flex-1">
                    <span class="block text-[0.95rem] leading-snug text-ink transition-transform duration-300 group-hover:translate-x-1">
                      {it.label}
                    </span>
                    <span class="label mt-1.5 block text-soft">{it.meta}</span>
                  </span>
                  <span class="mt-0.5 text-soft transition-all duration-300 group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
