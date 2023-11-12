<script lang="ts">
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import { get, type Writable } from 'svelte/store';
	import quiz from './quiz';
	import Header from '$lib/components/Header.svelte';
	import Login from '$lib/components/Login.svelte';
	import Question from '$lib/components/Question.svelte';
	import q01 from '$lib/questions/fluids/08HW/q01';
	import q02 from '$lib/questions/fluids/08HW/q02';

	const quizStore: Writable<string> = localStorageStore(quiz.quizId, '42');
</script>

<div class="outer {quiz.theme}">
	<Header {quiz} />

	{get(quizStore)}

	<main>
		<!-- {#if !readFromLocalStorage(quiz.quizId)} -->
		<Login {quiz} />
	</main>
</div>
