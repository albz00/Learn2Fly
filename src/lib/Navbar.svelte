<script>
  import { onMount } from 'svelte';
  import { nav, contact, brand } from './data.js';
  let { currentPath = '/' } = $props();

  let scrolled = $state(false);
  let openMenu = $state(null);
  let mobileOpen = $state(false);
  let openMobileSection = $state(null);

  function normalizePath(pathname) {
    if (!pathname) return '/';
    if (pathname === '/') return '/';
    return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  }

  function isActive(href) {
    const [pathname] = href.split('#');
    return normalizePath(pathname) === currentPath;
  }

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() {
    mobileOpen = false;
    openMenu = null;
    openMobileSection = null;
  }

  function toggleMobileSection(label) {
    openMobileSection = openMobileSection === label ? null : label;
  }
</script>

<header class="fixed inset-x-0 top-0 z-50">
  <div
    class="bg-ink text-paper transition-all duration-300"
    class:max-h-0={scrolled}
    class:overflow-hidden={scrolled}
    class:opacity-0={scrolled}
  >
    <div class="site-shell flex h-10 items-center">
      <address class="label truncate not-italic text-paper/70">
        {contact.addressLine1}, {contact.addressLine2}
      </address>
    </div>
  </div>

  <div
    class="border-b hairline bg-white/96 backdrop-blur supports-[backdrop-filter]:bg-white/90 transition-shadow duration-300"
    class:shadow-[0_12px_42px_-24px_rgba(15,26,41,0.52)]={scrolled}
  >
    <nav class="site-shell grid h-[5.5rem] grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-8">
      <a href="/" onclick={close} class="flex shrink-0 items-center">
        <img src={brand.logo} alt={brand.logoAlt} class="h-[3.25rem] w-auto sm:h-14" />
      </a>

      <ul class="hidden items-center justify-center xl:flex">
        {#each nav as item, index}
          <li class="flex items-center">
            <div
              class="relative"
              onmouseenter={() => (openMenu = item.children ? item.label : null)}
              onmouseleave={() => (openMenu = null)}
            >
              <a
                href={item.href}
                onclick={close}
                aria-haspopup={item.children ? 'true' : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                class={`flex items-center gap-1.5 px-1 py-2 text-base font-bold leading-none tracking-[0.01em] transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-ink/84 hover:text-accent'
                }`}
              >
                {item.label}
                {#if item.children}
                  <span
                    class="nav-caret shrink-0"
                    class:nav-caret--open={openMenu === item.label}
                    aria-hidden="true"
                  ></span>
                {/if}
              </a>

              {#if item.children}
                <div
                  class="absolute left-1/2 top-full min-w-[240px] -translate-x-1/2 pt-3 transition-all duration-200"
                  class:pointer-events-none={openMenu !== item.label}
                  class:opacity-0={openMenu !== item.label}
                  class:translate-y-1={openMenu !== item.label}
                >
                  <ul class="surface-paper radius-ui p-2.5">
                    {#each item.children as child}
                      <li>
                        <a
                          href={child.href}
                          onclick={close}
                          class="radius-ui flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-ink/78 transition-colors duration-200 hover:bg-accent/8 hover:text-accent"
                        >
                          <span>{child.label}</span>
                        </a>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>

            {#if index < nav.length - 1}
              <span class="mx-3 select-none text-base font-light text-ink/28 sm:mx-4" aria-hidden="true">|</span>
            {/if}
          </li>
        {/each}
      </ul>

      <div class="hidden items-center justify-end gap-4 lg:flex">
        <a href={contact.phoneHref} class="nav-phone ulink text-base font-bold text-ink/82">
          {contact.phone}
          <svg class="nav-phone__draw" viewBox="0 0 120 8" preserveAspectRatio="none" aria-hidden="true">
            <path
              class="nav-phone__path"
              pathLength="1"
              d="M0 5.5 C18 2.5, 42 6.5, 60 4.5 S102 3, 120 5"
            />
          </svg>
        </a>
        <a href="/contact" class="btn-gradient-accent transition-all duration-300 hover:-translate-y-0.5">
          Start Training
        </a>
      </div>

      <div class="flex items-center justify-end gap-3 justify-self-end lg:hidden">
        <a href={contact.phoneHref} class="text-sm font-black tracking-[-0.01em] text-accent sm:text-base">
          {contact.phone}
        </a>
        <button
          class="radius-ui flex h-11 w-11 flex-col items-center justify-center gap-1.5 bg-paper/90 shadow-sm transition-all duration-300 hover:bg-accent/10 hover:shadow-md"
          aria-label="Menu"
          onclick={() => (mobileOpen = !mobileOpen)}
        >
          <span
            class="h-1 w-6 rounded-full bg-accent transition-transform duration-300"
            class:translate-y-[10px]={mobileOpen}
            class:rotate-45={mobileOpen}
          ></span>
          <span class="h-1 w-6 rounded-full bg-accent transition-opacity duration-300" class:opacity-0={mobileOpen}></span>
          <span
            class="h-1 w-6 rounded-full bg-accent transition-transform duration-300"
            class:-translate-y-[10px]={mobileOpen}
            class:-rotate-45={mobileOpen}
          ></span>
        </button>
      </div>
    </nav>
  </div>

  {#if mobileOpen}
    <div class="section-band border-b border-line lg:hidden">
      <ul class="site-shell py-4">
        {#each nav as item}
          <li class="border-b border-line/65 last:border-0">
            {#if item.children}
              <div class="flex items-stretch">
                <a
                  href={item.href}
                  onclick={close}
                  class="radius-ui flex flex-1 items-center py-3.5"
                >
                  <span class="text-lg font-bold tracking-[0.01em]" class:text-accent={isActive(item.href)}>
                    {item.label}
                  </span>
                </a>
                <button
                  type="button"
                  class="radius-ui flex w-12 shrink-0 items-center justify-center text-ink/70 transition-colors hover:text-accent"
                  aria-label={`Toggle ${item.label} menu`}
                  aria-expanded={openMobileSection === item.label}
                  onclick={() => toggleMobileSection(item.label)}
                >
                  <span
                    class="nav-caret"
                    class:nav-caret--open={openMobileSection === item.label}
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
              <div
                class="grid overflow-hidden pl-1 transition-all duration-300 ease-out"
                style="grid-template-rows: {openMobileSection === item.label ? '1fr' : '0fr'}"
              >
                <ul class="min-h-0 overflow-hidden pb-3">
                  {#each item.children as child}
                    <li>
                      <a
                        href={child.href}
                        onclick={close}
                        class="flex items-center gap-2.5 py-1.5 text-sm font-semibold text-soft transition-colors hover:text-accent"
                      >
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {:else}
              <a href={item.href} onclick={close} class="radius-ui flex items-center py-3.5">
                <span class="text-lg font-bold tracking-[0.01em]" class:text-accent={isActive(item.href)}>
                  {item.label}
                </span>
              </a>
            {/if}
          </li>
        {/each}
        <li class="flex flex-col gap-3 pt-5">
          <a href="/contact" onclick={close} class="btn-gradient-accent w-fit transition-all duration-300">
            Start Training
          </a>
        </li>
      </ul>
    </div>
  {/if}
</header>

<style>
  .nav-caret {
    display: inline-block;
    width: 0.42rem;
    height: 0.42rem;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    opacity: 0.58;
    transform: rotate(45deg) translateY(-1px);
    transition:
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.2s ease;
  }

  .nav-caret--open {
    opacity: 0.9;
    transform: rotate(-135deg) translateY(1px);
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-caret {
      transition: none;
    }
  }

  .nav-phone {
    position: relative;
    display: inline-block;
    padding-bottom: 0.2rem;
  }

  .nav-phone__draw {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 0.45rem;
    overflow: visible;
    pointer-events: none;
  }

  .nav-phone__path {
    fill: none;
    stroke: var(--color-signal);
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: nav-phone-draw 0.9s cubic-bezier(0.45, 0, 0.2, 1) 0.4s forwards;
    transition: stroke 0.2s ease;
  }

  .nav-phone:hover .nav-phone__path {
    stroke: var(--color-accent-2);
  }

  @keyframes nav-phone-draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-phone__path {
      animation: none;
      stroke-dashoffset: 0;
    }
  }
</style>
