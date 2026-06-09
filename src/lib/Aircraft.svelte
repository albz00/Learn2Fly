<script>
  import SectionHead from './SectionHead.svelte';
  import { aircraftSpecs } from './data.js';
</script>

<section id="aircraft" class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
  <SectionHead index="04" kicker="Training Aircraft" title="One airplane. Beautifully kept." />

  <div class="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
    <!-- visual panel -->
    <div class="relative lg:col-span-7">
      <div class="relative aspect-[16/10] overflow-hidden border border-line-dark bg-ink">
        <div
          class="absolute inset-0 opacity-[0.08]"
          style="background-image:linear-gradient(var(--color-paper) 1px,transparent 1px),linear-gradient(90deg,var(--color-paper) 1px,transparent 1px);background-size:48px 48px;"
        ></div>

        <!-- line-art low-wing single -->
        <svg class="absolute inset-0 h-full w-full" viewBox="0 0 640 400" aria-hidden="true">
          <g
            fill="none"
            stroke="var(--color-paper)"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.85"
          >
            <!-- fuselage -->
            <path d="M120 210 C 180 196, 360 192, 470 198 C 500 200, 516 206, 520 212 C 516 220, 498 224, 470 226 C 360 232, 180 228, 120 214 Z" />
            <!-- spinner / nose -->
            <path d="M120 210 l -16 2 l 0 10 l 16 2" />
            <!-- canopy -->
            <path d="M300 196 C 312 176, 360 172, 388 192" />
            <!-- low wing -->
            <path d="M250 222 L 322 286 L 372 286 L 332 222" />
            <!-- tail fin -->
            <path d="M484 200 L 520 150 L 536 152 L 520 206" />
            <!-- horizontal stab -->
            <path d="M500 210 L 560 200 L 566 206 L 506 218" />
            <!-- prop -->
            <line x1="104" y1="190" x2="104" y2="244" />
          </g>
        </svg>

        <div class="absolute left-6 top-6 label text-paper/45">FLEET · 01</div>
        <div class="absolute bottom-6 left-6 font-mono text-sm text-paper">Piper Cherokee 140</div>
        <div class="absolute bottom-6 right-6 label text-signal">$150 / HR WET</div>
      </div>
    </div>

    <!-- details -->
    <div class="lg:col-span-5">
      <h3 class="display text-3xl text-ink">Beautiful 1969 Piper Cherokee 140</h3>
      <p class="mt-5 text-base leading-relaxed text-soft">
        A docile, forgiving low-wing trainer that has been thoroughly modernized — all-new avionics, a fresh
        interior, and a PowerFlow exhaust for better performance and economy. It is the only airplane you will
        train in, so you will know it intimately by checkride day.
      </p>

      <dl class="mt-10 grid grid-cols-2 gap-px border border-line bg-line">
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
