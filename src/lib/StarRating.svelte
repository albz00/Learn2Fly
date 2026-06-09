<script>
  let { rating = 5, max = 5, size = 'sm' } = $props();

  const stars = $derived(Array.from({ length: max }, (_, i) => i < rating));
  const sizeClass = $derived(size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5');
</script>

<div
  class="flex items-center gap-0.5"
  role="img"
  aria-label="{rating} out of {max} stars"
>
  {#each stars as filled}
    <svg
      class="{sizeClass} shrink-0"
      class:text-signal={filled}
      class:text-line={!filled}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M8 1.2 9.9 5.8l5 .4-3.8 3.3 1.2 4.9L8 11.8 3.7 14.4l1.2-4.9L1.1 6.2l5-.4L8 1.2z"
      />
    </svg>
  {/each}
</div>
