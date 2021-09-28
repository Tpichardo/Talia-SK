import { Paper } from '@material-ui/core'
import { useAPI } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import MapBox from './MapBox'

import { makeStyles } from '@material-ui/core/styles'

import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'
import pencil from '../Assets/pencil.png'
import user from '../Assets/user.png'
import pin from '../Assets/pin.png'
import calendar from '../Assets/calendar.png'
import certification from '../Assets/certification.png'
import target from '../Assets/target.png'
import map from '../Assets/map.png'
import linkedin from '../Assets/linkedin.png'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    width: 'auto',
    marginTop: '-5%',
    padding: 0,
    display: 'grid',
    gridTemplateRows: 'auto minmax(auto,10%) 1fr 1fr'
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem'
  }
})

function Profile () {
  const { currentUserData } = useAPI()
  const { id } = useParams()
  const classes = useStyles()

  const {
    name,
    lastname,
    gender,
    location,
    availabledays,
    experience,
    goals,
    radius
  } = currentUserData

  return (
    <Paper className={classes.root}>
      <div id='profHeader' className='profBackground'>
        <img
          className='profPic'
          src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt=''
          style={{ width: '200px', height: '180px' }}
        />
      </div>

      <div id='cardContainer'>
        <h2 id='card'>
          {name} {lastname}
        </h2>

        <div id='socials'>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img
              src={instagram}
              alt='instagram login'
              className='socialImage'
            />
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='facebook login' className='socialImage' />
          </a>
          <a href='https://www.linkedin.com/'>
            <img src={linkedin} alt='Linkedin login' className='socialImage' />
          </a>
          <a
            href='https://twitter.com/?lang=en'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='Twitter login' className='socialImage' />
          </a>
        </div>
      </div>

      <div>
        <div className='containerGrid'>
          <div className='item1'>
            <div className={classes.flexCenter}>
              <div id='editiconContainer'>
                <h2>About</h2>
                <div id='editicon'>
                  <Link to={`users/${id}/edit`}>
                    <img
                      src={pencil}
                      alt='editicon'
                      style={{ width: '20px' }}
                    />
                  </Link>
                </div>
              </div>

              <h5>
                Gender:
                <ul>
                  <li>
                    <img src={user} alt='user' />
                    {gender}
                  </li>
                </ul>
              </h5>

              <h5>
                Location:
                <ul>
                  <li>
                    <img src={pin} alt='location pin' />
                    {location}
                  </li>
                </ul>
              </h5>
              <h5>
                Availablility:
                <ul>
                  <li>
                    <img
                      src={calendar}
                      style={{ width: '25px' }}
                      alt='calendar'
                    />
                    {availabledays
                      ? `${availabledays[0]}, ${availabledays[1]}`
                      : ''}
                  </li>
                </ul>
              </h5>
              <h5>
                Experience :
                <ul>
                  <li>
                    <img src={certification} alt='certifications' />
                    {experience}
                  </li>
                </ul>
              </h5>

              <h5>
                Goals:
                <ul>
                  <li>
                    <img src={target} alt='target' />

                    {goals
                      ? `${goals[0]}, ${goals[1]}, ${goals[2]}, ${goals[3]} `
                      : ''}
                  </li>
                </ul>
              </h5>

              <h5>
                Radius:
                <ul>
                  <li>
                    <img src={map} alt='map with location tags' />
                    {radius} miles
                  </li>
                </ul>
              </h5>
            </div>
          </div>

          <div id='badges' className='item2'>
            <div className={classes.flexCenter}>
              <h2>Badges</h2>
              <div>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/2928/2928144.png'
                  alt=''
                  style={{ width: '30px' }}
                />

                <h4>Great Motivator</h4>
                <h6>-Enthusiastic</h6>
              </div>

              <div>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/4053/4053735.png'
                  alt=''
                  style={{ width: '30px' }}
                />
                <h4>Spot On</h4>
                <h6>-Assisted in lifting heavy weights safely</h6>
              </div>

              <div>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/2843/2843974.png'
                  alt=''
                  style={{ width: '30px' }}
                />
                <h4>Mobility Master</h4>
                <h6>-Stretch tightented muscles before workout</h6>
              </div>

              <div>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/2090/2090622.png'
                  alt=''
                  style={{ width: '30px' }}
                />
                <h4>Punctuality</h4>
                <h6>-Responds on time</h6>
              </div>

              <div>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/2237/2237680.png'
                  alt=''
                  style={{ width: '30px' }}
                />
                <h4>Cardiologist</h4>
                <h6>-Increase BPM</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='item4'>
        <MapBox adjustmentWidth={0.2} adjustmentHeight={0.3} />
      </div>
    </Paper>
  )
}
export default Profile
