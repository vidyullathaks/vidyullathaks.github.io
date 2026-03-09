<script>
	// Import GlassBox component
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getAbout, getPageIntros, getBeyondWork } from '$lib/stores/portfolio';

	// Get about data
	const aboutData = getAbout();
	const beyondWork = getBeyondWork();

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

		<GlassBox>
			<section class="beyond-section">
				<h2>Beyond Work</h2>
				<p class="beyond-intro">{beyondWork.intro}</p>
				<div class="beyond-items">
					{#each beyondWork.items as item}
						<div class="beyond-item">
							<div class="beyond-item-inner {item.image ? 'has-image' : ''}">
								<div class="beyond-text">
									<div class="beyond-header">
										<h3>{item.category}</h3>
										<div class="beyond-header-right">
											{#if item.link}
												<a href={item.link} target="_blank" rel="noopener noreferrer" class="beyond-link">{#if item.linkLabel === "Watch on YouTube"}<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:inline;vertical-align:-1px;margin-right:4px;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>{/if}{item.linkLabel ?? item.highlight}</a>
											{:else}
												<span class="beyond-highlight">{item.highlight}</span>
											{/if}
										</div>
									</div>
									<p>{item.description}</p>
								</div>
								{#if item.image}
									<div class="beyond-image-wrap">
										<img src={item.image} alt={item.imageAlt ?? item.category} class="beyond-image" />
										{#if item.highlight}<p class="image-caption">{item.highlight}</p>{/if}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
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

	.beyond-section {
		margin-bottom: 2rem;
	}

	.beyond-intro {
		margin-bottom: 1.5rem;
		line-height: 1.7;
		color: var(--color-text-muted, var(--color-text));
		opacity: 0.85;
	}

	.beyond-items {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.beyond-item {
		padding: 1.2rem 1.4rem;
		border-radius: 8px;
		border-left: 3px solid var(--color-primary);
		background: rgba(var(--color-primary-rgb), 0.04);
	}

	.beyond-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.6rem;
		flex-wrap: wrap;
	}

	.beyond-header h3 {
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--color-primary);
		margin: 0;
	}

	.beyond-header-right {
		display: flex;
		align-items: center;
	}

	.beyond-highlight {
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.2rem 0.65rem;
		border-radius: 20px;
		background: rgba(var(--color-primary-rgb), 0.12);
		color: var(--color-primary);
		white-space: nowrap;
	}

	.beyond-link {
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.2rem 0.65rem;
		border-radius: 20px;
		background: rgba(var(--color-primary-rgb), 0.12);
		color: var(--color-primary);
		white-space: nowrap;
		text-decoration: none;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.beyond-link:hover {
		background: rgba(var(--color-primary-rgb), 0.25);
		color: var(--color-primary);
	}

	.beyond-item p {
		margin: 0;
		line-height: 1.7;
		font-size: 0.97rem;
	}

	.beyond-item-inner {
		display: flex;
		flex-direction: column;
	}

	.beyond-item-inner.has-image {
		flex-direction: row;
		align-items: flex-start;
		gap: 1.2rem;
	}

	.beyond-text {
		flex: 1;
	}

	.beyond-image-wrap {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	.beyond-image {
		display: block;
		width: 200px;
		height: auto;
		border-radius: 6px;
	}

	.image-caption {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		text-align: center;
		margin: 0;
		font-style: italic;
	}

	@media (max-width: 640px) {
		.beyond-item-inner.has-image {
			flex-direction: column;
		}

		.beyond-image-wrap {
			width: 100%;
			max-width: 260px;
			margin-top: 1rem;
		}

		.beyond-image {
			width: 100%;
		}
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
