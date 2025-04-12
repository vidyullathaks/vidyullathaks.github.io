<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
</script>

<svelte:head>
	<title>Skills | Vidyullatha KS</title>
	<meta name="description" content="Technical and management skills of Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>Skills & Capabilities</h1>

		<p class="intro">
			My unique combination of technical knowledge and management education has provided me with a diverse
			skill set that allows me to effectively bridge the gap between technical teams and business objectives.
		</p>

		<div class="skills-categories">
			<section class="skills-category">
				<h2>Technical Skills</h2>
				<div class="skills-grid">
					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Engineering Processes</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Implementation and optimization of standardized engineering processes</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Technical Documentation</h3>
							<div class="skill-level">
								<div class="level-indicator expert"></div>
							</div>
						</div>
						<p>Creating comprehensive technical specifications and user guides</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Quality Assurance</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Implementing testing methodologies to ensure solution reliability</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Data Analysis</h3>
							<div class="skill-level">
								<div class="level-indicator intermediate"></div>
							</div>
						</div>
						<p>Analyzing and interpreting data to inform technical decisions</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>System Integration</h3>
							<div class="skill-level">
								<div class="level-indicator intermediate"></div>
							</div>
						</div>
						<p>Implementing solutions that connect different technical systems</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Technical Troubleshooting</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Diagnosing and resolving complex technical issues</p>
					</GlassBox>
				</div>
			</section>

			<section class="skills-category">
				<h2>Management Skills</h2>
				<div class="skills-grid">
					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Project Coordination</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Managing project timelines, resources, and deliverables</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Team Collaboration</h3>
							<div class="skill-level">
								<div class="level-indicator expert"></div>
							</div>
						</div>
						<p>Working effectively across cross-functional teams</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Resource Planning</h3>
							<div class="skill-level">
								<div class="level-indicator intermediate"></div>
							</div>
						</div>
						<p>Allocating resources efficiently to meet project needs</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Strategic Analysis</h3>
							<div class="skill-level">
								<div class="level-indicator intermediate"></div>
							</div>
						</div>
						<p>Evaluating options to determine optimal approaches</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Risk Management</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Identifying and mitigating potential project risks</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Process Improvement</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Optimizing workflows for increased efficiency</p>
					</GlassBox>
				</div>
			</section>

			<section class="skills-category">
				<h2>Soft Skills</h2>
				<div class="skills-grid">
					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Communication</h3>
							<div class="skill-level">
								<div class="level-indicator expert"></div>
							</div>
						</div>
						<p>Clearly conveying complex information to diverse audiences</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Problem Solving</h3>
							<div class="skill-level">
								<div class="level-indicator advanced"></div>
							</div>
						</div>
						<p>Analyzing challenges and developing effective solutions</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Adaptability</h3>
							<div class="skill-level">
								<div class="level-indicator expert"></div>
							</div>
						</div>
						<p>Flexibly responding to changing requirements and environments</p>
					</GlassBox>

					<GlassBox padding="1.2rem" className="skill-item">
						<div class="skill-header">
							<h3>Leadership</h3>
							<div class="skill-level">
								<div class="level-indicator intermediate"></div>
							</div>
						</div>
						<p>Guiding teams toward shared goals and objectives</p>
					</GlassBox>
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
