<script>
  import SectionHead from './SectionHead.svelte';
  import { aircraftSpecs, images } from './data.js';
</script>

<section id="aircraft" class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
  <SectionHead title="One airplane. Beautifully kept." />

  <div class="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
    <!-- visual panel -->
    <div class="space-y-4 lg:col-span-7">
      <div class="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line-dark bg-ink">
        <img
          src={images.aircraftExterior}
          alt="1969 Piper Cherokee 140 N833WT on the ramp at Lake City Gateway Airport"
          class="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"></div>
        <div class="absolute left-6 top-6 label text-paper/70">TRAINING AIRCRAFT</div>
        <div class="absolute bottom-6 left-6 font-mono text-sm text-paper">Piper Cherokee 140 · N833WT</div>
        <div class="absolute bottom-6 right-6 label text-signal">$150 / HR WET</div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
          <img
            src={images.aircraftCockpit}
            alt="Modernized instrument panel of the Learn2FlyFlorida Cherokee 140 with Garmin avionics"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
          <img
            src={images.instrumentCloseUp}
            alt="Primary flight instruments in the Cherokee 140 including digital attitude indicator and steam gauges"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>

    <!-- details -->
    <div class="lg:col-span-5">
      <h3 class="display text-3xl text-ink">Beautiful 1969 Piper Cherokee 140</h3>
      <p class="mt-5 text-base leading-relaxed text-soft">
        A docile, forgiving low-wing trainer that has been thoroughly modernized with all-new avionics, a fresh
        interior, and a PowerFlow exhaust for better performance and economy. It is the only airplane you will
        train in, so you will know it intimately by checkride day.
      </p>

      <dl class="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
        {#each aircraftSpecs as s}
          <div class="bg-paper px-5 py-5">
            <dt class="label text-soft">{s.k}</dt>
            <dd class="mt-1.5 font-mono text-sm text-ink">{s.v}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</section>
