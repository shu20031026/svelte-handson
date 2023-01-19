// @ts-ignore
export async function load({ fetch }) {
	const res = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
	return { dogs: await res.json() };
}
