<script>
  import { onMount } from 'svelte';
  import StarRating from './StarRating.svelte';
  import { testimonials } from './data.js';

  const slides = testimonials;
  const count = slides.length;

  let active = $state(0);
  let paused = $state(false);
  // autoplay direction, ping-pongs at the ends so cards never teleport
  let dir = 1;

  const initials = (name) =>
    name
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? '')
      .join('');

  function go(index) {
    active = Math.max(0, Math.min(count - 1, index));
  }

  function next() {
    go(active + 1);
  }

  function prev() {
    go(active - 1);
  }

  function advance() {
    if (active + dir > count - 1 || active + dir < 0) dir *= -1;
    go(active + dir);
  }

  // linear position of a slide relative to the active one (no wrapping),
  // so cards always slide in order instead of jumping across the stage
  function offsetOf(index) {
    return index - active;
  }

  onMount(() => {
    const id = setInterval(() => {
      if (!paused) advance();
    }, 6000);
    return () => clearInterval(id);
  });
</script>

<section class="border-t border-line">
  <div class="site-shell section-space">
    <div class="text-center">
      <div class="micro-head justify-center text-ink/86">
        <span class="label">Student Reviews</span>
      </div>
      <h2 class="display mx-auto mt-5 max-w-2xl text-3xl text-ink sm:text-4xl md:text-5xl">
        People said
      </h2>
    </div>

    <!-- coverflow carousel -->
    <div
      class="reviews section-flow"
      role="group"
      aria-roledescription="carousel"
      aria-label="Student reviews"
      onmouseenter={() => (paused = true)}
      onmouseleave={() => (paused = false)}
      onfocusin={() => (paused = true)}
      onfocusout={() => (paused = false)}
    >
      <div class="reviews__stage">
        {#each slides as t, i}
          {@const offset = offsetOf(i)}
          <figure
            class="review-card card-elevated"
            class:is-active={offset === 0}
            class:is-far={Math.abs(offset) > 1}
            style="--offset: {Math.max(-1, Math.min(1, offset))};"
            aria-hidden={offset !== 0}
            inert={offset !== 0 ? true : undefined}
          >
            <span class="review-card__mark" aria-hidden="true">&ldquo;</span>
            <StarRating rating={t.rating} size="md" />
            <blockquote class="review-card__quote">{t.quote}</blockquote>
            <figcaption class="review-card__person">
              <span class="review-card__avatar" aria-hidden="true">{initials(t.name)}</span>
              <span class="review-card__meta">
                <span class="display review-card__name">{t.name}</span>
                <span class="label review-card__detail">{t.detail}</span>
              </span>
            </figcaption>
          </figure>
        {/each}
      </div>

      <div class="reviews__controls">
        <button
          type="button"
          class="reviews__arrow"
          onclick={prev}
          disabled={active === 0}
          aria-label="Previous review"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="reviews__dots" role="tablist" aria-label="Choose review">
          {#each slides as _, i}
            <button
              type="button"
              class="reviews__dot"
              class:is-active={i === active}
              aria-label={`Go to review ${i + 1}`}
              aria-selected={i === active}
              role="tab"
              onclick={() => go(i)}
            ></button>
          {/each}
        </div>
        <button
          type="button"
          class="reviews__arrow"
          onclick={next}
          disabled={active === count - 1}
          aria-label="Next review"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .reviews {
    --card-w: min(38rem, 100%);
    overflow-x: clip;
  }

  .reviews__stage {
    position: relative;
    height: 23rem;
    perspective: 1400px;
    overflow-x: clip;
  }

  @media (min-width: 640px) {
    .reviews {
      --card-w: min(38rem, 88vw);
    }

    .reviews__stage {
      height: 21rem;
    }
  }

  .review-card {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    width: var(--card-w);
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    padding: 2rem;
    text-align: center;
    /* side cards: shifted out, scaled down, dimmed, and pushed behind */
    transform: translateX(-50%)
      translateX(calc(var(--offset) * 48%))
      scale(calc(1 - (var(--offset) * var(--offset)) * 0.12));
    opacity: calc(1 - (var(--offset) * var(--offset)) * 0.62);
    z-index: 1;
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition:
      transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1),
      opacity 0.45s ease,
      box-shadow 0.6s ease;
  }

  @media (min-width: 768px) {
    .review-card {
      padding: 2.75rem 3rem;
      transform: translateX(-50%)
        translateX(calc(var(--offset) * 56%))
        scale(calc(1 - (var(--offset) * var(--offset)) * 0.12));
    }
  }

  /* hide cards that are more than one step away */
  .review-card:not(.is-active) {
    pointer-events: none;
  }

  .review-card.is-far {
    opacity: 0;
  }

  .review-card.is-active {
    z-index: 3;
    opacity: 1;
    box-shadow: 0 32px 60px -30px rgba(11, 34, 61, 0.55);
  }

  .review-card__mark {
    position: absolute;
    top: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-display);
    font-size: 5rem;
    line-height: 1;
    color: var(--color-signal);
    opacity: 0.28;
    pointer-events: none;
  }

  .review-card :global(.flex) {
    justify-content: center;
  }

  .review-card__quote {
    position: relative;
    margin-top: 1.1rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.6;
    color: var(--color-ink);
  }

  @media (min-width: 768px) {
    .review-card__quote {
      font-size: 1.3rem;
    }
  }

  .review-card__person {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;
  }

  .review-card__avatar {
    display: grid;
    height: 2.85rem;
    width: 2.85rem;
    flex-shrink: 0;
    place-items: center;
    border-radius: 999px;
    background: linear-gradient(150deg, var(--color-accent-2) 0%, var(--color-accent) 100%);
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
  }

  .review-card__meta {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .review-card__name {
    font-size: 1.05rem;
    color: var(--color-ink);
  }

  .review-card__detail {
    margin-top: 0.15rem;
    color: var(--color-soft);
  }

  .reviews__controls {
    margin-top: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
  }

  .reviews__arrow {
    display: grid;
    height: 3rem;
    width: 3rem;
    place-items: center;
    border-radius: 999px;
    border: 1px solid var(--color-line);
    background-image: linear-gradient(160deg, #ffffff 0%, #eef4fc 100%);
    color: var(--color-accent);
    box-shadow: 0 14px 26px -18px rgba(9, 32, 59, 0.45);
    cursor: pointer;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      color 0.25s ease,
      background-image 0.25s ease,
      box-shadow 0.25s ease,
      opacity 0.25s ease;
  }

  .reviews__arrow svg {
    transition: transform 0.25s ease;
  }

  .reviews__arrow:hover:not(:disabled) {
    transform: translateY(-2px);
    border-color: transparent;
    color: #ffffff;
    background-image: linear-gradient(160deg, var(--color-accent-2) 0%, var(--color-accent) 100%);
    box-shadow: 0 18px 30px -16px rgba(33, 95, 152, 0.7);
  }

  .reviews__arrow:active:not(:disabled) {
    transform: translateY(0) scale(0.94);
  }

  .reviews__arrow:disabled {
    opacity: 0.4;
    cursor: default;
    box-shadow: none;
  }

  .reviews__dots {
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .reviews__dot {
    height: 0.55rem;
    width: 0.55rem;
    border-radius: 999px;
    background: var(--color-line);
    cursor: pointer;
    transition:
      width 0.3s ease,
      background 0.3s ease;
  }

  .reviews__dot.is-active {
    width: 1.6rem;
    background: linear-gradient(90deg, var(--color-accent-2) 0%, var(--color-accent) 100%);
  }

  @media (prefers-reduced-motion: reduce) {
    .review-card,
    .reviews__arrow,
    .reviews__dot {
      transition: none;
    }
  }
</style>
