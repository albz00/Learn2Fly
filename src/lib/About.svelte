<script>
  import SectionHead from './SectionHead.svelte';
  import { certificates } from './data.js';
</script>

<section id="about" class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
  <SectionHead index="01" kicker="About" title="A career cockpit, now your classroom." />

  <div class="mt-14 grid gap-14 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <p class="text-2xl font-light leading-snug text-ink sm:text-[1.65rem]">
        Learn2FlyFlorida is a single-instructor flight school. You train with the same airline-experienced
        pilot from your first lesson to your checkride — never a rotating roster of part-timers.
      </p>
      <div class="mt-8 space-y-5 text-base leading-relaxed text-soft">
        <p>
          Your instructor holds an Airline Transport Pilot certificate with a CL-65 type rating and real
          time flying the CRJ. That experience comes back to the training airplane as judgement,
          professionalism, and a standard that holds up well beyond the practical test.
        </p>
        <p>
          As a Gold Seal Flight Instructor and FAA Airframe mechanic, the goal is simple: turn out pilots who
          are genuinely safe, capable, and confident — not just pilots who happened to pass.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-3 gap-px border border-line bg-line">
        {#each [['1969', 'Cherokee 140'], ['10 hrs', 'Sim eligible'], ['1:1', 'Instruction']] as [big, small]}
          <div class="bg-paper px-5 py-6">
            <div class="display text-3xl text-ink">{big}</div>
            <div class="label mt-2 text-soft">{small}</div>
          </div>
        {/each}
      </div>
    </div>

    <div class="lg:col-span-5">
      <div class="label mb-5 text-signal">Certificates & Ratings</div>
      <ul class="border-t border-line">
        {#each certificates as cert, i}
          <li class="flex items-start gap-5 border-b border-line py-4">
            <span class="label mt-1 shrink-0 text-soft">{String(i + 1).padStart(2, '0')}</span>
            <span class="text-[0.975rem] leading-snug text-ink">{cert}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
