<script>
  let { kicker, title, dark = false } = $props();
</script>

<div class="flex items-end justify-between gap-6 border-b pb-6" class:border-line={!dark} class:border-line-dark={dark}>
  <div>
    <div class="label mb-4 flex items-center gap-3" class:text-signal={!dark} class:text-paper={dark}>
      <span class="h-px w-8" class:bg-signal={!dark} class:bg-line-dark={dark}></span>
      <span class:text-soft={!dark} class:text-paper={dark}>{kicker}</span>
    </div>
    <h2 class="display max-w-2xl text-3xl sm:text-4xl md:text-5xl" class:text-ink={!dark} class:text-paper={dark}>
      {title}
    </h2>
  </div>
</div>
