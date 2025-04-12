<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getContact, getPageIntros } from '$lib/stores/portfolio';

	// Get contact data
	const contactData = getContact();

	// Get page intro from portfolio data
	const pageIntros = getPageIntros();
</script>

<svelte:head>
	<title>Contact | Vidyullatha KS</title>
	<meta name="description" content="Contact information and social media profiles for Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<section class="contact-section">
			<h1>Get in Touch</h1>

			<p class="page-intro">
				{pageIntros.contact}
			</p>

			<GlassBox className="contact-card" padding="2rem">
				<p class="intro">
					{contactData.intro}
				</p>

				<div class="social-section">
					<h3>Connect With Me</h3>
					<SocialIcons size={32} gap="2rem" />
				</div>
			</GlassBox>
		</section>

		<section class="availability-section">
			<h2>Current Availability</h2>
			<GlassBox padding="1.5rem">
				<p>
					{contactData.availability}
				</p>
				<ul>
					{#each contactData.availabilityOptions as option}
						<li>{option}</li>
					{/each}
				</ul>
			</GlassBox>
		</section>

		<section class="response-section">
			<h2>Response Time</h2>
			<GlassBox padding="1.5rem">
				<p>
					{contactData.responseTime}
				</p>
			</GlassBox>
		</section>

		<div class="navigation-links">
			<a href="/projects" class="nav-link">&larr; Projects</a>
			<a href="/" class="nav-link">Home &rarr;</a>
		</div>
	</div>
</div>

<style>
	.page-container {
		padding: 3rem 0 4rem 0;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 20px;
	}

	h1 {
		font-size: 2.2rem;
		margin-bottom: 1rem;
	}

	.page-intro {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		color: var(--color-primary);
	}

	h3 {
		font-size: 1.1rem;
		margin: 0 0 0.3rem 0;
		color: var(--color-heading);
	}

	.intro {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		text-align: center;
	}

	.contact-section {
		margin-bottom: 2rem;
	}

	:global(.contact-card) {
		margin-bottom: 2rem;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
	}

	.social-section {
		border-top: 1px solid rgba(var(--color-border-rgb), 0.1);
		padding-top: 1.5rem;
		text-align: center;
		margin-top: 1rem;
	}

	.social-section h3 {
		margin-bottom: 1rem;
	}

	.availability-section, .response-section {
		margin-bottom: 2rem;
	}

	ul {
		padding-left: 1.2rem;
		margin-top: 0.5rem;
	}

	li {
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.navigation-links {
		display: flex;
		justify-content: space-between;
		margin-top: 3rem;
	}

	.nav-link {
		display: inline-block;
		padding: 0.6rem 1rem;
		background-color: rgba(var(--color-card-bg-rgb), 0.5);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 8px;
		border: 1px solid rgba(var(--color-border-rgb), 0.15);
		color: var(--color-text);
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.nav-link:hover {
		background-color: rgba(var(--color-primary-rgb), 0.1);
		color: var(--color-primary);
		border-color: rgba(var(--color-primary-rgb), 0.3);
		transform: translateY(-3px);
	}

	@media (max-width: 768px) {
		:global(.social-section) :global(.social-icons) {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
