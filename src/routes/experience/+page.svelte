<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
</script>

<svelte:head>
	<title>Experience | Vidyullatha KS</title>
	<meta name="description" content="Professional work experience and career history of Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>Professional Experience</h1>

		<section class="experience-section">
			<GlassBox padding="1.5rem">
				<div class="experience-header">
					<h2>Engineering Associate</h2>
					<div class="company-logo">HPE</div>
				</div>
				<p class="company">Hewlett Packard Enterprise</p>
				<p class="location">Bangalore, India</p>
				<p class="period">2020 - 2023</p>

				<div class="details">
					<h3>Responsibilities</h3>
					<ul>
						<li>Collaborated with cross-functional teams to implement technical solutions for enterprise clients</li>
						<li>Participated in project planning and execution, ensuring timely delivery of deliverables</li>
						<li>Helped optimize workflows and improve operational efficiency through process improvement initiatives</li>
						<li>Documented technical specifications and created user guides for implemented solutions</li>
						<li>Conducted quality assurance testing to ensure solution reliability</li>
						<li>Provided technical support and troubleshooting for enterprise systems</li>
					</ul>

					<h3>Key Achievements</h3>
					<ul>
						<li>Successfully contributed to the implementation of 5+ major technical projects</li>
						<li>Recognized for identifying process improvements that reduced workflow inefficiencies by 15%</li>
						<li>Participated in knowledge-sharing initiatives to enhance team capabilities</li>
						<li>Developed documentation templates that were adopted across the department</li>
					</ul>
				</div>
			</GlassBox>

			<GlassBox padding="1.5rem">
				<div class="experience-header">
					<h2>Engineering Intern</h2>
					<div class="company-logo">Intern</div>
				</div>
				<p class="company">Technology Research Institute</p>
				<p class="location">Bangalore, India</p>
				<p class="period">Summer 2019</p>

				<div class="details">
					<h3>Responsibilities</h3>
					<ul>
						<li>Assisted senior engineers with research and development projects</li>
						<li>Collected and analyzed data for ongoing technical initiatives</li>
						<li>Participated in team meetings and contributed to project discussions</li>
						<li>Documented research findings and technical processes</li>
					</ul>

					<h3>Key Achievements</h3>
					<ul>
						<li>Developed a data visualization tool that improved data interpretation efficiency</li>
						<li>Received positive feedback for attention to detail and problem-solving abilities</li>
					</ul>
				</div>
			</GlassBox>
		</section>

		<section class="skills-section">
			<h2>Professional Skills Developed</h2>
			<div class="skills-grid">
				<GlassBox padding="1rem" opacity={0.3} className="skill-item">
					<h3>Technical Coordination</h3>
					<p>Bridging the gap between technical teams and project requirements</p>
				</GlassBox>
				<GlassBox padding="1rem" opacity={0.3} className="skill-item">
					<h3>Documentation</h3>
					<p>Creating comprehensive technical and process documentation</p>
				</GlassBox>
				<GlassBox padding="1rem" opacity={0.3} className="skill-item">
					<h3>Quality Assurance</h3>
					<p>Ensuring solution reliability through systematic testing</p>
				</GlassBox>
				<GlassBox padding="1rem" opacity={0.3} className="skill-item">
					<h3>Process Improvement</h3>
					<p>Identifying and implementing workflow optimizations</p>
				</GlassBox>
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
