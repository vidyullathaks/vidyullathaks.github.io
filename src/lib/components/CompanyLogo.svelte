<script>
  // type: 'hpe' | 'gwu' | 'linkedin' | 'aws'
  export let type;
  export let url;
  export let label;
  export let size = 24;

  const knownTypes = ['hpe', 'gwu', 'linkedin', 'aws'];
  $: isKnown = knownTypes.includes(type);
</script>

{#if isKnown}
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="company-icon"
  style="--size: {size}px;"
  aria-label="{label} website"
>
  {#if type === 'hpe'}
    <!--
      HPE wordmark: H and P in currentColor, E split —
      top half currentColor, bottom half HPE green.
      The E's vertical bar runs full height; a green rect covers
      the lower ~50%, giving the distinctive two-tone E.
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 20"
         width={size * 1.5} height={size * 0.78} aria-hidden="true">
      <!-- H -->
      <rect x="0"  y="0"  width="3.5" height="20" fill="currentColor"/>
      <rect x="0"  y="8"  width="11"  height="4"  fill="currentColor"/>
      <rect x="7.5" y="0" width="3.5" height="20" fill="currentColor"/>
      <!-- P -->
      <rect x="14" y="0"  width="3.5" height="20" fill="currentColor"/>
      <path d="M17.5 0 Q25.5 0 25.5 5 Q25.5 10 17.5 10 Z" fill="currentColor"/>
      <!-- E — top half currentColor -->
      <rect x="29"  y="0"  width="3.5" height="10" fill="currentColor"/>
      <rect x="29"  y="0"  width="9"   height="3.5" fill="currentColor"/>
      <rect x="29"  y="6.5" width="7"  height="3.5" fill="currentColor"/>
      <!-- E — bottom half green (#01A982) -->
      <rect x="29"  y="10" width="9"   height="10" fill="#01A982"/>
    </svg>

  {:else if type === 'gwu'}
    <!--
      GWU logo: gold rule — GW serif — gold rule, equal spacing above and below.
      viewBox 72×54, lines at y=2 and y=48 (h=4 each), text baseline y=39
      gives equal ~6.5 px gap on both sides of the GW caps.
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 54"
         width={size * 1.55} height={size * 1.16} aria-hidden="true">
      <rect x="0" y="2"  width="72" height="4" fill="#C8A951"/>
      <text x="36" y="39" text-anchor="middle" font-size="34" font-weight="bold"
            fill="currentColor" font-family="Georgia, 'Times New Roman', serif">GW</text>
      <rect x="0" y="48" width="72" height="4" fill="#C8A951"/>
    </svg>

  {:else if type === 'linkedin'}
    <!--
      LinkedIn Learning icon: blue rounded square with the "in" mark
      (dot above i, vertical bar, and the curved n path)
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
         width={size * 0.88} height={size * 0.88} aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#0A66C2"/>
      <circle cx="10.5" cy="10.5" r="2" fill="white"/>
      <rect x="8.5" y="14" width="4" height="10" fill="white"/>
      <path d="M16 14 L16 24 M16 17.5 Q16 14 20.5 14 Q25 14 25 18 L25 24"
            stroke="white" stroke-width="3.5" fill="none"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  {:else if type === 'aws'}
    <!-- AWS: "aws" text + smile arc -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 28"
         width={size * 0.9} height={size * 0.7} aria-hidden="true">
      <text x="18" y="16" text-anchor="middle" font-size="13" font-weight="bold"
            fill="currentColor" font-family="Arial, sans-serif" letter-spacing="1">aws</text>
      <path d="M7 22 Q18 30 29 22" stroke="currentColor" fill="none"
            stroke-width="2.2" stroke-linecap="round"/>
      <polygon points="28,19 29.5,23.5 32.5,21" fill="currentColor"/>
    </svg>
  {/if}
</a>
{/if}

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
