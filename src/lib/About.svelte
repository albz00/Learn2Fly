<script>
  import SectionHead from './SectionHead.svelte';
  import Check from './Check.svelte';
  import { certificates, images, instructor } from './data.js';
</script>

<section id="about" class="site-shell section-space">
  <SectionHead kicker="About The Instructor" title="Professional standards from your very first lesson." />

  <div class="section-flow grid gap-14 lg:grid-cols-12">
    <div id="instructor" class="lg:col-span-7">
      <div class="card-elevated flex flex-col gap-10 p-7 sm:flex-row sm:items-start sm:p-8">
        <div class="shrink-0">
          <div class="radius-ui relative aspect-[3/4] w-48 overflow-hidden sm:w-52">
            <img
              src={images.instructor}
              alt={instructor.photoAlt}
              class="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
          <div class="mt-4">
            <div class="display text-xl text-ink">{instructor.fullName}</div>
            <div class="label mt-1 text-soft">{instructor.title}</div>
            <div class="label mt-1 text-soft">{instructor.credentials}</div>
            <div class="label mt-2 text-soft">{instructor.business}</div>
          </div>
        </div>

        <div class="min-w-0 flex-1">
          <p class="text-2xl font-light leading-snug text-ink sm:text-[1.65rem]">
            Learn2FlyFlorida is intentionally a single-instructor operation. You work with the same
            airline-experienced pilot from first start to practical exam.
          </p>
          <div class="mt-8 space-y-5 text-base leading-relaxed text-soft">
            <p>
              With Airline Transport Pilot and CL-65 type credentials, training is shaped by real-world
              operational discipline, not improvised lesson-to-lesson coaching.
            </p>
            <p>
              As a Gold Seal instructor and FAA mechanic, the focus is simple: build pilots who are safe,
              deliberate, and competent under pressure, not just students who memorize a checkride.
            </p>
          </div>
        </div>
      </div>

      <div class="radius-ui mt-10 grid grid-cols-3 gap-px overflow-hidden bg-line">
        {#each [['1969', 'Cherokee 140'], ['10 hrs', 'Sim eligible'], ['1:1', 'Instruction']] as [big, small]}
          <div class="surface-paper radius-ui px-5 py-6">
            <div class="display text-3xl text-ink">{big}</div>
            <div class="label mt-2 text-soft">{small}</div>
          </div>
        {/each}
      </div>
    </div>

    <div id="credentials" class="lg:col-span-5">
      <div class="label mb-5 text-signal">Certificates & Ratings</div>
      <ul class="card-elevated divide-y divide-line">
        {#each certificates as cert}
          <li class="flex items-start gap-4 px-6 py-4">
            <Check />
            <span class="text-[0.975rem] leading-snug text-ink">{cert}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
