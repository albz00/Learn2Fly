<script>
  import SectionHead from './SectionHead.svelte';
  import { contact, courses } from './data.js';

  let sent = $state(false);
  function submit(e) {
    e.preventDefault();
    sent = true;
  }

  const field =
    'mt-2 w-full border-b border-line bg-transparent pb-2 text-base text-ink outline-none transition-colors placeholder:text-soft/50 focus:border-signal';
</script>

<section id="contact" class="border-t border-line bg-paper">
  <div class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
    <SectionHead kicker="Contact" title="Ready when you are." />

    <div class="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
      <!-- contact details -->
      <div class="lg:col-span-5">
        <p class="max-w-md text-lg leading-relaxed text-soft">
          Reserve a training slot, schedule a discovery flight, or just ask a question. You will speak
          directly with your instructor, not a call center.
        </p>

        <dl class="mt-10 border-t border-line">
          <div class="border-b border-line py-6">
            <dt class="label text-soft">Phone</dt>
            <dd class="mt-2">
              <a href={contact.phoneHref} class="display text-2xl text-ink ulink sm:text-3xl">{contact.phone}</a>
            </dd>
          </div>
          <div class="border-b border-line py-6">
            <dt class="label text-soft">Email</dt>
            <dd class="mt-2">
              <a href={contact.emailHref} class="display text-2xl text-ink ulink sm:text-3xl">{contact.email}</a>
            </dd>
          </div>
          <div class="border-b border-line py-6">
            <dt class="label text-soft">Based at</dt>
            <dd class="mt-2 font-mono text-sm text-ink">{contact.airport} · {contact.coords}</dd>
          </div>
        </dl>
      </div>

      <!-- form -->
      <div class="lg:col-span-7">
        <div class="border border-line border-t-2 border-t-signal bg-paper p-8 shadow-[0_30px_80px_-55px_rgba(16,21,27,0.6)] sm:p-10">
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
                class="w-full bg-ink px-6 py-4 text-sm text-paper transition-colors hover:bg-signal"
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
