<script>
  import SectionHead from './SectionHead.svelte';
  import { contact, courses } from './data.js';

  let sent = $state(false);
  function submit(e) {
    e.preventDefault();
    sent = true;
  }
</script>

<section id="contact" class="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
  <SectionHead index="07" kicker="Contact" title="Ready when you are." />

  <div class="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-20">
    <!-- contact details -->
    <div class="lg:col-span-5">
      <p class="max-w-md text-lg leading-relaxed text-soft">
        Call or email to reserve your training slot, schedule a discovery flight, or just ask a question.
        You will speak directly with your instructor.
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
      {#if sent}
        <div class="flex h-full min-h-[20rem] flex-col items-start justify-center border border-line bg-paper-2/50 p-10">
          <div class="label text-signal">Message queued</div>
          <h3 class="display mt-4 text-3xl text-ink">Thanks — talk soon.</h3>
          <p class="mt-3 max-w-sm text-soft">
            This is a demo form, so nothing was actually sent. On the live site your note would land straight
            in the instructor’s inbox.
          </p>
        </div>
      {:else}
        <form onsubmit={submit} class="grid gap-px border border-line bg-line">
          <div class="grid bg-paper sm:grid-cols-2 sm:gap-px sm:bg-line">
            <label class="block bg-paper p-5">
              <span class="label text-soft">Name</span>
              <input
                required
                type="text"
                placeholder="Your name"
                class="mt-2 w-full bg-transparent text-base text-ink outline-none placeholder:text-soft/50"
              />
            </label>
            <label class="block bg-paper p-5">
              <span class="label text-soft">Phone or Email</span>
              <input
                required
                type="text"
                placeholder="How to reach you"
                class="mt-2 w-full bg-transparent text-base text-ink outline-none placeholder:text-soft/50"
              />
            </label>
          </div>

          <label class="block bg-paper p-5">
            <span class="label text-soft">I'm interested in</span>
            <select class="mt-2 w-full bg-transparent text-base text-ink outline-none">
              <option>Discovery flight</option>
              {#each courses as c}
                <option>{c.name}</option>
              {/each}
              <option>Aircraft rental</option>
              <option>Something else</option>
            </select>
          </label>

          <label class="block bg-paper p-5">
            <span class="label text-soft">Message</span>
            <textarea
              rows="4"
              placeholder="Tell me a little about your goals…"
              class="mt-2 w-full resize-none bg-transparent text-base text-ink outline-none placeholder:text-soft/50"
            ></textarea>
          </label>

          <button
            type="submit"
            class="bg-ink px-6 py-5 text-left text-sm text-paper transition-colors hover:bg-ink-2"
          >
            Send message →
          </button>
        </form>
      {/if}
    </div>
  </div>
</section>
