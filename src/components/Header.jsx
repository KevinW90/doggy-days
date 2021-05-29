import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    fontSize: '1.25rem'
  },
  icon: {
    fontSize: theme.typography.iconSize
  }
}))

function Header({ left, center, right }) {
  const classes = useStyles()

  return (
    <section className={classes.header}>
      <SvgIcon component={left.icon} className={classes.icon} />
      <Typography variant="h5">{center.text}</Typography>
      <SvgIcon component={right.icon} className={classes.icon} />
    </section>    
  )
}

export default Header
