<script lang=ts>
    type Card = {
      id: number | string;
      title: string;
      author: string;
      content: string;
    };
    export let listCard: Card[];
    export let typeClient: string;
    const handleClick = (item: Card) => {
        console.log(item);
    };
    console.log(typeClient);
</script>
<div class="grid grid-cols-3 gap-2 mx-2 text-white">
    {#each listCard as item, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li class="link-card font-bold" on:click={handleClick(item)}>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a>
                <h2>
                    {item.title}
                    <span>&rarr;</span>
                    {item.author}
                </h2>
                <p>
                    {item.content}
                </p>
            </a>
        </li>
    {/each}
</div>

<style>
	.link-card {
		list-style: none;
		display: flex;
		padding: 1px;
		background-color: #23262d;
		background-image: none;
		background-size: 400%;
		border-radius: 7px;
		background-position: 100%;
		transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
	}
	.link-card > a {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		padding: calc(1.5rem - 1px);
		border-radius: 8px;
		color: white;
		background-color: #23262d;
		opacity: 0.8;
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
		transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}
	p {
		margin-top: 0.5rem;
		margin-bottom: 0;
	}
	.link-card:is(:hover, :focus-within) {
		background-position: 0;
		background-image: var(--accent-gradient);
	}
	.link-card:is(:hover, :focus-within) h2 {
		color: rgb(var(--accent-light));
	}
</style>