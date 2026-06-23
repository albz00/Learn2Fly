<script>
  const policySections = [
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      body: 'We collect only the information needed to answer inquiries, schedule training, and deliver flight instruction services. Contact details submitted through forms, phone, or email are used for operations and are never sold to third parties.',
    },
    {
      id: 'terms-of-use',
      title: 'Terms of Use',
      body: 'All training, scheduling, and pricing details on this website are informational and may be updated as FAA guidance, examiner availability, or operating conditions change. Final service terms are confirmed directly with the instructor before training begins.',
    },
    {
      id: 'cookie-notice',
      title: 'Cookie Notice',
      body: 'This website may use minimal technical cookies required for basic functionality and performance. No advertising trackers are used to profile users. You can control cookies in your browser settings.',
    },
    {
      id: 'accessibility-statement',
      title: 'Accessibility Statement',
      body: 'Learn2FlyFlorida aims to keep this website readable and keyboard-accessible across common devices. If any content is difficult to access, contact us and we will provide the information in an alternate format.',
    },
    {
      id: 'safety-disclaimer',
      title: 'Safety Disclaimer',
      body: 'Flight training is conducted under FAA rules and weather, maintenance, and risk-management limits. Mission changes or cancellations may occur when conditions do not meet safety standards. Safety always overrides schedule considerations.',
    },
  ];
</script>

<section id="legal" class="site-shell section-space">
  <div class="max-w-3xl">
    <div class="micro-head text-ink/86">
      <span class="label">Legal</span>
    </div>
    <h2 class="display mt-4 text-3xl text-ink sm:text-4xl md:text-5xl">Legal & compliance information</h2>
    <p class="mt-5 text-base leading-relaxed text-soft">
      This page outlines the standard policies for privacy, terms, accessibility, and operating safety.
    </p>
  </div>

  <div class="section-flow grid gap-5">
    {#each policySections as policy}
      <article id={policy.id} class="card-elevated p-6 lg:p-7">
        <h3 class="display text-2xl text-ink">{policy.title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-soft">{policy.body}</p>
      </article>
    {/each}
  </div>
</section>
