const BASEURL = process.env.API_URL;

export async function getPosts () {
    const response = await fetch(`${BASEURL}api/posts?populate=image`);
    return await response.json();
}


export async function getPost (url) {
    const response = await fetch(`${BASEURL}api/posts?filters[url]=${url}&populate=image`);
    return await response.json();
}