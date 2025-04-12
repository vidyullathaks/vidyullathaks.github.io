<script>
	// Import GlassBox component
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getAbout, getPageIntros } from '$lib/stores/portfolio';

	// Get about data
	const aboutData = getAbout();

	// Get page intro from portfolio data
	const pageIntros = getPageIntros();
</script>

<svelte:head>
	<title>About Me | Vidyullatha KS</title>
	<meta name="description" content="Learn more about Vidyullatha KS, an Engineering Management professional" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>About Me</h1>

		<p class="intro">
			{pageIntros.about}
		</p>

		<GlassBox>
			<section class="about-section">
				<p>{aboutData.intro}</p>
				<p>{aboutData.background}</p>
			</section>

			<section class="about-section">
				<h2>Professional Background</h2>
				<p>{aboutData.professionalBackground}</p>
			</section>

			<section class="about-section">
				<h2>Career Objectives</h2>
				<p>{aboutData.careerObjectives}</p>
			</section>

			<section class="interests">
				<h2>Professional Interests</h2>
				<ul>
					{#each aboutData.interests as interest}
						<li>{@html interest}</li>
					{/each}
				</ul>
			</section>
		</GlassBox>

		<div class="navigation-links">
			<a href="/" class="nav-link">&larr; Back to Home</a>
			<a href="/education" class="nav-link">Education &rarr;</a>
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

	.intro {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		color: var(--color-primary);
	}

	.about-section {
		margin-bottom: 2rem;
	}

	.about-section p {
		margin-bottom: 1rem;
		line-height: 1.7;
	}

	.interests ul {
		padding-left: 1.2rem;
		margin-top: 1rem;
	}

	.interests li {
		margin-bottom: 0.8rem;
		line-height: 1.7;
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
</style>
