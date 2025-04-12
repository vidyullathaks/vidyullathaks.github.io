<script lang="ts">
	// Import components
	import GlassBox from '$lib/components/GlassBox.svelte';
	import SocialIcons from '$lib/components/SocialIcons.svelte';

	// Import portfolio data through the store
	import { getPersonalInfo, type PersonalInfo } from '$lib/stores/portfolio';

	// Get personal info data
	const personalInfo = getPersonalInfo();
</script>

<svelte:head>
	<title>{personalInfo.name} | {personalInfo.title}</title>
	<meta name="description" content="Portfolio website for {personalInfo.name}, {personalInfo.mainTagline}" />
</svelte:head>

<main>
	<section class="hero">
		<div class="container">
			<GlassBox className="hero-glass-box" hoverEffect={false}>
				<div class="hero-content">
					<div class="text-content">
						<h1>{personalInfo.name}</h1>
						<h2>{personalInfo.title}</h2>
						{#if personalInfo.mainTagline}
							<p class="tagline">{personalInfo.mainTagline}</p>
						{/if}
						{#if personalInfo.university}
							<p class="university">{personalInfo.university}</p>
						{/if}
					</div>
					<div class="photo-bubble">
						<img
							src={personalInfo.photo}
							alt={`Photo of ${personalInfo.name}`}
							class="profile-photo"
						/>
					</div>
				</div>
			</GlassBox>
		</div>
	</section>
</main>

<style>
	main {
		max-width: 100%;
		margin: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		max-width: 80%;
		width: 100%;
		padding: 0;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	section {
		padding: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 3.5rem;
		margin-bottom: 0.8rem;
	}

	h2 {
		font-size: 2.2rem;
		margin-bottom: 1.5rem;
		text-align: left;
	}

	.hero {
		padding: 0;
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.hero-glass-box) {
		padding: 0;
		margin: 0;
		width: 100%;
		max-width: 100%;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-content {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		max-width: 1000px;
		padding: 0 2rem;
	}

	.text-content {
		text-align: left;
		padding-right: 0;
		max-width: 600px;
	}

	.hero h2 {
		font-weight: 400;
		color: var(--color-primary);
		margin-bottom: 1.2rem;
	}

	.tagline {
		font-size: 1.4rem;
		color: var(--color-text-muted);
		max-width: 500px;
		margin: 0;
		margin-bottom: 0.3rem;
	}

	.university {
		font-size: 1.4rem;
		color: var(--color-text-muted);
		max-width: 500px;
		margin: 0;
		font-weight: 500;
	}

	.photo-bubble {
		margin-left: 60px;
		display: flex;
		justify-content: center;
	}

	.profile-photo {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid rgba(var(--color-primary-rgb), 0.3);
	}

	.social-container {
		margin-top: 3rem;
	}

	@media (max-width: 1200px) {
		.hero-content {
			max-width: 90%;
		}
	}

	@media (max-width: 900px) {
		.container {
			max-width: 90%;
		}

		:global(.hero-glass-box) {
			padding: 0;
			height: 450px;
		}

		.text-content {
			padding-right: 40px;
		}

		.photo-bubble {
			margin-left: 30px;
		}

		.profile-photo {
			width: 250px;
			height: 250px;
		}
	}

	@media (max-width: 768px) {
		.container {
			max-width: 95%;
		}

		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		.tagline, .university {
			font-size: 1.2rem;
		}

		.hero-content {
			flex-direction: column;
			text-align: center;
			padding: 2rem;
		}

		.text-content {
			margin-bottom: 3rem;
			padding-right: 0;
			text-align: center;
		}

		.hero h2 {
			text-align: center;
		}

		.tagline, .university {
			margin: 0 auto;
		}

		.tagline {
			margin-bottom: 0.3rem;
		}

		.photo-bubble {
			margin-left: 0;
		}

		.profile-photo {
			width: 220px;
			height: 220px;
		}

		:global(.hero-glass-box) {
			height: auto;
			padding: 3rem 2rem;
		}
	}
</style>
