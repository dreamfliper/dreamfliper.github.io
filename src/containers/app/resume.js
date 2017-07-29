import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,updateResume } from '../../modules/counter'
import store from '../../store'
import Markdown from 'react-remarkable'
import Dropbox from 'dropbox'

class Resume extends Component {

    componentDidMount() {
      let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
      (async function getResume(){
				let data = await dbx.sharingGetSharedLinkFile({url: 'https://www.dropbox.com/s/zmkkxstuxje515o/Resume.md?dl=0'})
				console.log(data)
				let blob = data.fileBlob
				let filebuffer = new FileReader()
				filebuffer.readAsText(blob)
				filebuffer.onload = evt =>{
					// console.log(evt.currentTarget.result)
					store.dispatch(updateResume(evt.currentTarget.result))
					store.dispatch(increment())
				}
			})()
    }

    render() {
        return (
				  <div>
				    <h1>Resume Page</h1>
				    <Markdown source={this.props.resumeSource} />
				  </div>
        );
    }
}


const mapStateToProps = state => ({
  resumeSource: state.counter.resumeSource,
})

export default connect(
  mapStateToProps,
)(Resume)
