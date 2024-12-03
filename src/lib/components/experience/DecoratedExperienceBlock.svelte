<script lang="ts">
	let {
		dateRange,
		company,
		titles,
		description,
		details,
		achievements
	}: {
		dateRange: string;
		company: string;
		titles: string[];
		description: string;
		details: string[];
		achievements: string[];
	} = $props();
</script>

{#if dateRange}
	<div>
		<h3 class="font-secondary">{dateRange}</h3>
	</div>
{/if}
<div class="flex flex-col items-start border-l-2 border-light pl-4">
	{#if company}
		<p class="font-secondary text-2xl font-bold uppercase">{company}</p>
	{/if}
	<div class="flex flex-col items-start gap-4">
		{#if description}
			<p class="font-secondary font-extralight lg:text-lg">
				{@html description}
			</p>
		{/if}
		{#if details.length > 0}
			<div>
				<ul class="list-disc pl-4">
					{#each details as detail}
						<li>
							<p class="font-secondary font-extralight lg:text-lg">
								{@html detail}
							</p>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if achievements.length > 0}
			<div>
				<h4 class="font-secondary font-bold">Achievements</h4>
				<ul class="list-disc pl-4">
					{#each achievements as achievement}
						<li>
							<p class="font-secondary font-extralight lg:text-lg">
								{@html achievement}
							</p>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if titles.length > 0}
			<div>
				<h4 class="mb-2 font-secondary font-bold">Roles</h4>
				<div class="border-l-2 border-light pl-4">
					<ul>
						<li>
							{#each titles as title}
								<p class="w-full font-secondary text-lg font-extralight">{title}</p>
							{/each}
						</li>
					</ul>
				</div>
			</div>
		{/if}
	</div>
</div>
