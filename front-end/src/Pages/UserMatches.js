import { useEffect, useState } from 'react'
import { useParams, Redirect } from 'react-router'
import { useAuth } from '../Context/AuthContext'

import UserCard from '../Components/UserCard.js'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'
import { apiURL } from '../Util/apiURL.js'

const API = apiURL()

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '20px'
  },
  paper: {
    width: '48%',
    height: '640px',
    padding: '10px',
    display: 'grid',
    gridTemplateRows: '10% 40% 7% 23% 18%'
  }
})

function UserMatches () {
  const classes = useStyles()
  const [currentUserMatches, setCurrentUserMatches] = useState([])
  const [sameUser, setSameUser] = useState(false)
  const { currentUserId } = useAuth()
  const { id } = useParams()

  useEffect(() => {
    const unSubscribe = async () => {
      try {
        const { data } = await axios.get(
          `${API}/users/${currentUserId}/feed/matches`
        )
        setCurrentUserMatches(data)
        setSameUser(id == currentUserId)
      } catch (err) {
        console.log(err)
      }
    }
    return unSubscribe()
  }, [currentUserId, id])

  return (
    <>
      <Container className={classes.root}>
        {sameUser ? (
          currentUserMatches.map(profile => {
            return (
              <Paper className={classes.paper}>
                <UserCard profile={profile} key={profile.id} />
              </Paper>
            )
          })
        ) : (
          <Redirect to={`/users/${currentUserId}/feed/matches`} />
        )}
      </Container>
    </>
  )
}

export default UserMatches