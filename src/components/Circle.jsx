import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles({
  circle: {
    position: 'absolute',
    top: 9,
    left: -17-4.5,
    zIndex: 3,
    borderRadius: 50,
    width: '9px',
    height: '9px'
  }
})

function Circle({ color }) {
  const rgba = color.replace(/(rgb)(.*)(\))/, "0 0 4px 2px $1a$2,.5$3")
  const classes = useStyles()
  
  return (
    <div
      className={classes.circle}
      style={{
        background: color,
        boxShadow: rgba
      }}
    />
  )
}

export default Circle
