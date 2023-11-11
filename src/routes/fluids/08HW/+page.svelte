<script lang="ts">
	import quiz from './quiz';
	import Header from '$lib/components/Header.svelte';
	import Login from '$lib/components/Login.svelte';
	import Question from '$lib/components/Question.svelte';
	import q01 from '$lib/questions/fluids/08HW/q01';
	import q02 from '$lib/questions/fluids/08HW/q02';
	//   import { readFromLocalStorage, writeToLocalStorage } from "$lib/utils/utils"
</script>

<div class="container {quiz.theme}">
	<Header {quiz} />

	<div class="outer">
		<!-- {#if readFromLocalStorage(quiz.quizId) === null} -->
		<Login {quiz} />
		<!-- {/if} -->
		<!-- <Question question={q01} />
      <Question question={q02} /> -->
	</div>
</div>
