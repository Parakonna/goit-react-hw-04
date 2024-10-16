import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({articles, onClick}) => {
  return (
     <ul>{articles !== null && articles.map((artikle) => {
       return (<li key={artikle.id}>
           <ImageCard image={artikle} onClick={() => onClick(artikle)} />
	</li>)
    })}		
</ul>
)
}

export default ImageGallery