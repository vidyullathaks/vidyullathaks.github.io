<script>
  // type: 'hpe' | 'gwu' | 'dsce' | 'linkedin' | 'aws'
  export let type;
  export let url;
  export let label;
  export let size = 24;
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="company-icon"
  style="--size: {size}px;"
  aria-label="{label} website"
>
  {#if type === 'linkedin'}
    <!-- LinkedIn "in" mark — stroke style matching social icons -->
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>

  {:else if type === 'aws'}
    <!-- AWS — "aws" text + smile arc -->
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 0.72} height={size * 0.72} viewBox="0 0 36 28" aria-hidden="true">
      <text x="18" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" font-family="Arial, sans-serif" letter-spacing="1">aws</text>
      <path d="M7 22 Q18 30 29 22" stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round"/>
      <polygon points="28,19 29,23 32,21" fill="currentColor"/>
    </svg>

  {:else if type === 'hpe'}
    <!-- Hewlett Packard Enterprise — "hpe" text mark -->
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 0.72} height={size * 0.72} viewBox="0 0 36 28" aria-hidden="true">
      <text x="18" y="17" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" font-family="Arial, sans-serif" letter-spacing="0.5">hpe</text>
    </svg>

  {:else if type === 'gwu'}
    <!-- George Washington University — "GW" monogram -->
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 0.72} height={size * 0.72} viewBox="0 0 36 28" aria-hidden="true">
      <text x="18" y="19" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor" font-family="Georgia, 'Times New Roman', serif">GW</text>
    </svg>

  {:else if type === 'dsce'}
    <!-- Dayananda Sagar College — "DS" monogram -->
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 0.72} height={size * 0.72} viewBox="0 0 36 28" aria-hidden="true">
      <text x="18" y="19" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor" font-family="Georgia, 'Times New Roman', serif">DS</text>
    </svg>
  {/if}
</a>

<style>
  .company-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--size) * 1.8);
    height: calc(var(--size) * 1.8);
    border-radius: 50%;
    color: var(--color-text);
    background-color: rgba(var(--color-card-bg-rgb), 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    flex-shrink: 0;
  }

  .company-icon:hover {
    transform: translateY(-3px);
    color: var(--color-primary);
    border-color: rgba(var(--color-primary-rgb), 0.3);
    box-shadow: 0 6px 15px rgba(var(--color-primary-rgb), 0.15);
  }

  :global(:root:not(.dark)) .company-icon {
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  :global(.dark) .company-icon {
    background-color: rgba(30, 30, 30, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .company-icon:hover {
    box-shadow: 0 6px 15px rgba(var(--color-primary-rgb), 0.2);
  }
</style>
