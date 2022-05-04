<script lang="ts">
import { onMount } from "svelte";

let elapsedTime: number;

let Questions : string = "Question to be asked"
let Answer : string = "Answer to be defined here" //maybe have nultiple answers if there is a bit of ambiguity
let Hints : string[] = ["Hint 1", "Hint 2"]


// todo define a timer that starts on page first visited and shows hints
// 

onMount(async () => {
 //2 mins elapsed
});
</script>

<main>
Here go the to be defined questions with help.
A reference to morsecode route is needed here
</main>

<style>

</style>