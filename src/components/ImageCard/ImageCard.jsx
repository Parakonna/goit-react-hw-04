

const ImageCard = ({ artikle, onClick }) => {
  return (
    <div>
          <img src={artikle.urls.small} alt={artikle.alt_description}
          onClick={()=>onClick(artikle.urls.regular)}/>
</div>
  )
}

export default ImageCard