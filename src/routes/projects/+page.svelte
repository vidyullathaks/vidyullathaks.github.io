<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
	import { getProjects, getPageIntros } from '$lib/stores/portfolio';

	// Get projects data
	const projectsData = getProjects();

	// Get page intro from portfolio data
	const pageIntros = getPageIntros();
</script>

<svelte:head>
	<title>Projects | Vidyullatha KS</title>
	<meta name="description" content="Projects and work by Vidyullatha KS - Engineering Management Professional" />
</svelte:head>

<div class="projects-page">
	<div class="container">
		<h1>Projects</h1>
		<p class="intro">
			{pageIntros.projects}
		</p>

		<div class="projects-grid">
			{#each projectsData as project}
				<GlassBox className="project-card">
					<div class="project-content">
						<h2>{project.title}</h2>
						<p class="project-type">{project.type}</p>
						<p>{project.description}</p>
						<ul class="skills-used">
							{#each project.skills as skill}
								<li>{skill}</li>
							{/each}
						</ul>
						<div class="project-footer">
							<span class="date">{project.date}</span>
						</div>
					</div>
				</GlassBox>
			{/each}
		</div>

		<div class="back-link">
			<a href="/skills">&larr; Skills</a>
			<a href="/contact">Contact &rarr;</a>
		</div>
	</div>
</div>

<style>
	.projects-page {
		padding: 2rem 0 4rem 0;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 20px;
	}

	h1 {
		font-size: 2.2rem;
		margin-bottom: 1.5rem;
	}

	.intro {
		font-size: 1.1rem;
		max-width: 800px;
		margin-bottom: 2.5rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	:global(.project-card) {
		overflow: hidden;
		padding: 0 !important;
		transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
	}

	.project-content {
		padding: 1.5rem;
	}

	h2 {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
		color: var(--color-primary);
	}

	.project-type {
		color: var(--color-primary);
		font-size: 0.9rem;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.skills-used {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
		gap: 0.5rem;
	}

	.skills-used li {
		background-color: var(--color-skill-bg);
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		font-size: 0.85rem;
		color: var(--color-primary);
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.project-footer {
		display: flex;
		justify-content: flex-end;
		border-top: 1px solid var(--color-border);
		padding-top: 1rem;
		margin-top: 1rem;
		transition: border-color 0.3s ease;
	}

	.date {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.back-link {
		display: flex;
		justify-content: space-between;
		margin-top: 3rem;
	}

	.back-link a {
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

	.back-link a:hover {
		background-color: rgba(var(--color-primary-rgb), 0.1);
		color: var(--color-primary);
		border-color: rgba(var(--color-primary-rgb), 0.3);
		transform: translateY(-3px);
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
