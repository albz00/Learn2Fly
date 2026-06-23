<script>
  import SectionHead from './SectionHead.svelte';
  import Check from './Check.svelte';
  import { rates, rateNotes } from './data.js';
</script>

<section id="rates" class="section-band">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead kicker="Rates & Policies" title="Clear rates and policies, up front." />

    <div class="mt-14 grid gap-14 lg:grid-cols-12">
      <div class="lg:col-span-8">
        <div class="card-elevated divide-y divide-line">
          {#each rates as r}
            <div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-7 py-7">
              <div class="min-w-[14rem] flex-1 pr-2">
                <h3 class="display text-2xl text-ink">{r.item}</h3>
                <p class="mt-1.5 text-sm leading-relaxed text-soft">{r.detail}</p>
              </div>
              <div class="flex items-baseline gap-1.5">
                <span class="display text-4xl text-ink lg:text-5xl">{r.price}</span>
                <span class="label text-soft">{r.unit}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <aside class="lg:col-span-4">
        <div class="card-elevated p-7">
          <div class="label mb-5 text-signal">Fine Print</div>
          <ul class="space-y-4">
            {#each rateNotes as note}
              <li class="flex gap-3 text-sm leading-relaxed text-soft">
                <Check />
                <span>{note}</span>
              </li>
            {/each}
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
