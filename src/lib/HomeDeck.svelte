<script>
  const highlights = [
    ['Base Airport', 'KLCQ'],
    ['Instruction', '1:1'],
    ['Aircraft', 'Cherokee 140'],
    ['Track', 'Private to CFI'],
  ];

  const pageLinks = [
    {
      href: '/about',
      label: 'About',
      title: 'Instructor background and standards',
      summary: 'See the credentials, teaching style, and the one-instructor model students train in.',
    },
    {
      href: '/courses',
      label: 'Courses',
      title: 'Private through CFI pathways',
      summary: 'Understand each rating, expected hours, and how training stays on a clear timeline.',
    },
    {
      href: '/rates',
      label: 'Rates',
      title: 'Pricing that is easy to plan',
      summary: 'Review aircraft, instruction, simulator, and discovery-flight pricing with policy notes.',
    },
    {
      href: '/aircraft',
      label: 'Aircraft',
      title: 'A single, modernized trainer',
      summary: 'Get familiar with the Cherokee 140 platform and panel you will train in day after day.',
    },
    {
      href: '/resources',
      label: 'Resources',
      title: 'Reference library for students',
      summary: 'Use the same FAA handbooks, standards, and planning tools built into your training.',
    },
    {
      href: '/faq',
      label: 'FAQ',
      title: 'Direct answers before you commit',
      summary: 'Read practical details on timelines, checkrides, scheduling, and training expectations.',
    },
  ];
</script>

<section class="section-band">
  <div class="site-shell section-space">
    <div class="grid items-end gap-8 border-b border-line pb-8 lg:grid-cols-[1.35fr_1fr]">
      <div>
        <span class="label text-accent/75">Welcome to Learn2Fly</span>
        <h2 class="display mt-4 max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
          Structured training. Clear milestones. Real progress every week.
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-3">
        {#each highlights as [label, value]}
          <div class="surface-paper radius-ui p-4 text-center">
            <div class="display text-2xl text-ink">{value}</div>
            <div class="label mt-1 text-soft">{label}</div>
          </div>
        {/each}
      </div>
    </div>

    <div class="section-flow-tight grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each pageLinks as link}
        <a
          href={link.href}
          class="card-elevated group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 lg:p-8"
        >
          <span class="badge-chip w-fit">{link.label}</span>
          <h3 class="display mt-4 text-2xl text-ink">{link.title}</h3>
          <p class="mt-3 flex-1 text-sm leading-relaxed text-soft">{link.summary}</p>
          <span class="mt-7 inline-flex items-center gap-2 text-sm text-accent font-medium">
            View details
            <span class="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>
