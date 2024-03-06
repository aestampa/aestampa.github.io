<script lang="ts">
	import { Button, Li, List, P } from "flowbite-svelte";
	import { OnMount } from "fractils";
	import { fade, fly } from "svelte/transition";
	import { Timeline, TimelineItem } from "flowbite-svelte";
	import Profile from "$lib/images/abby.jpg";

	export let scrollPosition: number = 0;
	let scrolled: boolean;
	$: {
		if (scrollPosition >= 400) scrolled = true;
	}
</script>

<body>
	{#if scrolled}
		<OnMount>
			<br />
			<div class="ml-36 font-serif" in:fly={{ x: -100, duration: 600 }}>
				<P size="6xl" color="black">ABOUT ME</P>
			</div>
			<br />
			<div class="grid grid-cols-2 gap-4">
				<div class="ml-36 font-serif">
					<div
						class="bg-black/50 max-w-3xl px-4 rounded-lg"
						in:fly={{ x: -100, duration: 800 }}
					>
						<br />
						<P class="text-justify">
							Hi, my name is Abby and I am a software developer
							specializing in front-end development. I recently
							graduated with my Bachelor of Science in Computer
							Science at the University of Colorado at Colorado
							Springs and later became a software developer at
							Zivaro, where I expanded my skills in software
							development.
						</P>
						<br />
						<P
							>Below is a list of events leading up to this
							milestone.</P
						>
						<br />
					</div>
					<br />
					<div
						class="bg-black/50 max-w-3xl px-4 rounded-lg text-white"
						in:fly={{ x: -100, duration: 1200 }}
					>
						<br />
						<div>
						<Timeline>
							<TimelineItem
								title="Started school at University of Colorado at Colorado Springs"
								date="August 2020"
							>
								<List
									tag="ul"
									class="space-y-1 text-gray-500 dark:text-gray-400"
								>
									<Li>Majored in Computer Science</Li>
								</List>
							</TimelineItem>
							<TimelineItem
								title="Became a Student Assistant"
								date="March 2022 - May 2023"
							>
								<List
									tag="ul"
									class="space-y-1 text-gray-500 dark:text-gray-400"
								>
									<Li
										>Entered transfer credit into the degree
										audit system for transfer students.</Li
									>
									<Li
										>Developed transfer tables in degree
										audit database</Li
									>
									<Li
										>Updated student admits in Excel
										spreadsheets</Li
									>
								</List>
							</TimelineItem>
							<TimelineItem
								title="Started a Software Developer Internship at Zivaro"
								date="May 2023 - August 2023"
							>
								<List
									tag="ul"
									class="space-y-1 text-gray-500 dark:text-gray-400"
								>
									<Li
										>Collaborated with experienced
										developers to build front-end web
										applications using Svelte and Tailwind
										CSS</Li
									>
									<Li
										>Worked within agile processes for short
										cycle, fast-paced delivery both
										independently and on a team</Li
									>
									<Li
										>Gained practical experience in Test
										Driven Development (TDD) using Vitest
										and PlayWright</Li
									>
									<Li
										>Acquired familiarity with Visual Studio
										Code and Azure DevOps</Li
									>
								</List>
							</TimelineItem>
							<TimelineItem
								title="Graduated College"
								date="August 2023"
							>
								<List
									tag="ul"
									class="space-y-1 text-gray-500 dark:text-gray-400"
								>
									<Li
										>Graduated UCCS with a Bachelor of
										Science in Computer Science</Li
									>
									<Li>Earned Summa Cum Laude Honors</Li>
								</List>
							</TimelineItem>
							<TimelineItem
								title="Earned a Full-Time Position at Zivaro as a Software Developer"
								date="August 2023 - Present"
							>
								<List
									tag="ul"
									class="space-y-1 text-gray-500 dark:text-gray-400"
								>
									<Li
										>Designs and develops interactive and
										responsive user interfaces using Svelte
										and Tailwind CSS</Li
									>
									<Li
										>Assists with implementing RESTful APIs
										for data retrieval using Entity
										Framework (C#) and SQL</Li
									>
									<Li
										>Supports Agile team in high-level
										design, integration and verification of
										software components</Li
									>
									<Li
										>Implements bug fixes and features based
										on feedback from the client as well as
										QA testing</Li
									>
								</List>
							</TimelineItem>
						</Timeline>
						
						<br />
					</div>
					<br />
					<P class="text-justify">
						Throughout this journey, I learned countless skills
						relevant to software development:
					</P>
					<br />
					<div class="grid grid-cols-3 gap-4 dark:text-white bg-black/50 max-w-3xl px-4 rounded-lg">
						<List>
							<Li>HTML</Li>
							<Li>CSS (Tailwind)</Li>
							<Li>JavaScript (Svelte)</Li>
							<Li>TypeScript</Li>
							<Li
								>Test Driven Development (Vitest & PlayWright)</Li
							>
							<Li>Git</Li>
						</List>
						<List>
							<Li>Python</Li>
							<Li>Java</Li>
							<Li>C#</Li>
							<Li>C</Li>
							<Li>C++</Li>
							<Li>SQL</Li>
						</List>
						<List>
							<Li>Object Oriented Programming (OOP)</Li>
							<Li>Visual Studio</Li>
							<Li>Visual Studio Code</Li>
							<Li>Eclipse</Li>
							<Li>Azure DevOps</Li>
							<Li>JSON, RESTful API Integration</Li>
						</List>
					</div>
				</div>
				<img
					src={Profile}
					alt="Abby's Picture"
					width="60%"
					height="60%"
					in:fly={{ x: -100, duration: 800 }}
				/>
			</div>
			<br />
		</OnMount>
	{:else}
		<div class="h-96" />
		<div class="h-96" />
		<div class="h-96" />
	{/if}
</body>

<style>
	body {
		background-image: url("https://i.pinimg.com/originals/3a/ac/74/3aac747a8aa53707fe2d6e2d0af91e57.jpg");
		background-size: cover;
	}
</style>
