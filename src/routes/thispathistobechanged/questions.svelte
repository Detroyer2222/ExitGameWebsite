<script lang="ts">

import { onDestroy, onMount } from "svelte";
import { writable } from "svelte/store";

let elapsedTime : number = 0; // global?

let Questions : string = "Question to be asked"
let Answer : string = "123" //maybe have multiple answers if there is a bit of ambiguity
let Hints : string[] = ["Hint 1", "Hint 2"]

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

   //FormValidation
function validateForm() {
  let x = document.forms["answerform"]["fanswer"].value;
  if (x == Answer) { //Referenz Auf die AnwortVariable
    return true
  }
}



</script>

<main>
    
Here go the to be defined questions with help.
A reference to morsecode route is needed here.

<p class="question">{Questions}</p>

{#if elapsedTime >= 0}
    <p class="hint">{Hints[0]}</p>
{/if}
{#if elapsedTime >= 0}
    <p class="hint">{Hints[1]}</p>
{/if}

<form name="answerform" onsubmit="return validateForm()" action="Redirect" method="post">
    Answer: <input type="text" name="fanswer">
    <input type="submit" value="Submit">
</form>

<script>
 
</script>

</main>

<style>
    .hint{
        font-size: large;
    }
</style>