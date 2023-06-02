<script lang="ts">
	import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    export let name
    onMount(() => {

    let textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    })
    setTimeout(() => {
            // dispatch('next')
        }, 2950);
  });
</script>
<div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
  <h1 class="ml2">{name}</h1>
</div>

<style>
  .ml2 {
  font-weight: 900;
  font-size: 2em;
  }

  .ml2 .letter {
    display: inline-block;
    line-height: 1em;
  }
</style>