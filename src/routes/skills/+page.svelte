<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getSkills, getPageIntros } from '$lib/stores/portfolio';

	// Get skills data
	const { technical, management, soft } = getSkills();

	// Get page intro from portfolio data
	const pageIntros = getPageIntros();
</script>

<svelte:head>
	<title>Skills | Vidyullatha KS</title>
	<meta name="description" content="Technical and management skills of Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>Skills & Capabilities</h1>

		<p class="intro">
			{pageIntros.skills}
		</p>

		<div class="skills-categories">
			<section class="skills-category">
				<h2>Technical Skills</h2>
				<div class="skills-grid">
					{#each technical as skill}
						<GlassBox padding="1.2rem" className="skill-item">
							<div class="skill-header">
								<h3>{skill.name}</h3>
								<div class="skill-level">
									<div class="level-indicator {skill.level}"></div>
								</div>
							</div>
							<p>{skill.description}</p>
						</GlassBox>
					{/each}
				</div>
			</section>

			<section class="skills-category">
				<h2>Management Skills</h2>
				<div class="skills-grid">
					{#each management as skill}
						<GlassBox padding="1.2rem" className="skill-item">
							<div class="skill-header">
								<h3>{skill.name}</h3>
								<div class="skill-level">
									<div class="level-indicator {skill.level}"></div>
								</div>
							</div>
							<p>{skill.description}</p>
						</GlassBox>
					{/each}
				</div>
			</section>

			<section class="skills-category">
				<h2>Soft Skills</h2>
				<div class="skills-grid">
					{#each soft as skill}
						<GlassBox padding="1.2rem" className="skill-item">
							<div class="skill-header">
								<h3>{skill.name}</h3>
								<div class="skill-level">
									<div class="level-indicator {skill.level}"></div>
								</div>
							</div>
							<p>{skill.description}</p>
						</GlassBox>
					{/each}
				</div>
			</section>
		</div>

		<div class="navigation-links">
			<a href="/experience" class="nav-link">&larr; Experience</a>
			<a href="/projects" class="nav-link">Projects &rarr;</a>
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

	h2 {
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		color: var(--color-primary);
	}

	h3 {
		font-size: 1.1rem;
		margin: 0;
		color: var(--color-heading);
	}

	.intro {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.skills-categories {
		margin-bottom: 2rem;
	}

	.skills-category {
		margin-bottom: 3rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	:global(.skill-item) {
		margin-bottom: 0;
	}

	.skill-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.8rem;
	}

	.skill-level {
		display: flex;
		align-items: center;
	}

	.level-indicator {
		height: 8px;
		width: 80px;
		background-color: rgba(var(--color-primary-rgb), 0.2);
		border-radius: 4px;
		position: relative;
		overflow: hidden;
	}

	.level-indicator::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background-color: var(--color-primary);
		border-radius: 4px;
	}

	.level-indicator.beginner::after {
		width: 25%;
	}

	.level-indicator.intermediate::after {
		width: 50%;
	}

	.level-indicator.advanced::after {
		width: 75%;
	}

	.level-indicator.expert::after {
		width: 100%;
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
