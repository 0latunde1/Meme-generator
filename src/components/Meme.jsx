import memesData from '../data/data'
import { useState } from 'react';


export default function Meme(){

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const memeURLs = memesData.data.memes.map(obj=> obj.url)
    
    const randomImageURL = memeURLs[Math.floor(Math.random() * 100)];



    function getMemeImage(){
        setMeme(prevMeme => ({...prevMeme, randomImage: randomImageURL }));
        console.log('Working...')
    }

    return(
        <div className="form" action="" method="GET">
            <div className="inputs">
                <div className="input-1">
                    <input type="text" placeholder="Shut up" />
                </div>
                <div className="input-2">
                    <input type="text" placeholder="And take my money" />
                </div>
            </div>
            <button type="submit" onClick={getMemeImage}>Get a new meme image</button>
            <div className='image--container'><img src={meme.randomImage} alt="A meme image" /></div>
        </div>
    )
}

