<script>
  import SectionHead from './SectionHead.svelte';
  import { resources } from './data.js';
</script>

<section id="resources" class="bg-flight-night text-paper">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead dark kicker="Student Toolkit" title="The references your training actually uses." />

    <p class="mt-8 max-w-xl text-base leading-relaxed text-paper/65">
      This is the student toolkit: FAA handbooks, ACS standards, medical and IACRA links, and day-of-flight
      weather resources. Keep it open and build your workflow around it.
    </p>

    <div class="mt-14 grid gap-6 lg:grid-cols-3">
      {#each resources as col}
        <div class="radius-ui flex flex-col border border-paper/14 bg-ink-2/62 p-7 backdrop-blur-sm transition-colors lg:p-8">
          <div class="flex items-center gap-3">
            <span class="h-2.5 w-2.5 rounded-full bg-signal"></span>
            <h3 class="display text-xl text-paper">{col.group}</h3>
          </div>

          <ul class="mt-6 flex-1">
            {#each col.items as it}
              <li>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between gap-4 border-t border-line-dark py-4 transition-colors hover:bg-paper/6"
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
