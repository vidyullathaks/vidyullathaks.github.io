<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getExperience, getSkills, getPageIntros } from '$lib/stores/portfolio';

	// Get experience data
	const experienceData = getExperience();

	// Get skills data for professional skills section
	const { technical, management } = getSkills();

	// Select a subset of skills to display in professional skills section
	const professionalSkills = [
		technical.find(skill => skill.name === "Technical Documentation"),
		technical.find(skill => skill.name === "Quality Assurance"),
		management.find(skill => skill.name === "Project Coordination"),
		management.find(skill => skill.name === "Process Improvement")
	];

	// Get page intro from portfolio data
	const pageIntros = getPageIntros();
</script>

<svelte:head>
	<title>Experience | Vidyullatha KS</title>
	<meta name="description" content="Professional work experience and career history of Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>Professional Experience</h1>

		<p class="intro">
			{pageIntros.experience}
		</p>

		<section class="experience-section">
			{#each experienceData as experience}
				<GlassBox padding="1.5rem">
					<div class="experience-header">
						<h2>{experience.position}</h2>
						<div class="company-logo">{experience.logo}</div>
					</div>
					<p class="company">{experience.company}</p>
					<p class="location">{experience.location}</p>
					<p class="period">{experience.period}</p>

					<div class="details">
						<h3>Responsibilities</h3>
						<ul>
							{#each experience.responsibilities as responsibility}
								<li>{responsibility}</li>
							{/each}
						</ul>

						<h3>Key Achievements</h3>
						<ul>
							{#each experience.achievements as achievement}
								<li>{achievement}</li>
							{/each}
						</ul>
					</div>
				</GlassBox>
			{/each}
		</section>

		<section class="skills-section">
			<h2>Professional Skills Developed</h2>
			<div class="skills-grid">
				{#each professionalSkills as skill}
					{#if skill}
						<GlassBox padding="1rem" opacity={0.3} className="skill-item">
							<h3>{skill.name}</h3>
							<p>{skill.description}</p>
						</GlassBox>
					{/if}
				{/each}
			</div>
		</section>

		<div class="navigation-links">
			<a href="/education" class="nav-link">&larr; Education</a>
			<a href="/skills" class="nav-link">Skills &rarr;</a>
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

	.experience-section {
		margin-bottom: 2rem;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.company-logo {
		background-color: var(--color-primary);
		color: white;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-size: 0.8rem;
	}

	.company {
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

	.skills-section {
		margin-bottom: 2rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	:global(.skill-item) {
		margin-bottom: 0;
	}

	:global(.skill-item h3) {
		margin: 0 0 0.5rem 0;
		font-size: 1rem;
	}

	:global(.skill-item p) {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		margin: 0;
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
