const catPics = document.querySelector('#getPic');

getPic.addEventListener('submit', async function (e) {
        e.preventDefault();
        try {
            const config = { header: { 'x-api-key': 'live_A8b2HZBkcv6PsexlEtpA5yDhBpUGjPuTQjqWfmJSu8mKUPyfp0IeawfRHMOOvlNN' } };
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search`, config);
            makePic(res);
        } catch (e) {
            const errorMsg = document.createElement('p');
            errorMsg.innerText = 'Sorry, an error occured. Please try again. :('
            document.body.children[2].append(errorMsg);
        }
})

const makePic = pic => {
    const img = document.createElement('img');
    if (document.body.children[2].children[0]) {
        deletePic(); 
    }
    img.src = pic.data[0].url;
    document.body.children[2].append(img);
}

const deletePic = () => {
    document.body.children[2].children[0].remove();
}