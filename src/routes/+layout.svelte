<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import { onMount } from 'svelte';

	let mobileMenuOpen = false;

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close menu when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const navItems = document.querySelector('.nav-items');
		const mobileToggle = document.querySelector('.mobile-toggle');

		if (
			mobileMenuOpen &&
			navItems &&
			mobileToggle &&
			!navItems.contains(target) &&
			!mobileToggle.contains(target)
		) {
			mobileMenuOpen = false;
		}
	}

	// Close menu when nav links are clicked
	function closeMenu() {
		mobileMenuOpen = false;
	}

	onMount(() => {
		// Add click outside listener
		document.addEventListener('click', handleClickOutside);

		// Clean up the listener when component is destroyed
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="app">
	<header>
		<div class="header-backdrop"></div>
		<div class="container">
			<div class="header-content">
				<nav>
					<a href="/" class="home">Vidyullatha KS</a>
					<button class="mobile-toggle" class:active={mobileMenuOpen} aria-label="Toggle menu" on:click={toggleMenu}>
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</button>
					<div class="nav-items" class:active={mobileMenuOpen}>
						<ul>
							<li><a href="/about" on:click={closeMenu}>About</a></li>
							<li><a href="/education" on:click={closeMenu}>Education</a></li>
							<li><a href="/experience" on:click={closeMenu}>Experience</a></li>
							<li><a href="/skills" on:click={closeMenu}>Skills</a></li>
							<li><a href="/projects" on:click={closeMenu}>Projects</a></li>
							<li><a href="/contact" on:click={closeMenu}>Contact</a></li>
						</ul>
					</div>
				</nav>
				<ThemeToggle />
			</div>
		</div>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class="container">
			<SocialIcons size={18} gap="1rem" light={true} />
			<p>&copy; {new Date().getFullYear()} Vidyullatha KS. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(8px);
		background-color: rgba(var(--color-bg-rgb), 0.8);
		z-index: -1;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.container {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 0 20px;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem 0;
	}

	nav a.home {
		font-weight: 700;
		font-size: 1.2rem;
		color: var(--color-text);
		text-decoration: none;
	}

	.nav-items ul {
		display: flex;
		gap: 1.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-items a {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	.nav-items a:hover {
		color: var(--color-primary);
	}

	footer {
		background-color: var(--color-footer-bg);
		color: var(--color-footer-text);
		padding: 1.5rem 0;
		text-align: center;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	footer .container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	footer p {
		margin: 0;
		font-size: 0.9rem;
	}

	.mobile-toggle {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 20px;
		height: 15px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 101;
		margin-left: auto;
		position: relative;
		border-radius: 4px;
		transition: background-color 0.2s ease;
	}

	.mobile-toggle:hover {
		background-color: rgba(var(--color-text-rgb), 0.1);
	}

	.mobile-toggle:active {
		background-color: rgba(var(--color-text-rgb), 0.2);
	}

	.mobile-toggle .bar {
		height: 1.5px;
		width: 100%;
		background-color: var(--color-text);
		border-radius: 1px;
		position: relative;
		box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.2);
	}

	/* Space bars further apart to match image */
	.mobile-toggle .bar:nth-child(1) {
		margin-bottom: 4px;
	}

	.mobile-toggle .bar:nth-child(2) {
		margin-bottom: 4px;
	}

	@media (max-width: 768px) {
		.mobile-toggle {
			display: flex;
		}

		.header-content {
			position: relative;
		}

		nav {
			flex-wrap: wrap;
			position: relative;
		}

		.nav-items {
			display: none;
			position: fixed;
			top: var(--header-height, 60px);
			left: 0;
			right: 0;
			background-color: rgba(var(--color-bg-rgb), 0.95);
			backdrop-filter: blur(8px);
			padding: 1rem;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			z-index: 100;
			width: 100%;
		}

		.nav-items.active {
			display: block;
		}

		.nav-items ul {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.nav-items a {
			font-size: 1.1rem;
			padding: 0.5rem 0;
			display: block;
		}
	}

	:global(body) {
		background: linear-gradient(45deg, #ff7e5f, #feb47b, #ffcda5, #aedd94, #70d6ff, #4d8fac);
		background-size: 600% 600%;
		animation: gradientBackground 15s ease infinite;
		font-family: 'Avenir', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
		color: var(--color-text);
		font-size: 16px;
		line-height: 1.5;
		min-height: 100vh;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	:global(.dark body) {
		background: linear-gradient(45deg, #8a2100, #aa4400, #553355, #224466, #003366, #1a2a3a);
		background-size: 600% 600%;
		animation: gradientBackground 15s ease infinite;
	}

	@keyframes gradientBackground {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
