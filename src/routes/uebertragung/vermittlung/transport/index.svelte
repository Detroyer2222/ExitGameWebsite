<script lang="ts">
	import { onMount } from 'svelte';

	let AnswersSent: number = 0;
	let ChatBox: string = '';
	let UserName: string = '';
	let IsAskingUserName: boolean = false;
	let ServerAnswers: string[] = [
		'Hallo?',
		'Wer bist du?',
		'Brauchst du Hilfe',
		'Wo bist du denn?',
		'Okay ich schicke jemand vorbei um dir zu helfen!'
	];
	let Messages: string[] = [];
	let Users: string[] = [];

	async function SendMessage() {
		Messages.push(ChatBox);

		if (IsAskingUserName) {
			UserName = ChatBox;
		}

		ChatBox = '';

		UpdateMessages();
		await delay(500);

		SendAnswer();
	}

	function SendAnswer() {
		if (ServerAnswers.length > AnswersSent) {
			const name = AnswersSent === 2 ? ' ' + UserName + '?' : '';
			const message = ServerAnswers[AnswersSent] + name;
			Messages.push(message);
		} else {
			//Game finished route to some success screen
		}

		if (AnswersSent === 1) {
			IsAskingUserName = true;
		}

		AnswersSent = AnswersSent + 1;
		UpdateMessages();
	}

	async function AddUsersToChat() {
		Users.push('User');
		Users = Users;
		await delay(300);

		Users.push('Server');
		Users = Users;
		await delay(100);

		SendAnswer();
	}

	async function HandleKeypress(event: any) {
		if (event.key === 'Enter') {
			await SendMessage();
		}
	}

	onMount(async () => {
		await AddUsersToChat();
	});

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function UpdateMessages() {
		Messages = Messages;
	}
</script>

<html lang="en">
	<main>
		<div class="container">
			<div class="chatWindow">
				{#each Users as user}
					<div class="connectionBubble">{user} joined Chat</div>
				{/each}

				{#each Messages as message, i}
					{#if i % 2 === 1}
						<div class="chatBubble responseBubble">{message}</div>
					{:else}
						<div class="chatBubble answerBubble">{message}</div>
					{/if}
				{/each}
			</div>
			<div class="actionContainer">
				<input class="chatBox" bind:value={ChatBox} on:keydown={HandleKeypress} />
				<button on:click={SendMessage}>Send</button>
			</div>
		</div>
	</main>

	<style>
		.container {
			display: grid;
			flex-direction: column;
		}
		.actionContainer {
			justify-self: right;
		}
		.chatWindow {
			display: grid;
			flex-direction: column;
			background-color: #faf9f6;
			margin: 5em;
			width: 20em;
			justify-self: center;
		}

		.connectionBubble {
			justify-self: center;
			border-radius: 6px;
			font-size: small;
			background-color: #636363;
			margin: 0.4em;
			padding: 0.25em;
			color: white;
		}

		.chatBubble {
			margin: 0.5em;
			padding: 0.3em;
			border-radius: 10px;
			height: fit-content;
			font-size: medium;
			width: fit-content;
		}

		.answerBubble {
			justify-self: left;
			background-color: #8e8e93;
			color: white;
		}

		.responseBubble {
			justify-self: right;
			background-color: #147efb;
			color: white;
		}

		.chatBox {
			width: 20em;
		}

		main,
		html {
			font-family: 'Courier New', Courier, monospace;
			background-color: #fefaf3;
		}
	</style>
</html>
