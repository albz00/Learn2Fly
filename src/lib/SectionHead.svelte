<script>
  let { title, kicker = '', dark = false } = $props();
</script>

<div class="flex items-end justify-between gap-6 border-b pb-6" class:border-line={!dark} class:border-line-dark={dark}>
  <div>
    {#if kicker}
      <div class={`micro-head mb-4 ${dark ? 'text-paper/78' : 'text-ink/86'}`}>
        <span class="label">{kicker}</span>
      </div>
    {/if}
    <h2 class="display max-w-2xl text-3xl sm:text-4xl md:text-5xl" class:text-ink={!dark} class:text-paper={dark}>
      {title}
    </h2>
  </div>
</div>
