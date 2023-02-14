import './index.css'

const ThumbnailsItem = props => {
  const {eachImageList, onEachThumbnailClick, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageList

  const thumbnailClick = () => {
    onEachThumbnailClick(id)
  }
  const updateActive = isActive
    ? 'thumbnail-image buttonBtn'
    : 'thumbnail-image'
  return (
    <li className="list-each-thumbnail">
      <button
        type="button"
        className="button-thumbnail"
        onClick={thumbnailClick}
      >
        <img
          src={thumbnailUrl}
          className={updateActive}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailsItem
