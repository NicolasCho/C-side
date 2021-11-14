//M
const music = props =>{
    <>
        <div className='music-component'>
            <div className='music-details'>
                <h1 className='music-title'>{props.title}</h1>
                <p className='artist-name'>{props.artist['name']}</p>
            </div>
        </div>
    </>
}

export default music;