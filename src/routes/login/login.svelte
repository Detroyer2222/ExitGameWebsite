<script lang="ts">
    let passwordCorrect = false;
    let email = '';
    let password = '';
    let macAdress = "123";
    let error = false;
    let host: string;
  
    let innerWidth = 0;
  
  
    function submit() {
      host = window.location.protocol + "/" + window.location.host + "/deineinzigerausweg/frage";
      console.log(host);
      if (password === macAdress) 
      {
          passwordCorrect = true;
          return;
      }
      else
      {
        error = true;
      }
    }
  </script>
  <svelte:window bind:innerWidth />
  <main>
    
    {#if innerWidth < 800}
      Du brauchst ein größeres Display
    {:else}
      <form on:submit|preventDefault={submit} class='space-y-5 {$$props.class}'>
        <input label='Email' id='email' name='email' type='email' bind:value={email} />
        <input label='Password' id='password' name='password' type='password' bind:value={password}/>
        <button type='submit'>Sign Up</button>
      </form>
  
      {#if error}
        Show indication if password falsch + tipp
      {/if}
  
    {/if}
      
  
    {#if passwordCorrect}
      <meta http-equiv="refresh" content="0; url=/deineinzigerausweg/frage"/>
    {/if}
  
  </main>
  
  <style>
  
  </style>