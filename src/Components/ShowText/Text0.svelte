<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    export let name
</script>

<div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
    <h1 class="ml1">
      <span class="text-wrapper">
        <span class="line line1"></span>
        <span class="letters">{name}</span>
        <span class="line line2"></span>
      </span>
    </h1>
</div>

<style>
    .ml1 {
  font-weight: 900;
  font-size: 1.9em;
    }

    .ml1 .letter {
    display: inline-block;
    line-height: 1em;
    }

    .ml1 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
    }

    .ml1 .line {
    opacity: 100;
    position: absolute;
    left: 0;
    height: 8px;
    width: 100%;
    background-color: #fff;
    transform-origin: 0 0;
    }

    .ml1 .line1 { top: 0; }
    .ml1 .line2 { bottom: 0; }
</style>