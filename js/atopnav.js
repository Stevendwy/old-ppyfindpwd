import React, {
	Component
} from 'react'

export default class TopNav extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="AtopNav">
				<ul className="AtopNavUl">
					<li><a href="/ppy?_t=vin">首页</a></li>
					<li><img src="http://007vin.com/ppy/img/Lt/arrow_r.png" alt="" /></li>
					<li><a onClick={()=>{history.go(-1)}}>登录</a></li>
					<li><img src="http://007vin.com/ppy/img/Lt/arrow_r.png" alt="" /></li>
					<li className="AtopNavBorder">找回密码</li>
				</ul>
			</div>
		)
	}
}