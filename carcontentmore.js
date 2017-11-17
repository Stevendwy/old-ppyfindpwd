import React, {
	Component
} from 'react'
import InquireCarContentUlLi from './inquirecarcontentulli'

export default class CarContentMore extends Component {
	constructor() {
		super()
		this.state = {
			displayshowed: "block"
		}
	}
	render() {
		return (
			<div  id={this.props.setid} className="InqireCarContainerContent">
				<div className="InquireCarContainerContentTop">
					选择品牌
					<img src="http://007vin.com/ppy/img/Lt/arrow_d.png" alt="" />
				</div>
				<InquireCarContentUlLi ulliid="InquireCarContentUlLiContent1" style = {{display:this.state.displayshowed}}/>
				<InquireCarContentUlLi ulliid="InquireCarContentUlLiContent2" style = {{display:this.state.displayshowed}}/>
				<InquireCarContentUlLi ulliid="InquireCarContentUlLiContent3" style = {{display:this.state.displayshowed}}/>
				<InquireCarContentUlLi ulliid="InquireCarContentUlLiContent4" style = {{display:this.state.displayshowed}}/>
			</div>
		)
	}
}