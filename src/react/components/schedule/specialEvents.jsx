import React, { Component } from 'react'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

const Unconf = () => {
	return (
		<div>
			<section>
				<h2>Unconference</h2>
				<p>不同於由大會排定的議程，Unconference 讓會眾自主決定想聽的講題規劃的議程。在會眾踴躍投票完想要分享的主題之後，透過票選，每位講者有 20 分鐘在交誼廳展現的機會。</p>
				<p>除此之外，Unconference 也歡迎會眾在交誼廳內進行任何的社群活動，只要你有任何線下聚會的好點子，不妨現在就填寫表單、向其他會眾招手吧。</p>
			</section>
			<section>
				<h2>投稿方式</h2>
				<p>SITCON Unconference 投稿在 2/17 ~ 3/03，只要你是 SITCON 2017 的會眾，就能以報名序號填寫 Unconference 的投稿表單。</p>
				<p>在投稿截止後，3/4 ~ 3/11 開放投票。只要報名 SITCON 2017 後，就可以憑著 SITCON 2017 票券，填寫 Unconference 投票表單選出自己喜歡的議程或活動喔！</p>
				<p>投票結束後將會在 3/12 公布選上的 Unconference，我們期待你在年會的分享。</p>
				<p><a href="https://goo.gl/6O6ddT" target="blank">投稿連結由此去</a></p>
			</section>
			<section>
				<h2>注意事項</h2>
				<ol>
					<li>投稿及票選 Unconference 議程皆須以 SITCON 2017 票卷的 KKTIX 檢查碼為憑。</li>
					<li>除有重大違規，否則議程組不會干涉 Unconference 投稿內容。</li>
				</ol>
			</section>
		</div>
	)
}

const Angel = () => {
	return (
		<div>
			<section>
				<h2>天使計畫</h2>
				<p>天使計畫是一個提供會眾們一對一交流機會的活動，在此活動中您可以選擇成為「天使」或是「初心者」，主辦方將會隨機配對天使與初心者，在告知您配對結果後，天使與初心者就可以透過雙方同意的聯絡方式聯絡，在年會當天也可以有更進一步的面對面交流！此活動是為了讓剛接觸年會的人能夠藉由有經驗的人帶領而更快了解年會！歡迎曾參加過年會的人成為天使，來幫助各位初心者喔～</p>
			</section>
			<section>
				<h3>詳細規則：</h3>
				<ol>
					<li>欲報名此活動的會眾，只要在購票表單上勾選參與天使計畫即可。</li>
					<li>您可選擇您同意給予配對方的聯絡方式，但是信箱必須給予主辦方與配對方，以利通知配對結果。</li>
				</ol>
			</section>
			<section>
				<h3>注意事項：</h3>
				<ol>
					<li>主辦方不保證配對成功</li>
					<li>主辦方不處理配對相處狀況</li>
					<li>請詳填資料，若資料不全可能會影響參與活動的資格</li>
					<li>若有任何問題歡迎聯絡計畫負責人</li>
				</ol>
			</section>
			<section>
				<h3>溫情喊話：</h3>
				<ol>
					<li>豐富您的自我介紹，能有機率性的提高配對率唷</li>
					<li>主動並不一定會成功，但被動只會剩下錯過</li>
					<li>大量入坑的初心者們急需引導，曾參與過 SITCON 的會眾快來成為天使吧！</li>
				</ol>
			</section>
		</div>
	)
}

