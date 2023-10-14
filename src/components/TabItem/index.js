import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-btn-app' : ''

  return (
    <li className="tab-list-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
