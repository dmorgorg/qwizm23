<script lang="ts">
	import { localStorageStore } from '@skeletonlabs/skeleton';
	export let quiz: any;
</script>

<section class="login">
	<div class="card">
		<h2>Please Log In</h2>
		<form>
			<ul class="login-list">
				<li>
					<label for="uname">Username:</label>
					<input type="text" id="uname" autocomplete="off" placeholder="jane smith" />
				</li>
				<li>
					<label for="uId">ID number:</label>
					<input type="text" id="uId" autocomplete="off" placeholder="123456" />
				</li>
				<li>
					<button id="login-button" type="submit">Submit</button>
				</li>
			</ul>
		</form>
	</div>
</section>
{quiz.quizId}

<style lang="scss">
	section.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.card {
		background: white;
		border-radius: 0.125em;
		box-shadow: 0.125em 0.125em 0.375em 0.05em rgba(128, 128, 128, 0.375);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2em;
	}
	h2 {
		align-self: flex-start;
		font-family: 'Shadows Into Light', cursive;
		font-weight: bold;
		font-size: 115%;
		letter-spacing: 0.175rem;
		overflow-y: hidden;
		padding-bottom: 0.5em;
		padding-top: 0;
		text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 1);
		word-spacing: -0.35rem;
		margin-bottom: 0;
	}
	ul {
		margin-top: 0;
		padding-left: 0;
	}
	li {
		list-style-type: none;
		margin-top: 1em;

		label {
			font-size: 90%;
		}

		input {
			display: block;
			font-size: 100%;
			margin-top: 0.125em;
			padding: 0.25em 0.5em;

			border: none;
			border-radius: 0.1em;

			&::placeholder {
				font-size: 80%;
				color: #aaa;
			}

			// &:focus {
			// 	@apply outline-1;
			// 	border-color: green;
			// }
		}

		button {
			flex: 1 100%;
			background-color: inherit;
			border-radius: 0.1em;
			cursor: pointer;
			font-size: 115%;
			font-family: 'Shadows Into Light', cursive;
			font-weight: bold;
			padding: 0.125em 0.5em;
			letter-spacing: 0.125rem;
			margin-top: 1em;
			text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 1);
		}
	}
</style>
