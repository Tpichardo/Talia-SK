import { useAPI } from '../Context/AuthContext'
import {Redirect} from 'react-router-dom'

import UserCard from '../Components/UserCard.js'
import NoSearchResults from '../Components/NoSearchResults.js'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '20px'
  },
  paper: {
    width: '48%',
    height: '85vh',
    padding: '10px',
    display: 'grid',
    gridTemplateRows: '10% 32% 13% 2% 18% 12% 8%'
  }
})

function SearchResults () {
  const classes = useStyles()
  const { currentSearchResults } = useAPI()

  return (
    <>
    {currentSearchResults === null ? <Redirect to='/' />
      :<Container className={classes.root}>
        {currentSearchResults?.map(profile => {
          return (
            <Paper className={classes.paper}>
              <UserCard profile={profile} key={profile.id} />
            </Paper>
          )
        })}
        {!currentSearchResults.length && <NoSearchResults />}
      </Container>
    }
    </>
  )
}

export default SearchResults
