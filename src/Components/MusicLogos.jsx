import image1 from '../Images/AmazonMusic.png'
const MusicLogos =({images})=>{
    
    return (
        <div className='d-flex'style={{marginBottom:'5rem' }}>
        {images.map((src,index) => (
        <img key={index} src={src} alt={`Image ${index}`} style={{width: '8rem',
            marginLeft: '3rem',height: '4rem'}} />
        ))}
        </div>
    )
}

export default MusicLogos;