const catPics = document.querySelector('#catPics');

catPics.addEventListener('submit', async function (e) {
        e.preventDefault();
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search`);
        console.log(res.data);
        //makePic(res);
})

function makePic(pic) {
    const img = document.createElement('img');
    img.src = pic.data;
    document.body.append(img);
}