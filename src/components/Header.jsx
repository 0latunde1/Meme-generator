import trollFace from '../assets/troll-face.png'
export default function Header(){
    return(
        <div className="header">
            <img src={trollFace} alt="Troll Face" />
            <p className="meme">Meme Generator</p>
            <p className='course'>React Course - Project 3</p>
        </div>
    )
}