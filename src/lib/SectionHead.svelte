<script>
  let { title, dark = false } = $props();
</script>

<div class="flex items-end justify-between gap-6 border-b pb-6" class:border-line={!dark} class:border-line-dark={dark}>
  <div>
    <h2 class="display max-w-2xl text-3xl sm:text-4xl md:text-5xl" class:text-ink={!dark} class:text-paper={dark}>
      {title}
    </h2>
  </div>
</div>