const CodePuzzle = () => {
	return (
		<div>
			<section>
				<h2>程式碼拼圖</h2>
				<p>身為資訊人，你總是用程式解決困難，但你的手中卻只有著部份的程式碼片段，無法解決眼前的幾道難題，正當你感到苦惱時，卻發現身邊的伙伴似乎擁有你所欠缺的其他片段！程式拼圖活動是一個需要和他人一同合作才能通過的小活動，每個人手中都只有片段的程式碼，需要和其他會眾合作，藉由每個人手中的片段組成一正確的程式來解決題目，過關者將可得到 SITCON 精美小禮！此外我們鼓勵大家能在活動中多和其他參與者有更多的交流，若您是程式老手，請不要吝嗇於帶領新手，而新手也不要羞澀於向人提問，並希望您能於活動中結交到志同道合的夥伴！</p>
			</section>
			<section>
				<h2>規則說明：</h2>
				<ol>
					<li>主辦方會提供給所有玩家一個程式的不同片段，玩家需要找到其他相關的碎片，組成一個完整的程式，輸出題目所指定的答案</li>
					<li>題目有五題，請擇一解題即可</li>
					<li>每個人手中都有部分程式碼片段，請尋找在其他人手中的其他片段組成正確解題程式</li>
					<li>每段程式碼不可重複使用</li>
					<li>尋找到足夠之程式碼後，請將正確的程式寫出並交給 Compiler 進行編譯，若解題正確即可獲得獎品</li>
					<li>有任何活動相關疑問皆可向 Debugger 詢問，Debugger 以解釋規則及活動本身相關問題為主，其他如：搜尋夥伴以及題目解法，我們鼓勵參與者主動向身邊夥伴交流討論</li>
					<li>祝大家遊戲愉快</li>
				</ol>
			</section>
			<section>
				<h2>注意事項：</h2>
				<ol>
					<li>會眾於報到後將得到程式碼片段，請在年會期間和其他會眾合作聚集足夠的片段以完成正確的解題程式，並到活動攤位找尋 Compiler 進行編譯。</li>
					<li>活動時間為年會期間，於會場內設有攤位，題目與相關資訊亦將公布於此，歡迎會眾前往查詢，若有任何活動相關疑問皆可向攤位上的 Debugger 詢問。</li>
					<li>會場內設有活動區，供會眾找尋夥伴，但活動不僅限於活動區內進行，會眾可用任何方式尋找夥伴。</li>
				</ol>
			</section>
		</div>
	)
}

const Guide = () => {
	return (
		<div>
			<section>
				<h2>導遊團</h2>
				<p>第一次參加 Conference 嗎？第一次來到 SITCON 嗎？是個怕生的人嗎?到了現場人山人海，不知道從何逛起？不管你是哪種，我們聽見你的聲音了。</p>
				<p>為了照顧第一次參與 Conference 的你，我們舉辦了 SITCON 導遊團，由走訪總召、幹部、講者、攤位，帶您一步步了解 SITCON 的各個面向、運作模式。並認識學生計算機年會的核心概念!</p>
			</section>
			<section>
				<ul>
					<li>活動內容：將由 SITCON 的導遊們帶領報名會眾參觀各站，了解 SITCON。</li>
					<li>每團人數：依照現場報名人數分組，最多10人一團。</li>
					<li>導遊團活動所需時間：30 - 40 分鐘。</li>
					<li>出發時間：中午 12:10。</li>
					<li>報名地點及方式：需提早 10 分鐘至 2F 報到處旁沙發區現場報名。</li>
				</ul>
			</section>
		</div>
	)
}

const Lightning = () => {
	return (
		<div>
			<section>
				<h2>Lightning talk</h2>
				<p>Lightning talk，中文譯為「閃電秀」，顧名思義即為「閃電一般短的演講」。包含準備時間在內，每位講者僅有 3 分鐘的時間上台。用飛快的速度進行簡潔扼要的分享，無論是對台上的講者或是台下的會眾，都是十分刺激又轟動全場的體驗。Lightning talk 將會在年會當天早上於白板區開放報名，先搶先贏，並在所有議程結束後，閉幕前，在國際會議廳進行演講。</p>
			</section>
		</div>
	)
}

export default class extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	render() {
		return (
			<div role="special-events">
				<section onClick={() => { fancybox(Lightning) }}>Lightning Talk</section>
				<section onClick={() => { fancybox(Unconf) }}>Unconf</section>
				<section onClick={() => { fancybox(Angel) }}>天使計畫</section>
				<section onClick={() => { fancybox(Guide) }}>導遊團</section>
				<section onClick={() => { fancybox(CodePuzzle) }}>程式碼拼圖</section>
			</div>
		)
	}
}
