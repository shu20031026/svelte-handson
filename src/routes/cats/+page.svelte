<script>
  export let data;

  let { cats } = data;

  const fetchCats = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    cats = [...(await res.json())];
  };

  const onClickRefreshCats = () => {
    fetchCats();
  };
</script>

<h1>Random cats</h1>
<button on:click={onClickRefreshCats}> Refresh cats </button>
<div class="cats-container">
  {#each cats as cat (cat.id)}
    <img
      src={cat.url}
      alt="Cat image of {cat.id}"
      width="300"
      height="300"
      class="cat-image"
    />
  {/each}
</div>

<style>
  .cats-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.2rem;
    max-width: calc(900px + 0.4rem);
  }

  .cat-image {
    object-fit: cover;
  }
</style>
