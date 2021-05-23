import CustomSvg from './CustomSvg'
import './screen-header.scss'

/**
 * A screen-header element for the app.
 * 
 * @param {Icon} left The icon in the left space
 * @param {String} center The text to display in the center
 * @param {Icon | Image} right The icon or image on the right
 * 
 */
function ScreenHeader({ left, center, right }) {
  return (
    <div className="screen-header">
      <div className="screen-header__left">
        <CustomSvg icon={left} />
      </div>

      <div className="screen-header__center">
        <p> My Pets </p>
      </div>

      <div className="screen-header__right">
        { right && <CustomSvg icon={right} /> }
      </div>
    </div>    
  )
}

export default ScreenHeader
