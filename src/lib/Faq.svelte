<script>
  import SectionHead from './SectionHead.svelte';
  import { faqs } from './data.js';

  let open = $state(0);
  const toggle = (i) => (open = open === i ? -1 : i);
</script>

<section id="faq" class="border-t border-line bg-paper-2/50">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead kicker="Frequently Asked" title="Questions, answered straight." />

    <div class="mt-12 border-t border-line">
      {#each faqs as item, i}
        <div class="border-b border-line">
          <button
            class="flex w-full items-center gap-6 py-6 text-left"
            onclick={() => toggle(i)}
            aria-expanded={open === i}
          >
            <span class="display flex-1 text-xl text-ink sm:text-2xl">{item.q}</span>
            <span
              class="relative h-3.5 w-3.5 shrink-0 transition-transform duration-300"
              class:rotate-45={open === i}
            >
              <span class="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink"></span>
              <span class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink"></span>
            </span>
          </button>
          <div
            class="grid transition-all duration-300 ease-out"
            style="grid-template-rows:{open === i ? '1fr' : '0fr'}"
          >
            <div class="overflow-hidden">
              <p class="max-w-2xl pb-7 text-base leading-relaxed text-soft">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
