<script>
  import SectionHead from './SectionHead.svelte';
  import { aircraftSpecs, images } from './data.js';
</script>

<section id="aircraft" class="site-shell section-space">
  <SectionHead kicker="Training Aircraft" title="One training platform, maintained to a high standard." />

  <div class="section-flow grid gap-12 lg:grid-cols-12 lg:gap-16">
    <!-- visual panel -->
    <div class="space-y-4 lg:col-span-7">
      <div class="radius-ui relative aspect-[16/10] overflow-hidden bg-ink">
        <img
          src={images.aircraftExterior}
          alt="1969 Piper Cherokee 140 N833WT on the ramp at Lake City Gateway Airport"
          class="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="radius-ui relative aspect-[4/3] overflow-hidden">
          <img
            src={images.aircraftCockpit}
            alt="Modernized instrument panel of the Learn2FlyFlorida Cherokee 140 with Garmin avionics"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </div>
        <div class="radius-ui relative aspect-[4/3] overflow-hidden">
          <img
            src={images.instrumentCloseUp}
            alt="Primary flight instruments in the Cherokee 140 including digital attitude indicator and steam gauges"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </div>
      </div>
    </div>

    <!-- details -->
    <div class="lg:col-span-5">
      <div class="card-elevated p-7 sm:p-8">
        <h3 class="display text-3xl text-ink">Beautiful 1969 Piper Cherokee 140</h3>
        <p class="mt-5 text-base leading-relaxed text-soft">
          A proven, forgiving low-wing trainer upgraded with modern avionics, a refreshed interior, and
          performance-minded systems. Because students train in one consistent airplane, familiarity and confidence
          build faster and hold up better on checkride day.
        </p>

        <dl class="radius-ui mt-10 grid grid-cols-2 gap-px overflow-hidden bg-line">
          {#each aircraftSpecs as s}
            <div class="surface-paper radius-ui px-5 py-5">
              <dt class="label text-soft">{s.k}</dt>
              <dd class="mt-1.5 font-mono text-sm text-ink">{s.v}</dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  </div>
</section>
