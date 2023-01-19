// @ts-ignore
export async function load({ fetch }) {
	const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
	return { cats: await res.json() };
}
