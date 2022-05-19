<html lang="en">
	<script lang="ts">
	</script>

	<head>
		<title>Beta</title>
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
			<div class="col-8">
				<img
					class="image"
					src="../Morse/Beta_Morsetabelle.png"
					alt="Bild von Morsecode"
					width="1100px"
				/>
			</div>
			<div class="col-4">
				<h2 style="margin-bottom:30px">Beta</h2>
				<p />
				<p />
				<a sveltekit:prefetch class="btn" href="/">
					Route am besten von hier</a>
			</div>
		</div>
	</main>

	<style>
		.container {
			display: flex;
			height: fit-content;
			width: fit-content;
			margin-top: 100px;

			padding: 0px !important;
		}
		.image {
			max-height: 100%;
			max-width: 100%;
		}
		.col-8 {
			background-color: #ffffff;
			height: fit-content;
			padding: 5px;

			box-shadow: 0px 0px 5px grey;
		}
		.col-4 {
			background-color: #ffffff;
			padding: 20px;

			box-shadow: 0px 0px 5px grey;
			margin-left: 20px;
		}
		.btn:hover {
			background-color: #d4d4d4;
		}
		html {
			font-family: 'Courier New', Courier, monospace;
			background-color: #fefaf3;
		}
		main {
			font-family: 'Courier New', Courier, monospace;
			background-color: #fefaf3;
		}
	</style>
</html>
