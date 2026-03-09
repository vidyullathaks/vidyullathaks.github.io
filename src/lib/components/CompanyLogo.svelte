<script>
  // type: 'hpe' | 'gwu' | 'dsce' | 'linkedin' | 'aws'
  export let type;
  export let url;
  export let label;
  export let size = 24;

  const knownTypes = ['hpe', 'gwu', 'dsce', 'linkedin', 'aws'];
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
      HPE wordmark: "H" and "P" in currentColor, "E" split —
      top half currentColor, bottom half HPE green (#01A982)
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 22" width={size * 1.45} height={size * 0.84} aria-hidden="true">
      <!-- H: left bar, crossbar, right bar -->
      <rect x="0"  y="0"  width="4" height="22" fill="currentColor"/>
      <rect x="0"  y="9"  width="10" height="4" fill="currentColor"/>
      <rect x="6"  y="0"  width="4" height="22" fill="currentColor"/>
      <!-- P: bar + top-right D-shape -->
      <rect x="13" y="0"  width="4" height="22" fill="currentColor"/>
      <path d="M17 0 Q25 0 25 5.5 Q25 11 17 11 Z" fill="currentColor"/>
      <!-- E top (currentColor) -->
      <rect x="28" y="0"  width="4" height="11" fill="currentColor"/>
      <rect x="28" y="0"  width="10" height="3.5" fill="currentColor"/>
      <rect x="28" y="7.5" width="8"  height="3.5" fill="currentColor"/>
      <!-- E bottom (HPE green) -->
      <rect x="28" y="11" width="4" height="11" fill="#01A982"/>
      <rect x="28" y="18.5" width="10" height="3.5" fill="#01A982"/>
    </svg>

  {:else if type === 'gwu'}
    <!--
      GWU logo: "GW" in bold serif, gold horizontal rules above and below
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width={size * 1.3} height={size * 1.3} aria-hidden="true">
      <rect x="0" y="5"  width="52" height="4" fill="#C8A951"/>
      <text x="26" y="40" text-anchor="middle" font-size="28" font-weight="bold"
            fill="currentColor" font-family="Georgia, 'Times New Roman', serif">GW</text>
      <rect x="0" y="43" width="52" height="4" fill="#C8A951"/>
    </svg>

  {:else if type === 'dsce'}
    <!--
      DSCE/DSU circular seal: outer ring + inner circle + "DSU" text
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width={size * 1.1} height={size * 1.1} aria-hidden="true">
      <circle cx="26" cy="26" r="23" fill="none" stroke="#DAA520" stroke-width="4"/>
      <circle cx="26" cy="26" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="26" y="30" text-anchor="middle" font-size="10" font-weight="bold"
            fill="currentColor" font-family="Arial, sans-serif" letter-spacing="0.5">DSU</text>
    </svg>

  {:else if type === 'linkedin'}
    <!--
      LinkedIn Learning icon: blue rounded square with "in" in white
      (matches the LinkedIn Learning logo mark exactly)
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size * 0.88} height={size * 0.88} aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#0A66C2"/>
      <circle cx="10.5" cy="10.5" r="2" fill="white"/>
      <rect x="8.5" y="14" width="4" height="10" fill="white"/>
      <path d="M16 14 L16 24 M16 17.5 Q16 14 20.5 14 Q25 14 25 18 L25 24" stroke="white" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  {:else if type === 'aws'}
    <!--
      AWS: "aws" text + the signature smile/arrow arc
    -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 28" width={size * 0.9} height={size * 0.7} aria-hidden="true">
      <text x="18" y="16" text-anchor="middle" font-size="13" font-weight="bold"
            fill="currentColor" font-family="Arial, sans-serif" letter-spacing="1">aws</text>
      <path d="M7 22 Q18 30 29 22" stroke="currentColor" fill="none" stroke-width="2.2" stroke-linecap="round"/>
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
