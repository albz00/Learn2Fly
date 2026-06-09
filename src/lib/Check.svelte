<script>
  let { tone = 'signal' } = $props();
</script>

<svg
  class="mt-0.5 h-4 w-4 shrink-0"
  class:text-signal={tone === 'signal'}
  class:text-paper={tone === 'paper'}
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M3 8.5 L6.5 12 L13 4" />
</svg>
