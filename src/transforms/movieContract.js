import _ from 'lodash'
import moment from 'moment'

// Array of items to pick in movie contract from socket return
const movieItems = [
  'adult',
  'fullPosterPath',
  'id',
  'listeningToken',
  'originalTitle',
  'overview',
  'releaseYear',
  'status',
  'title',
  'voteAverage',
  'voteCount'
]

export const transformMovieContract = (obj) => {
  if (!_.isEmpty(obj)) {
    obj = _.chain(obj)
      .mapKeys((v, k) => _.camelCase(k))
      .pick(movieItems)
      .value()
    obj = {
      ...obj,
      releaseYear: moment(obj.releaseDate).format('YYYY'),
      summary: obj.overview || ''
    }
  }
  return obj
}
