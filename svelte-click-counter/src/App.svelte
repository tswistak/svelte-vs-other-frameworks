<script>
	let clicks = 0;

	function increment() {
	  clicks++;
	}

	function decrement() {
	  clicks--;
	}
</script>

<h1>Clicked {clicks} times!</h1>
<button on:click={increment}>Add click</button>
<button on:click={decrement}>Remove click</button>