export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const UPDATERESUME = 'counter/UPDATERESUME'
export const SETCURRENTPAGE = 'counter/SETCURRENTPAGE'
export const SET_ARTICLEID = 'counter/SET_ARTICLEID'
export const FETCH_REQUESTED = 'counter/FETCH_REQUESTED'
export const FETCH_COMPLETE = 'counter/FETCH_COMPLETE'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  currentPage:'about',
  resumeSource:'',
  articleID:'',
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case UPDATERESUME:
      return{
        ...state,
        resumeSource:action.resume,
      }

    case SETCURRENTPAGE:
      return{
        ...state,
        currentPage:action.current
      }

    case SET_ARTICLEID:
      return{
        ...state,
        articleID:action.articleID
      }

    case FETCH_REQUESTED:
      return{
        ...state,
        isFetching: true
      }

    case FETCH_COMPLETE:
      return{
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const updateResume = resume =>{
  return dispatch => {
    dispatch({
      type: UPDATERESUME,
      resume
    })

    dispatch({
      type: FETCH_COMPLETE
    })
  }
}

export const setCurrentPage = current =>({
  type:SETCURRENTPAGE,
  current
})

export const setArticleid = articleID =>({
  type:SET_ARTICLEID,
  articleID
})

export const fetchDropbox = path =>({
  type:FETCH_REQUESTED,
  path
})


/******** redux-thunk ****************/
// import Dropbox from 'dropbox'
//
// export const fetchDropbox = path => {
//   return dispatch => {
//     dispatch({type: FETCH_REQUESTED})
//     let dbx = new Dropbox({accessToken: process.env.dropbox_apikey});
//     return dbx.filesDownload(path)
//       .then( (response) => {
//         let filebuffer = new FileReader()
//         filebuffer.readAsText(response.fileBlob)
//         filebuffer.onload = evt =>
//           dispatch(updateResume(evt.currentTarget.result))
//       })
//   }
// }
