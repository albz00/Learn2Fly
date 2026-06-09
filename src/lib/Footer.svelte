<script>
  import { contact, nav, brand } from './data.js';
  const year = new Date().getFullYear();
</script>

<footer class="bg-ink text-paper">
  <div class="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
    <div class="grid gap-12 border-b border-line-dark pb-14 md:grid-cols-12">
      <div class="md:col-span-5">
        <a href="#home" class="inline-block">
          <img
            src={brand.logo}
            alt={brand.logoAlt}
            width="260"
            height="56"
            class="h-12 w-auto sm:h-14"
            loading="lazy"
          />
        </a>
        <p class="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
          FAA Part 61 flight training in {contact.city}. Private, Instrument, Commercial and Flight Instructor
          certificates, taught one-on-one.
        </p>
      </div>

      <div class="md:col-span-3">
        <div class="label mb-5 text-paper/40">Sections</div>
        <ul class="space-y-2.5">
          {#each nav as item}
            <li><a href={item.href} class="ulink text-sm text-paper/80">{item.label}</a></li>
          {/each}
          <li><a href="#contact" class="ulink text-sm text-paper/80">Contact</a></li>
        </ul>
      </div>

      <div class="md:col-span-4">
        <div class="label mb-5 text-paper/40">Get in touch</div>
        <ul class="space-y-3">
          <li><a href={contact.phoneHref} class="font-mono text-sm text-paper">{contact.phone}</a></li>
          <li><a href={contact.emailHref} class="ulink text-sm text-paper/80">{contact.email}</a></li>
          <li class="label pt-2 text-paper/45">{contact.airport}</li>
          <li class="label text-paper/45">{contact.city}</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col items-start justify-between gap-3 pt-8 sm:flex-row sm:items-center">
      <span class="label text-paper/40">© {year} Learn2FlyFlorida</span>
      <span class="label text-paper/40">Lake City · Florida · USA</span>
    </div>
  </div>
</footer>
