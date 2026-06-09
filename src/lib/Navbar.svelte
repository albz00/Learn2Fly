<script>
  import { onMount } from 'svelte';
  import { nav, contact, brand } from './data.js';

  let scrolled = $state(false);
  let openMenu = $state(null);
  let mobileOpen = $state(false);

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() {
    mobileOpen = false;
    openMenu = null;
  }
</script>

<header
  class="fixed inset-x-0 top-0 z-50 border-b hairline bg-paper transition-shadow duration-300"
  class:shadow-[0_10px_40px_-24px_rgba(16,21,27,0.5)]={scrolled}
>
  <nav class="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 lg:px-10">
    <!-- wordmark / logo -->
    <a href="#home" onclick={close} class="flex items-center gap-3">
      <img src={brand.logo} alt={brand.logoAlt} class="h-9 w-auto" />
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
            onclick={close}
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
                {#each item.children as child}
                  <li>
                    <a
                      href={child.href}
                      onclick={close}
                      class="group flex items-center gap-3 px-3 py-2.5 text-sm text-ink/75 transition-colors hover:bg-paper-2 hover:text-ink"
                    >
                      <span class="h-1 w-1 shrink-0 bg-signal transition-transform duration-300 group-hover:scale-150"></span>
                      <span>{child.label}</span>
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
        class="border border-ink bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-transparent hover:text-ink"
      >
        Contact
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
            <a href={item.href} onclick={close} class="flex items-center justify-between py-3.5">
              <span class="display text-lg">{item.label}</span>
            </a>
            {#if item.children}
              <ul class="-mt-1 pb-3 pl-1">
                {#each item.children as child}
                  <li>
                    <a href={child.href} onclick={close} class="flex items-center gap-2.5 py-1.5 text-sm text-soft">
                      <span class="h-1 w-1 shrink-0 bg-signal"></span>
                      {child.label}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
        <li class="pt-5">
          <a href="#contact" onclick={close} class="block bg-ink px-5 py-3.5 text-center text-paper">Contact</a>
        </li>
      </ul>
    </div>
  {/if}
</header>
