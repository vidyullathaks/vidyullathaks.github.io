<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getEducation, getProfessionalDevelopment, getPageIntros } from '$lib/stores/portfolio';

	// Get education data
	const educationData = getEducation();
	const professionalDevelopment = getProfessionalDevelopment();

	// Get page intro from portfolio data
	const pageIntros = getPageIntros();
</script>

<svelte:head>
	<title>Education | Vidyullatha KS</title>
	<meta name="description" content="Academic qualifications and educational background of Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>Education</h1>

		<p class="intro">
			{pageIntros.education}
		</p>

		<section class="education-section">
			{#each educationData as education}
				<GlassBox padding="1.5rem">
					<div class="education-header">
						<h2>{education.degree}</h2>
						{#if education.logoUrl}
							<a href={education.url} target="_blank" rel="noopener noreferrer" class="institution-logo-link" aria-label="{education.institution} website">
								<img src={education.logoUrl} alt="{education.institution} logo" class="institution-logo-img" />
							</a>
						{/if}
					</div>
					<p class="institution">{education.institution}</p>
					<p class="location">{education.location}</p>
					<p class="period">{education.period}</p>

					<div class="details">
						<h3>Key Coursework</h3>
						<ul>
							{#each education.coursework as course}
								<li>{course}</li>
							{/each}
						</ul>

						<h3>Skills Developed</h3>
						<ul>
							{#each education.skills as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
				</GlassBox>
			{/each}
		</section>

		<section class="certifications">
			<h2>Professional Development</h2>
			<GlassBox padding="1.5rem">
				<p>In addition to formal education, I regularly pursue professional development opportunities to stay current with industry trends and enhance my skill set:</p>

				<ul class="prof-dev-list">
					{#each professionalDevelopment as item}
						<li class="prof-dev-item">
							{#if item.logoUrl}
								<a href={item.url} target="_blank" rel="noopener noreferrer" class="provider-logo-link" aria-label="{item.provider} website">
									<img src={item.logoUrl} alt="{item.provider} logo" class="provider-logo" />
								</a>
							{/if}
							<span>{item.name}</span>
						</li>
					{/each}
				</ul>
			</GlassBox>
		</section>

		<div class="navigation-links">
			<a href="/about" class="nav-link">&larr; About</a>
			<a href="/experience" class="nav-link">Experience &rarr;</a>
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
		margin-bottom: 0.5rem;
		color: var(--color-primary);
	}

	h3 {
		font-size: 1.1rem;
		margin: 1.5rem 0 0.5rem 0;
		color: var(--color-heading);
	}

	.education-section {
		margin-bottom: 2rem;
	}

	.institution {
		font-weight: 600;
		font-size: 1.1rem;
		margin-bottom: 0.2rem;
	}

	.location, .period {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}

	.details {
		margin-top: 1.5rem;
	}

	ul {
		padding-left: 1.2rem;
		margin-top: 0.5rem;
	}

	li {
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.education-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.institution-logo-link {
		display: inline-flex;
		align-items: center;
		border-radius: 8px;
		overflow: hidden;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		flex-shrink: 0;
	}

	.institution-logo-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.institution-logo-img {
		height: 40px;
		width: auto;
		display: block;
	}

	.prof-dev-list {
		list-style: none;
		padding-left: 0;
	}

	.prof-dev-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		line-height: 1.5;
	}

	.provider-logo-link {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
		border-radius: 6px;
		overflow: hidden;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.provider-logo-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
	}

	.provider-logo {
		height: 28px;
		width: auto;
		display: block;
	}

	.certifications {
		margin-bottom: 2rem;
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
