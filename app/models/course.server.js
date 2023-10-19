const BASEURL = process.env.API_URL;
const getCourse = async () => {
    const response = await fetch(`${BASEURL}api/course?populate=image`);
    return await response.json();
}
    
export { getCourse}