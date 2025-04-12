<script>
	import GlassBox from '$lib/components/GlassBox.svelte';
</script>

<svelte:head>
	<title>Education | Vidyullatha KS</title>
	<meta name="description" content="Academic qualifications and educational background of Vidyullatha KS" />
</svelte:head>

<div class="page-container">
	<div class="container">
		<h1>Education</h1>

		<section class="education-section">
			<GlassBox padding="1.5rem">
				<h2>MS in Engineering Management</h2>
				<p class="institution">George Washington University</p>
				<p class="location">Washington, DC</p>
				<p class="period">Expected Graduation: 2024</p>

				<div class="details">
					<h3>Key Coursework</h3>
					<ul>
						<li>Project Management for Engineers</li>
						<li>Engineering Economics and Decision Making</li>
						<li>Systems Engineering</li>
						<li>Technology Innovation and Management</li>
						<li>Strategic Management of Technology</li>
					</ul>

					<h3>Skills Developed</h3>
					<ul>
						<li>Project planning and execution</li>
						<li>Risk assessment and management</li>
						<li>Resource allocation strategies</li>
						<li>Technical team leadership</li>
						<li>Strategic decision-making</li>
					</ul>
				</div>
			</GlassBox>

			<GlassBox padding="1.5rem">
				<h2>Bachelor of Engineering</h2>
				<p class="institution">Dayananda Sagar College of Engineering</p>
				<p class="location">Bangalore, India</p>
				<p class="period">Graduated: 2020</p>

				<div class="details">
					<h3>Key Coursework</h3>
					<ul>
						<li>Engineering Fundamentals</li>
						<li>Technical Design and Analysis</li>
						<li>Computer Systems and Programming</li>
						<li>Introduction to Project Management</li>
					</ul>

					<h3>Skills Developed</h3>
					<ul>
						<li>Technical problem-solving</li>
						<li>Engineering design principles</li>
						<li>Analytical thinking</li>
						<li>Technical documentation</li>
					</ul>
				</div>
			</GlassBox>
		</section>

		<section class="certifications">
			<h2>Professional Development</h2>
			<GlassBox padding="1.5rem">
				<p>In addition to formal education, I regularly pursue professional development opportunities to stay current with industry trends and enhance my skill set:</p>

				<ul>
					<li>Continuing education in project management methodologies</li>
					<li>Professional workshops on leadership and team management</li>
					<li>Technical seminars related to emerging technologies</li>
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
