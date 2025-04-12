<script>
	// Import GlassBox component
	import GlassBox from '$lib/components/GlassBox.svelte';
</script>

<svelte:head>
	<title>About Me | Vidyullatha KS</title>
	<meta name="description" content="Learn more about Vidyullatha KS, an Engineering Management professional" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>About Me</h1>

		<GlassBox>
			<section class="about-section">
				<p>
					I am a former Hewlett Packard Enterprises professional currently pursuing a Master of Science in
					Engineering Management at George Washington University. Based in Alexandria, VA, I'm passionate
					about leveraging my technical background and management education to excel in Project Management roles.
				</p>

				<p>
					With experience in the technology sector and a strong educational foundation in engineering,
					I am positioned to bridge the gap between technical teams and business objectives.
				</p>
			</section>

			<section class="about-section">
				<h2>Professional Background</h2>
				<p>
					My journey began in engineering, where I developed a solid technical foundation. Working at
					Hewlett Packard Enterprises provided me with valuable insights into technology implementation
					and management. This experience has shaped my understanding of how technical projects can be
					effectively managed to achieve business goals.
				</p>
			</section>

			<section class="about-section">
				<h2>Career Objectives</h2>
				<p>
					I am seeking opportunities in Project Management where I can apply my technical expertise and
					management education to lead teams and deliver successful projects. My goal is to work in
					an environment where I can contribute to organizational success through effective project
					leadership and technical innovation.
				</p>
			</section>

			<section class="interests">
				<h2>Professional Interests</h2>
				<ul>
					<li><strong>Agile Project Management:</strong> Implementing adaptive planning and continuous improvement in technical projects</li>
					<li><strong>Cross-functional Team Leadership:</strong> Developing strategies to lead diverse teams effectively</li>
					<li><strong>Technology Implementation:</strong> Managing the integration of new technologies in enterprise environments</li>
					<li><strong>Process Optimization:</strong> Analyzing and improving workflows for enhanced efficiency</li>
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
