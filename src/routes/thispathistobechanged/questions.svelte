<script lang="ts">

import { onDestroy, onMount } from "svelte";
import { timer } from "./stores/timer";

let elapsedTime: number = 0; // global?

let Questions : string = "Question to be asked"
let Answer : string = "Answer to be defined here" //maybe have nultiple answers if there is a bit of ambiguity
let Hints : string[] = ["Hint 1", "Hint 2"]

// todo define a timer that starts on page first visited and shows hints

onMount(async () => 
{
    elapsedTime = Number(timer);
 //2 mins elapsed
 //check if intervalId exists or else
    if(elapsedTime == 0){
        setInterval(changeElapsedTime, 4000) //change to 120.000 for 2 minutes
    }
});

onDestroy(async () =>
{
    //timer.set(elapsedTime);
});

function Increment(_event: any)
{
    elapsedTime++;
    //timer.set(elapsedTime);
}

function Decrement(_event: any)
{
    elapsedTime--;
    //timer.set(elapsedTime);
}

function changeElapsedTime(){
    elapsedTime += 1;
}

</script>

<main>
    
Here go the to be defined questions with help.
A reference to morsecode route is needed here

Timer : {timer}
<button on:click={Increment}>Increment timer</button>
<button on:click={Decrement}>Decrement timer</button>

{#if elapsedTime >= 1}
    <p class="hint">HintOne</p>
{/if}
{#if elapsedTime >= 2}
    <p class="hint">HintTwo</p>
{/if}



</main>

<style>
    .hint{
        font-size: large;
    }
</style>