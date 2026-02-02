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
							<div class="project-links">
								{#if project.github}
									<a href={project.github} target="_blank" rel="noopener noreferrer" class="project-link github-link">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
										GitHub
									</a>
								{/if}
								{#if project.link}
									<a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
										View Project
									</a>
								{/if}
							</div>
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
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--color-border);
		padding-top: 1rem;
		margin-top: 1rem;
		transition: border-color 0.3s ease;
	}

	.project-links {
		display: flex;
		gap: 0.75rem;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		color: var(--color-primary);
		text-decoration: none;
		padding: 0.3rem 0.6rem;
		border-radius: 6px;
		border: 1px solid rgba(var(--color-primary-rgb), 0.2);
		transition: all 0.3s ease;
	}

	.project-link:hover {
		background-color: rgba(var(--color-primary-rgb), 0.1);
		border-color: rgba(var(--color-primary-rgb), 0.4);
	}

	.project-link svg {
		flex-shrink: 0;
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
