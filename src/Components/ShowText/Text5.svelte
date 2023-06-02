<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;
	onMount(() => {


anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
		// setTimeout(() => {
		// 	dispatch('next')
		// }, 6000);
	});
</script>

<div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
	<h1 class="ml6">
  <span class="text-wrapper">
    <!-- <span class="letters">{name}</span> -->
    {#each name.split('') as letter}
      <span class='letter'>{letter}</span>
    {/each}
  </span>
</h1>
</div>

<style>
.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 2em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>