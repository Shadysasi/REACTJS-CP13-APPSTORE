import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="list-app-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="image-text">{appName}</p>
    </li>
  )
}
export default AppItem
