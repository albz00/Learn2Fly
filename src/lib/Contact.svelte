<script>
  import SectionHead from './SectionHead.svelte';
  import { contact, courses } from './data.js';

  let sent = $state(false);
  function submit(e) {
    e.preventDefault();
    sent = true;
  }

  const field =
    'mt-2 w-full radius-ui border border-line bg-paper-2/45 px-3.5 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-soft/60 focus:border-accent focus:bg-paper';
</script>

<section id="contact" class="border-t border-line">
  <div class="site-shell section-space">
    <SectionHead kicker="Contact" title="Build your training plan directly with your instructor." />

    <div class="section-flow grid gap-12 lg:grid-cols-12 lg:gap-14">
      <!-- contact details -->
      <div class="lg:col-span-5">
        <p class="max-w-md text-base leading-relaxed text-soft sm:text-lg">
          Reserve a slot, schedule a discovery lesson, or ask where to start. You will speak directly with the
          person who will train you, not a front desk or call center.
        </p>

        <dl class="section-flow-tight grid gap-4">
          <div class="surface-paper-soft radius-ui border border-line p-5">
            <dt class="label text-soft">Phone</dt>
            <dd class="mt-2">
              <a href={contact.phoneHref} class="display text-2xl text-ink ulink sm:text-[1.7rem]">
                {contact.phone}
              </a>
            </dd>
          </div>
          <div class="surface-paper-soft radius-ui border border-line p-5">
            <dt class="label text-soft">Email</dt>
            <dd class="mt-2">
              <a href={contact.emailHref} class="display text-2xl text-ink ulink sm:text-[1.7rem]">
                {contact.email}
              </a>
            </dd>
          </div>
          <div class="surface-paper-soft radius-ui border border-line p-5">
            <dt class="label text-soft">Based at</dt>
            <dd class="mt-2 font-mono text-sm text-ink">{contact.airport} · {contact.city}</dd>
          </div>
        </dl>
      </div>

      <!-- form -->
      <div class="lg:col-span-7">
        <div
          class="card-elevated p-8 sm:p-10"
        >
          {#if sent}
            <div class="flex min-h-[24rem] flex-col items-start justify-center">
              <span class="h-3 w-3 bg-signal"></span>
              <h3 class="display mt-5 text-3xl text-ink">Thanks, talk soon.</h3>
              <p class="mt-3 max-w-sm text-soft">
                This is a demo form, so nothing was actually sent. On the live site your request would land
                straight in the instructor's inbox.
              </p>
            </div>
          {:else}
            <form onsubmit={submit} class="space-y-7">
              <div class="grid gap-7 sm:grid-cols-2">
                <label class="block">
                  <span class="label text-soft">Full name</span>
                  <input required type="text" placeholder="Your name" class={field} />
                </label>
                <label class="block">
                  <span class="label text-soft">Email</span>
                  <input required type="email" placeholder="you@email.com" class={field} />
                </label>
                <label class="block">
                  <span class="label text-soft">Phone</span>
                  <input type="tel" placeholder="(000) 000-0000" class={field} />
                </label>
                <label class="block">
                  <span class="label text-soft">Interested in</span>
                  <select class={field}>
                    <option>Discovery flight</option>
                    {#each courses as c}
                      <option>{c.name}</option>
                    {/each}
                    <option>Aircraft rental</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label class="block">
                  <span class="label text-soft">Preferred date</span>
                  <input type="date" class={field} />
                </label>
                <label class="block">
                  <span class="label text-soft">Preferred time</span>
                  <input type="time" class={field} />
                </label>
              </div>

              <label class="block">
                <span class="label text-soft">Message</span>
                <textarea rows="3" placeholder="Tell me a little about your goals" class={field}></textarea>
              </label>

              <button
                type="submit"
                class="btn-gradient-accent w-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Send request &#8594;
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
