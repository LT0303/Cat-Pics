const catPics = document.querySelector('#getPic');

getPic.addEventListener('submit', async function (e) {
        e.preventDefault();
        const config = { header: { 'x-api-key': 'live_A8b2HZBkcv6PsexlEtpA5yDhBpUGjPuTQjqWfmJSu8mKUPyfp0IeawfRHMOOvlNN' } };
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search`, config);
        console.log(res.data);
        makePic(res);

})

const makePic = (pic) => {
    const img = document.createElement('img');
    img.src = pic.data[0].url;
    document.body.children[2].append(img);
}