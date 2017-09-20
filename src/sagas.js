import { /*select,*/ takeEvery, call, put } from 'redux-saga/effects'
import Dropbox from 'dropbox'

function readText (fileBlob) {
  return new Promise(function (resolve, reject) {
	  let filebuffer = new FileReader()
		filebuffer.readAsText(fileBlob)
    filebuffer.onload = evt => resolve(evt.currentTarget.result);
    filebuffer.onerror = reject;
  });
}

function dropboxApi(path) {
  let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
	return dbx.filesDownload(path)
}

function* fetchDropbox(action) {
  const {fileBlob} = yield call(dropboxApi, action.path)
  const resume =  yield call(readText,fileBlob)
	yield put({type: 'counter/UPDATERESUME',resume})
	yield put({type: 'counter/FETCH_COMPLETE'})
}

// function* logger(action) {
//   const state = yield select()

//   console.log('action', action)
//   console.log('state after', state)
// }

export default function* rootSaga() {
  yield takeEvery("counter/FETCH_REQUESTED", fetchDropbox);
  // yield takeEvery('*', logger)
}