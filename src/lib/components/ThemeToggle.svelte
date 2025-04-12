<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  let mounted = false;
  let isOpen = false;

  function setTheme(newTheme: 'light' | 'dark' | 'system') {
    theme.set(newTheme);
    isOpen = false;
  }

  function toggleDropdown() {
    isOpen = !isOpen;
    console.log('Theme dropdown toggled:', isOpen); // Debug log
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-toggle-container')) {
      isOpen = false;
    }
  }

  onMount(() => {
    mounted = true;
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

{#if mounted}
  <div class="theme-toggle-container">
    <button
      class="theme-toggle-btn"
      on:click={toggleDropdown}
      aria-label="Toggle theme"
      aria-expanded={isOpen}
    >
      {#if $theme === 'light'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      {:else if $theme === 'dark'}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14 7 9"></path><path d="M12 19 7 14"></path><path d="M12 9 17 14"></path><path d="M12 14 17 19"></path></svg>
      {/if}
    </button>

    {#if isOpen}
      <div class="theme-dropdown">
        <div class="theme-dropdown-inner">
          <button
            class="theme-option"
            class:active={$theme === 'light'}
            on:click={() => setTheme('light')}
            aria-label="Light theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>
          <button
            class="theme-option"
            class:active={$theme === 'dark'}
            on:click={() => setTheme('dark')}
            aria-label="Dark theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          <button
            class="theme-option"
            class:active={$theme === 'system'}
            on:click={() => setTheme('system')}
            aria-label="System theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14 7 9"></path><path d="M12 19 7 14"></path><path d="M12 9 17 14"></path><path d="M12 14 17 19"></path></svg>
          </button>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .theme-toggle-container {
    position: relative;
    z-index: 9999;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .theme-toggle-btn {
    background-color: transparent;
    border: 1px solid rgba(var(--color-border-rgb), 0.3);
    color: var(--color-text);
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .theme-toggle-btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--color-border-rgb), 0.1);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .theme-toggle-btn:hover {
    background-color: rgba(var(--color-bg-rgb), 0.3);
    transform: scale(1.05);
    border-color: rgba(var(--color-primary-rgb), 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }

  .theme-toggle-btn:hover:after {
    transform: scale(1.5);
    opacity: 0;
  }

  .theme-toggle-btn svg {
    color: var(--color-text);
    transition: all 0.3s ease;
  }

  .theme-toggle-btn:hover svg {
    color: var(--color-primary);
    transform: scale(1.1);
  }

  .theme-dropdown {
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    margin-top: 5px;
    z-index: 9999;
    width: 70px;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .theme-dropdown-inner {
    background-color: rgba(var(--color-card-bg-rgb), 0.25);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    width: 100%;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }

  /* Light theme specific styles for the dropdown */
  :global(:root:not(.dark)) .theme-dropdown-inner {
    background-color: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Dark theme specific styles for the dropdown */
  :global(.dark) .theme-dropdown-inner {
    background-color: rgba(18, 18, 18, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  }

  .theme-option {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.9rem 0.8rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(var(--color-border-rgb), 0.08);
    cursor: pointer;
    color: var(--color-text);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 2px;
  }

  .theme-option:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  /* Background hover effect */
  .theme-option:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--color-primary-rgb), 0.03);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    border-radius: 12px;
  }

  .theme-option:hover:after {
    opacity: 1;
  }

  .theme-option:hover {
    transform: translateY(-2px);
    color: var(--color-primary);
  }

  .theme-option.active {
    background-color: rgba(var(--color-primary-rgb), 0.08);
    color: var(--color-primary);
  }

  .theme-option.active svg {
    color: var(--color-primary);
    filter: drop-shadow(0 0 4px rgba(var(--color-primary-rgb), 0.2));
  }

  .theme-option svg {
    color: var(--color-text);
    transition: all 0.3s ease;
  }

  .theme-option:hover svg {
    transform: scale(1.15);
    color: var(--color-primary);
    filter: drop-shadow(0 0 3px rgba(var(--color-primary-rgb), 0.3));
  }

  :global(.dark) .theme-toggle-btn {
    border-color: rgba(255, 255, 255, 0.1);
  }

  :global(.dark) .theme-toggle-btn:hover {
    border-color: rgba(var(--color-primary-rgb), 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .theme-toggle-container {
      margin: 0.5rem 0;
    }

    .theme-dropdown {
      position: absolute;
      right: 0;
      left: auto;
    }
  }
</style>
