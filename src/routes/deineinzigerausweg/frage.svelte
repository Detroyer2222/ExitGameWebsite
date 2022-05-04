<script lang="ts">

import { onDestroy, onMount } from "svelte";
import { writable } from "svelte/store";

let elapsedTime : number = 0; // global?

let Question : string = "Question to be asked"
let Answer : string = "123" //maybe have multiple answers if there is a bit of ambiguity
let Hints : string[] = ["Hint 1", "Hint 2"]
let AnswerValue: string;
let AnswerCorrect: boolean = false;

// todo define a timer that starts on page first visited and shows hints

onMount(async () => 
{
    if(elapsedTime == 0){
        setInterval(changeElapsedTime, 1000) //change to 120.000 for 2 minutes
    }
});


function changeElapsedTime(){
    elapsedTime += 1;
}

function ValidateAnswer()
{
    if(AnswerValue === Answer)
    {
        //answer is correct
        AnswerCorrect = true;
    }
    else
    {
        //answer is incorrect
        AnswerCorrect = false;
    }
}

</script>

<main>
    
Here go the to be defined questions with help.
A reference to morsecode route is needed here.

<p class="question">{Question}</p>

{#if elapsedTime >= 0}
    <p class="hint">{Hints[0]}</p>
{/if}
{#if elapsedTime >= 0}
    <p class="hint">{Hints[1]}</p>
{/if}

<input type="submit" on:change={ValidateAnswer} value={AnswerValue} disabled={AnswerCorrect}>

{#if AnswerCorrect}
asdf
{/if}

</main>

<style>
    .hint{
        font-size: large;
    }
</style>