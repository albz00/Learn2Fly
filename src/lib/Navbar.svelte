<script>
  import { onMount } from 'svelte';
  import { nav, contact } from './data.js';

  let scrolled = $state(false);
  let openMenu = $state(null); // desktop dropdown key
  let mobileOpen = $state(false);

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function go(href) {
    mobileOpen = false;
    openMenu = null;
  }
</script>

<header
  class="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
  class:bg-paper={scrolled || mobileOpen}
  class:border-b={scrolled || mobileOpen}
  class:hairline={scrolled || mobileOpen}
>
  <nav class="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 lg:px-10">
    <!-- wordmark -->
    <a href="#home" onclick={() => go('#home')} class="group flex items-baseline gap-2">
      <span class="display text-xl font-semibold tracking-tight text-ink">Learn2Fly</span>
      <span class="label text-[0.6rem] text-signal">FLORIDA</span>
    </a>

    <!-- desktop nav -->
    <ul class="hidden items-center gap-1 lg:flex">
      {#each nav as item}
        <li
          class="relative"
          onmouseenter={() => (openMenu = item.children ? item.label : null)}
          onmouseleave={() => (openMenu = null)}
        >
          <a
            href={item.href}
            onclick={() => go(item.href)}
            class="flex items-center gap-1.5 px-3 py-2 text-sm text-ink/80 transition-colors hover:text-ink"
          >
            <span class="ulink">{item.label}</span>
            {#if item.children}
              <span
                class="mt-0.5 h-1 w-1 rounded-full bg-soft transition-transform duration-300"
                class:scale-150={openMenu === item.label}
              ></span>
            {/if}
          </a>

          {#if item.children}
            <div
              class="absolute left-0 top-full min-w-[230px] pt-3 transition-all duration-200"
              class:pointer-events-none={openMenu !== item.label}
              class:opacity-0={openMenu !== item.label}
              class:translate-y-1={openMenu !== item.label}
            >
              <ul class="border border-line bg-paper p-2 shadow-[0_20px_60px_-30px_rgba(16,21,27,0.6)]">
                {#each item.children as child, i}
                  <li>
                    <a
                      href={child.href}
                      onclick={() => go(child.href)}
                      class="flex items-center justify-between gap-6 px-3 py-2.5 text-sm text-ink/75 transition-colors hover:bg-paper-2 hover:text-ink"
                    >
                      <span>{child.label}</span>
                      <span class="label text-[0.55rem] text-soft"
                        >{String(i + 1).padStart(2, '0')}</span
                      >
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </li>
      {/each}
    </ul>

    <!-- contact CTA -->
    <div class="hidden items-center gap-5 lg:flex">
      <a href={contact.phoneHref} class="label text-[0.65rem] text-ink/70 transition-colors hover:text-ink"
        >{contact.phone}</a
      >
      <a
        href="#contact"
        class="group relative overflow-hidden border border-ink bg-ink px-5 py-2.5 text-sm text-paper transition-colors"
      >
        <span class="relative z-10">Contact</span>
      </a>
    </div>

    <!-- mobile toggle -->
    <button
      class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
      aria-label="Menu"
      onclick={() => (mobileOpen = !mobileOpen)}
    >
      <span
        class="h-px w-6 bg-ink transition-transform duration-300"
        class:translate-y-[7px]={mobileOpen}
        class:rotate-45={mobileOpen}
      ></span>
      <span class="h-px w-6 bg-ink transition-opacity duration-300" class:opacity-0={mobileOpen}></span>
      <span
        class="h-px w-6 bg-ink transition-transform duration-300"
        class:-translate-y-[7px]={mobileOpen}
        class:-rotate-45={mobileOpen}
      ></span>
    </button>
  </nav>

  <!-- mobile drawer -->
  {#if mobileOpen}
    <div class="border-t border-line bg-paper lg:hidden">
      <ul class="mx-auto max-w-[1240px] px-6 py-4">
        {#each nav as item}
          <li class="border-b border-line/60 last:border-0">
            <a
              href={item.href}
              onclick={() => go(item.href)}
              class="flex items-center justify-between py-3.5"
            >
              <span class="display text-lg">{item.label}</span>
              <span class="label text-[0.55rem] text-soft">{item.children ? 'SECTION' : ''}</span>
            </a>
            {#if item.children}
              <ul class="-mt-1 pb-3 pl-1">
                {#each item.children as child}
                  <li>
                    <a
                      href={child.href}
                      onclick={() => go(child.href)}
                      class="block py-1.5 text-sm text-soft"
                    >
                      {child.label}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
        <li class="pt-5">
          <a
            href="#contact"
            onclick={() => go('#contact')}
            class="block bg-ink px-5 py-3.5 text-center text-paper"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  {/if}
</header>
