<script>
  import SectionHead from './SectionHead.svelte';
  import { resources } from './data.js';

  let n = 0;
  const sections = resources.map((group) => ({
    group: group.group,
    items: group.items.map((item) => ({
      ...item,
      num: String(++n).padStart(2, '0'),
    })),
  }));
</script>

<section id="resources" class="border-t border-line bg-paper-2/50">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead kicker="Student Resources" title="Quick reference index." />

    <p class="mt-8 max-w-xl text-base leading-relaxed text-soft">
      Official handbooks, standards and tools — bookmark this list and come back whenever you need a link.
    </p>

    <div class="mt-14 border border-line bg-paper">
      {#each sections as section}
        <div class="border-b border-line last:border-b-0">
          <div class="border-b border-line bg-paper-2/60 px-6 py-4 lg:px-8">
            <span class="label text-signal">{section.group}</span>
          </div>

          {#each section.items as it}
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-baseline gap-4 border-b border-line px-6 py-5 transition-colors last:border-b-0 hover:bg-paper-2/50 lg:gap-8 lg:px-8"
            >
              <span class="label w-8 shrink-0 text-soft">{it.num}</span>

              <span class="min-w-0 flex-1 text-[0.95rem] leading-snug text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                {it.label}
              </span>

              <span class="label hidden shrink-0 text-soft md:block">{it.meta}</span>

              <span class="shrink-0 text-soft transition-all duration-300 group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
