import React, { Component } from 'react'
import loadOSM from './openstreetmap.js'

export default class extends Component {
	componentDidMount() {
		this.setState({osmMap: loadOSM()})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.active !== nextProps.active
	}

	componentDidUpdate(prevProps, prevState) {
		this.state.osmMap.updateSize()
	}

	render() {
		return (
			<div id="transport-page" className={this.props.active ? 'active' : ''}>
				<div id="openstreetmap">
					<div id="map-container"></div>
					<div className="location-address">
						<strong>中央研究院</strong>
						<strong>人文社會科學館</strong>
					</div>
				</div>
				<article>
					<strong>地點</strong>
					<p>台北市南港區中央研究院人文館</p>
				</article>
				<article>
					<strong>地址</strong>
					<p>台北市南港區研究院路二段128號</p>
				</article>
				<article>
					<strong>搭乘交通車</strong>
					<p>可搭乘捷運板南線至南港站（2 號出口）換乘交通車，可乘車時段：08:00-10:00</p>
				</article>
				<article>
					<strong>搭乘捷運</strong>
					<p>搭乘捷運板南線至南港站（2 號出口）換乘公車 212、270 或藍 25 至中研院站，步行入院內至人文館</p>
				</article>
				<article>
					<strong>YouBike</strong>
					<p>在南港展覽館附近租借 YouBike 後，騎乘至研究路 2 段歸還後步行至人文館。</p>
				</article>
				<article>
					<strong>搭乘公車</strong>
					<p>搭乘 212、276、306、620、645、679、205、 小5、小1、小12 等公車至中研院站，步行入院內至人文館</p>
				</article>
				<article>
					<strong>搭乘火車</strong>
					<p>至南港站換乘公車 212、270 或藍 25 至中研院站，步行入院內至人文館</p>
				</article>
				<article>
					<strong>自行開車</strong>
					<p>由國道三號，南深路-中研院匝道〈16km〉出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究院路叉路口，即可看到中研院。車輛進入院區請持證件向大門警衛室換取臨時通行證。假日換證不收費，並請停車於院內道路旁停車格。若您於週一至週五來訪，您須停車至人文社會館 B2，並需支付停車費用（每小時 20 元）。</p>
				</article>
			</div>
		)
	}
}
