<script lang="ts">
	let passwordCorrect = false;
	let email = '';
	let password = '';
	let macAdress = 'F0-1D-BC-8E-6C-3B';
	let error = false;
	let host: string;

	let innerWidth = 0;

	function submit() {
		host = window.location.protocol + '/' + window.location.host + '/deineinzigerausweg/frage';
		console.log(host);
		if (password === macAdress) {
			passwordCorrect = true;
			return;
		} else {
			error = true;
		}
	}
</script>

<head>
	<title>Login</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<svelte:window bind:innerWidth />
<main>
	{#if innerWidth < 600}
		Du brauchst ein größeres Display
	{:else}
		<div class="container">
			<div class="row">
				<div class="col-xlg-6">
					<h2 class="text-center text-dark mt-5">Login</h2>
					<div class="card my-5">
						<form
							class="card-body cardbody-color p-lg-5 space-y-5 {$$props.class} "
							on:submit|preventDefault={submit}
						>
							<!--Picture-->
							<div class="text-center">
								<img
									src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
									class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
									width="200px"
									alt="profile"
								/>
							</div>
							<!--username-->
							<div class="mb-3">
								<input
									type="text"
									class="form-control"
									id="Username"
									aria-describedby="emailHelp"
									placeholder="username"
									bind:value={email}
								/>
							</div>
							<!--password-->
							<div class="mb-3">
								<input
									type="password"
									class="form-control"
									id="password"
									placeholder="macadresse"
									bind:value={password}
								/>
							</div>
							<div class="text-center">
								<button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if error}
		<div class="container" style="text-align: center;">
			Falsche Mac-Adresse -> check ipconfig
		</div>
	{/if}

	{#if passwordCorrect}
		<meta http-equiv="refresh" content="0; url=/deineinzigerausweg/frage" />
	{/if}
</main>

<style>
	.btn-color {
		background-color: #0e1c36;
		color: #fff;
	}

	.profile-image-pic {
		height: 200px;
		width: 200px;
		object-fit: cover;
	}

	.cardbody-color {
		background-color: #ebf2fa;
	}
</style>
