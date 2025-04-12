<script>
  export let size = 24;
  export let gap = "1.2rem";
  export let light = false;
</script>

<div class="social-icons" style="--gap: {gap};">
  <a href="mailto:vidyullatha1997@gmail.com" aria-label="Email" class="social-icon" class:light style="--size: {size}px;">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  </a>

  <a href="https://linkedin.com/in/vidyullatha-ks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon" class:light style="--size: {size}px;">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>

  <a href="https://github.com/vidyullathaks" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="social-icon" class:light style="--size: {size}px;">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  </a>

  <a href="https://instagram.com/vidyullathaks" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-icon" class:light style="--size: {size}px;">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </a>
</div>

<style>
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
    margin: 1rem 0;
  }

  .social-icon {
    display: flex;
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
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .social-icon.light {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .social-icon:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--color-primary-rgb), 0.05);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    border-radius: 50%;
  }

  .social-icon:hover {
    transform: translateY(-3px);
    color: var(--color-primary);
    border-color: rgba(var(--color-primary-rgb), 0.3);
    box-shadow: 0 6px 15px rgba(var(--color-primary-rgb), 0.15);
  }

  .social-icon.light:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  .social-icon:hover:after {
    opacity: 1;
  }

  /* Light theme styles */
  :global(:root:not(.dark)) .social-icon:not(.light) {
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Dark theme styles */
  :global(.dark) .social-icon:not(.light) {
    background-color: rgba(30, 30, 30, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .social-icon:not(.light):hover {
    box-shadow: 0 6px 15px rgba(var(--color-primary-rgb), 0.2);
  }
</style>
