import SvgIcon from "@material-ui/core/SvgIcon";



function Header({ left, center, right }) {
  return (
    <section className="header">
      <div className="header_left">
        <SvgIcon component={left.icon} />
      </div>

      <div className="header_center">
        <span>{center.text}</span>
      </div>

      <div className="header_right">
        <SvgIcon component={right.icon} />
      </div>
    </section>    
  )
}

export default Header
