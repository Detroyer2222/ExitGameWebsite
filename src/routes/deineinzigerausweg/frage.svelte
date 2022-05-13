<script lang="ts">

import { onMount } from "svelte";

let elapsedTime : number = 0; // global?

let Question : string = "Wann startete das Duale Masterprogramm an der DHBW Stuttgart?"
let Answer : string = "2011" 
let Hints : string[] = ["Brauchst du Hilfe? Guck mal da drüben. Ich hab gehört, dass die Antwort sich dort irgendwo versteckt...", "Schon im File-System probiert?"]
let AnswerValue: string;
let AnswerCorrect: boolean = false;


onMount(async () => 
{
    if(elapsedTime == 0){
        setInterval(changeElapsedTime, 4000) //change to 120.000 for 2 minutes
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

    <a sveltekit:prefetch href="/morsecode">Morsecode</a>

    <p>Access denied: Sicherheitsfrage nicht beantwortet</p>
    <p class="question">{Question}</p>

    {#if elapsedTime >= 0}
        <p class="hint">{Hints[elapsedTime]}</p>
    {/if}

    {#if elapsedTime >= 0}
        <p class="hint">{Hints[elapsedTime]}</p>
    <input type="text" on:change={ValidateAnswer} bind:value={AnswerValue} disabled={AnswerCorrect}>

    {#if AnswerCorrect}
    <meta http-equiv="refresh" content="0; url=/raum"/>
    {/if}



    {#if elapsedTime >= 1}
        <p>{Hints[0]}</p>
    {/if}
    {#if elapsedTime >= 2}
        <p>{Hints[1]}</p>
    {/if}

</main>

<style>
    
</style>