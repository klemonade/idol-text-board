<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;

	onMount(() => {
anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 5.71],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
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
<h1 class="ml11">
  <span class="text-wrapper relative">
    <span class="line line1"></span>
    <span class='letters absolute top-[-50%] translate-y-[-50%]'>{name}</span>
    <!-- <div> -->
      {#each name.split('') as letter}
            <span class='letter'>{letter}</span>
          {/each}
    <!-- </div> -->
  </span>
</h1>
</div>

<style>
.ml11 {
  font-weight: 700;
  font-size: 2em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.5em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 8px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>