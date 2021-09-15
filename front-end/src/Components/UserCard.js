import Button from '@material-ui/core/Button'
import MousePopOver from './MousePopOver'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    margin: '0',
    textAlign: 'center',
    padding: '10px'
  },
  image: {
    width: '75%',
    padding: '20px',
    margin: '0',
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center'
  },
  flex: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  flex45: {
    display: 'flex',
    width: '45%'
  },
  button: {
    borderRadius: '40px'
  },
  box:{
	  display: 'grid',
	  gridRow: '3 / 4',
	  placeItems: 'center',
	width: '100%',
	paddingTop: '8px',
  }
})

function UserCard ({ profile }) {
  const classes = useStyles()

  const { name, lastname, location, karma } = profile
  const { experience } = profile.experience
  const { goals } = profile.goals
  const { days } = profile.availability

  return (
    <>
      <h4 className={classes.root}>
        {name} {lastname}
      </h4>
      <img
        className={classes.image}
        src='data:image/jpeg;base64,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'
        alt='buddypic'
      />
      <Box component='fieldset' mb={3} borderColor='transparent' className={classes.box}>
        <Typography component='legend' variant="h6" className={classes.box}>Social Karma</Typography>
        <Rating name='read-only' value={Math.round(Number(karma))} readOnly />
      </Box>
      <div className={classes.flex}>
        <MousePopOver prop={Object.assign({ value: days })}>
          <Button variant='outlined' className={classes.button}>
            Availability
          </Button>
        </MousePopOver>
        <MousePopOver prop={Object.assign({ value: location })}>
          <Button variant='outlined' className={classes.button}>
            Location
          </Button>
        </MousePopOver>
        <MousePopOver prop={Object.assign({ value: experience })}>
          <Button variant='outlined' className={classes.button}>
            Experience
          </Button>
        </MousePopOver>
        <MousePopOver prop={Object.assign({ value: goals })}>
          <Button variant='outlined' className={classes.button}>
            Goals
          </Button>
        </MousePopOver>
      </div>

      <div className={classes.flex}>
        <Button variant='contained' color='primary' className={classes.flex45}>
          Match
        </Button>
        <Button variant='contained' color='primary' className={classes.flex45}>
          Message
        </Button>
      </div>
    </>
  )
}
export default UserCard