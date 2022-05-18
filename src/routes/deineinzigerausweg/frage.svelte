<script lang="ts">
	import { onMount } from 'svelte';

	let elapsedTime: number = 0; // global?

	let Question: string = 'Wann startete das Duale Masterprogramm an der DHBW Stuttgart?';
	let Answer: string = '2011';
	let Hints: string[] = [
		'Brauchst du Hilfe? Guck mal da drüben. Ich hab gehört, dass die Antwort sich dort irgendwo versteckt...',
		'Schon im File-System probiert?'
	];
	let AnswerValue: string;
	let AnswerCorrect: boolean;
	let AnswerWarning: boolean = false;

	onMount(async () => {
		if (elapsedTime == 0) {
			setInterval(changeElapsedTime, 30000); //change to 120.000 for 2 minutes
		}
	});

	function changeElapsedTime() {
		elapsedTime += 1;
	}

	function ValidateAnswer() {
		if (AnswerValue === Answer) {
			//answer is correct
			AnswerCorrect = true;
		} else {
			//answer is incorrect
			AnswerCorrect = false;
			AnswerWarning = true;
		}
	}
</script>

<html lang="en">
	<head>
		<title>Sicherheitsfrage</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
		/>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
	</head>

	<main>
		<div class="container">
			<h1>Sicherheitsfrage</h1>

			<h3 class="question">{Question}</h3>
			{#if AnswerWarning}
				<p>Access denied: Sicherheitsfrage falsch beantwortet</p>
			{/if}
			{#if AnswerCorrect}
				<meta http-equiv="refresh" content="0; url=/raum" />
			{/if}

			<input
				class="form-control border-"
				type="text"
				on:change={ValidateAnswer}
				bind:value={AnswerValue}
				disabled={AnswerCorrect}
			/>

			{#if elapsedTime >= 1}
				<p>{Hints[0]}</p>
			{/if}
			{#if elapsedTime >= 2}
				<p>{Hints[1]}</p>
			{/if}
		</div>
	</main>

	<style>
		.container {
			display: flex;
			flex-direction: column;
			height: fit-content;
			width: 700px;
			margin-top: 100px;
			margin-left: 0px;

			padding: 0px !important;
		}

		main {
			font-family: 'Courier New', Courier, monospace;
			background-color: #fefaf3;
		}
		html {
			font-family: 'Courier New', Courier, monospace;
			background-color: #fefaf3;
		}
		.form-control {
			margin-top: 70px;
			margin-bottom: 70px;
			box-shadow: none;

			background-color: #fefaf3;
			border-top: none;
			border-left: none;
			border-right: none;
			border-radius: 0px;
		}
		.form-control:hover {
			border-color: black;
			background-color: #fefaf3;
			box-shadow: none;
		}
		.form-control:focus {
			border-color: black;
			background-color: #fefaf3;
			box-shadow: none;
		}
	</style>
</html>
