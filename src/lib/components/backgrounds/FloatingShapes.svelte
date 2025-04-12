<script>
  import { onMount } from 'svelte';

  // Props for customization
  export let count = 6; // Number of shapes
  export let colors = ['#64b5f6', '#3498db', '#2980b9', '#90caf9']; // Default blue colors
  export let shapes = ['circle', 'square', 'triangle', 'rectangle']; // Shape types
  export let zIndex = -1; // z-index of the shapes container
  export let opacity = 0.4; // Base opacity of shapes
  export let speed = 1; // Animation speed multiplier

  let mounted = false;

  // Generate a random number between min and max
  const random = (min, max) => Math.random() * (max - min) + min;

  // Generate shape elements on mount
  onMount(() => {
    mounted = true;

    // Get all shape elements
    const shapeElements = document.querySelectorAll('.floating-shape');

    // Initialize each shape with random properties
    shapeElements.forEach(el => {
      // Random position
      const x = random(10, 90); // percentage of viewport width
      const y = random(10, 90); // percentage of viewport height

      // Random size (vw units)
      const size = random(5, 15);

      // Random animation duration
      const duration = random(15, 30) / speed;

      // Random animation delay
      const delay = random(0, 15);

      // Set CSS custom properties for each shape
      el.style.setProperty('--x', `${x}vw`);
      el.style.setProperty('--y', `${y}vh`);
      el.style.setProperty('--size', `${size}vw`);
      el.style.setProperty('--duration', `${duration}s`);
      el.style.setProperty('--delay', `${delay}s`);
    });
  });
</script>

<div class="floating-shapes-container" style="z-index: {zIndex};">
  {#if mounted}
    {#each Array(count) as _, i}
      {@const shape = shapes[Math.floor(Math.random() * shapes.length)]}
      {@const color = colors[Math.floor(Math.random() * colors.length)]}

      <div
        class="floating-shape {shape}"
        style="--color: {color}; --shape-opacity: {opacity};"
      ></div>
    {/each}
  {/if}
</div>

<style>
  .floating-shapes-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none; /* Allow clicking through the shapes */
  }

  .floating-shape {
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform-origin: center center;
    filter: blur(6px);
    background-color: var(--color);
    opacity: var(--shape-opacity);
    animation: float var(--duration) ease-in-out infinite alternate;
    animation-delay: var(--delay);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: all 0.5s ease;
  }

  /* Different shape styles */
  .floating-shape.circle {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  }

  .floating-shape.square {
    width: var(--size);
    height: var(--size);
    border-radius: 15%;
  }

  .floating-shape.triangle {
    width: 0;
    height: 0;
    border-left: calc(var(--size) * 0.5) solid transparent;
    border-right: calc(var(--size) * 0.5) solid transparent;
    border-bottom: var(--size) solid var(--color);
    background-color: transparent;
  }

  .floating-shape.rectangle {
    width: calc(var(--size) * 1.5);
    height: var(--size);
    border-radius: 10px;
  }

  /* Floating animation */
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    25% {
      transform: translate(calc(var(--size) * 0.3), calc(var(--size) * -0.2)) rotate(5deg) scale(1.05);
    }
    50% {
      transform: translate(calc(var(--size) * -0.2), calc(var(--size) * 0.3)) rotate(-2deg) scale(0.95);
    }
    75% {
      transform: translate(calc(var(--size) * 0.1), calc(var(--size) * 0.2)) rotate(8deg) scale(1.1);
    }
    100% {
      transform: translate(calc(var(--size) * -0.4), calc(var(--size) * -0.3)) rotate(-5deg) scale(0.9);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .floating-shape {
      filter: blur(4px);
    }
  }
</style>
