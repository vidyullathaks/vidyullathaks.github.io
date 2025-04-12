<script>
  // Props for customization
  export let padding = "2rem";
  export let borderRadius = "30px";
  export let hoverEffect = true;
  export let opacity = 0.5;
  export let className = "";
</script>

<div
  class="glass-box {className}"
  class:hover-effect={hoverEffect}
  style="--padding: {padding}; --border-radius: {borderRadius}; --opacity: {opacity};"
>
  <slot></slot>
</div>

<style>
  .glass-box {
    background-color: rgba(var(--color-card-bg-rgb), var(--opacity));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    padding: var(--padding);
    margin-bottom: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(var(--color-border-rgb), 0.15);
    transition: all 0.3s ease;
  }

  .glass-box.hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(var(--color-primary-rgb), 0.1);
    border-color: rgba(var(--color-primary-rgb), 0.2);
  }
</style>
