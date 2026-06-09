<script>
  import { contact } from './data.js';
</script>

<section id="home" class="relative overflow-hidden bg-ink text-paper">
  <!-- faint horizon grid -->
  <div
    class="pointer-events-none absolute inset-0 opacity-[0.06]"
    style="background-image:linear-gradient(var(--color-paper) 1px,transparent 1px);background-size:100% 64px;"
  ></div>

  <!-- dashed flight path -->
  <svg
    class="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1200 700"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <path
      d="M-50 620 C 250 600, 430 470, 640 360 S 1050 120, 1280 60"
      fill="none"
      stroke="var(--color-signal)"
      stroke-width="1.5"
      stroke-dasharray="2 8"
      stroke-linecap="round"
      opacity="0.55"
    />
    <circle cx="640" cy="360" r="3.5" fill="var(--color-signal)" />
    <circle cx="640" cy="360" r="11" fill="none" stroke="var(--color-signal)" stroke-width="1" opacity="0.5" />
  </svg>

  <div class="relative mx-auto max-w-[1240px] px-6 lg:px-10">
    <div class="flex min-h-[100svh] flex-col justify-center pb-20 pt-32">
      <div class="label flex flex-wrap items-center gap-x-3 gap-y-2 text-paper/70">
        <span>FAA PART 61 FLIGHT SCHOOL</span>
        <span class="h-px w-8 bg-line-dark"></span>
        <span>{contact.airport}</span>
      </div>

      <h1 class="display mt-8 max-w-4xl text-[clamp(2.75rem,8vw,6.25rem)] text-paper">
        Become the pilot<br />
        you keep <span class="text-signal">promising</span><br />
        yourself.
      </h1>

      <p class="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
        From your first discovery flight to your flight-instructor certificate — taught one-on-one out of
        Lake City, Florida. One airplane. One instructor. One standard.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#courses"
          class="border border-paper bg-paper px-7 py-3.5 text-sm text-ink transition-colors hover:bg-transparent hover:text-paper"
        >
          Explore the courses
        </a>
        <a
          href="#contact"
          class="border border-line-dark px-7 py-3.5 text-sm text-paper transition-colors hover:border-paper"
        >
          Book a discovery flight
        </a>
      </div>
    </div>

    <!-- flight-data strip -->
    <div class="grid grid-cols-2 gap-px border-t border-line-dark bg-line-dark sm:grid-cols-4">
      {#each [['POSITION', contact.coords], ['HOME FIELD', 'KLCQ'], ['FLEET', 'Cherokee 140'], ['INSTRUCTION', 'One-on-one']] as [k, v]}
        <div class="bg-ink px-1 py-6">
          <div class="label text-paper/45">{k}</div>
          <div class="mt-2 font-mono text-sm text-paper">{v}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
