import React from "react";
import memesData from "../memeData";

export default function MemeForm() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: memesData.data.memes[0].url
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function generateMemeImg() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNumber].url);
        setMeme(prevMeme => (
            {...prevMeme, randomImage: memesArray[randomNumber].url}
        ));
    }

    function handleChange(event){
        setMeme(prevState => ({
            ...prevState,
            [event.target.name] : [event.target.value]
        }))
    }

    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />

                <button
                    type="button"
                    className="form--button"
                    onClick={generateMemeImg}
                >
                    Generate Meme
                </button>
            </form>
            <div className="container">
                <img src={meme.randomImage} className="main--meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>

    );
}