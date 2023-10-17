const BASEURL = process.env.API_URL;

export async function getGuitars () {
    const response = await fetch(`${BASEURL}api/guitars?populate=image`);
    return await response.json();
}

export async function getGuitar (url) {
    const response = await fetch(`${BASEURL}api/guitars?filters[url]=${url}&populate=image`);
    return await response.json();
}