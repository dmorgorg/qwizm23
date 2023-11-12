<script lang="ts">
	export let quiz: any;
</script>

<div class={quiz.theme}>
	<header>
		<div class="left">
			{#if quiz.headerLeft[1]}
				<a href="/">Qwizm</a>
				<span class="colons">::</span>
				<a href={quiz.headerLeft[2]}><span>{quiz.headerLeft[0]}</span></a>
			{:else}
				{quiz.headerLeft[0]}
			{/if}
		</div>
		<div class="right">
			{#if quiz.headerRight[1]}
				<a href={quiz.headerRight[2]}><span>{quiz.headerRight[0]}</span></a>
			{:else}
				<div class="module">{@html quiz.headerRight[0]}</div>
			{/if}
			<div>{@html quiz.descriptionRight[0]}</div>
		</div>
	</header>
</div>

<style>
	span.colons {
		font-size: 150%;
		vertical-align: bottom;
	}
</style>
