import React, {
	Component
} from 'react'
import {
	render
} from 'react-dom'
import Top from './atop'
import TopNav from './atopnav'
import Middle from './bmiddle'
import Bottom from './cbottom'
import FastClick from './fastclick'
class Page extends Component {

	componentDidMount() {
		FastClick.attach(document.body) //苹果点击延时处理
	}

	click() {
		sendEvent(middleEvents.bodyClick, {}) //增加了全局点击事件
	}

	render() {
		return (
			<div className="PageContainer" onClick={()=>{location.href="/login"}}>
				<Top />
				<TopNav />
				<Middle />
				<Bottom />
			</div>
		)
	}
}

render(
	<Page/>,
	document.getElementById('ppyindex')
)