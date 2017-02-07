import React, { Component } from 'react'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

const GameArena = () => {
	return (
		<div>
			<section>
				<h2>遊戲擂台賽</h2>
				<p>想讓你開發的遊戲獲得展現的舞台亦或是想觀摩其他人開發的遊戲嗎？今年SITCON規劃了晚上活動—遊戲擂台賽。</p>
				<p>現場會眾可自由遊玩所有遊戲，並可使用一旁的紙筆寫下對遊戲的建議及評語供開發者參考！</p>
			</section>
			<section>
				<h2>注意事項：</h2>
				<ol>
					<li>遊戲所需設備（例如主機及螢幕）需自備，現場將備有桌椅和電源，不提供有線網路</li>
					<li>我們歡迎任何種類的游戲，但遊戲內禁止含有血腥、暴力、色情，我們特別期待學生的投稿</li>
					<li>2016/02/17 （五） 開放投稿</li>
					<li>2017/03/03 （五） 23:59 投稿截止</li>
					<li>2017/03/10 （五） 通知甄選結果</li>
				</ol>
			</section>
			<section>
				<h2>投稿方式：</h2>
				<p>請寄信至 session@sitcon.org，信件內附上遊戲及說明遊戲類型、遊戲介紹（20字以上，含操作方式）、開發者、開發心得（選填）和你的報名序號</p>
			</section>
			<section>
				<h2>甄選標準：</h2>
				<ol>
					<li>遊戲內容：是否創新、有趣、酷炫</li>
					<li>遊戲所需時間：以5～10分鐘佳</li>
				</ol>
			</section>
		</div>
	)
}

const Unconf = () => {
	return (
		<div>
			<section>
				<h2>Unconference</h2>
				<p>不同於由大會排定的議程，Unconference 讓會眾自主決定想聽的講題規劃的議程。在會眾踴躍投票完想要分享的主題之後，透過票選，每位講者有 20 分鐘在交誼廳展現的機會。</p>
				<p>除此之外，Unconference 也歡迎會眾在交誼廳內進行任何的社群活動，只要你有任何線下聚會的好點子，不妨現在就填寫表單、向其他會眾招手吧。</p>
				<p>SITCON Unconference 徵選在 02/17 ~ 03/03，只要你是SITCON 2017的會眾，就能以報名序號填寫 Unconference 的徵選表單。</p>
				<p>在徵選截止後，03/04 ~ 03/11 開放投票。只要報名SITCON 2017 後，就可以憑著 SITCON 2017 票券，填寫 Unconference 投票表單選出自己喜歡的議程或活動喔！</p>
			</section>
		</div>
	)
}

const Angel = () => {
	return (
		<div>
			<section>
				<h2>天使計畫</h2>
				<p>天使計畫是一個提供會眾們一對一交流機會的活動，在此活動中您可以選擇成為『天使』或是『初心者』，主辦方將會隨機配對天使與初心者，在告知您配對結果後，天使與初心者就可以透過雙方同意的聯絡方式聯絡，在年會當天也可以有更進一步的面對面交流！此活動是為了讓剛接觸年會的人能夠藉由有經驗的人帶領而更快了解年會！歡迎曾參加過年會的人成為天使，來幫助各位初心者喔～</p>
			</section>
			<section>
				<h2>詳細規則：</h2>
				<ol>
					<li>欲報名此活動的會眾，只要在購票表單上勾選參與天使計畫即可。</li>
					<li>您可選擇您同意給予配對方的聯絡方式，但是信箱必須給予主辦方與配對方，以利通知配對結果。</li>
					<li>主辦方在年會當天也會提供 App ，讓雙方查詢配對的夥伴</li>
				</ol>
			</section>
			<section>
				<h2>注意事項：</h2>
				<ol>
					<li>主辦方不保證配對成功</li>
					<li>主辦方不處理配對相處狀況</li>
					<li>請詳填資料，若資料不全可能會影響參與活動的資格</li>
					<li>若有任何問題歡迎聯絡計畫負責人</li>
				</ol>
			</section>
			<section>
				<h2>溫情喊話：</h2>
				<ol>
					<li>豐富您的自我介紹，能有機率性的提高配對率唷</li>
					<li>主動並不一定會成功，但被動只會剩下錯過</li>
					<li>大量入坑的初心者們急需引導，曾參與過 SITCON 的會眾快來成為天使吧！</li>
				</ol>
			</section>
			<section>
				<p>天使計畫負責人：小學生 teresa860712@gmail.com 0988016743</p>
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
					<li>尋找到足夠之程式碼後，請將正確的程式寫出並交給 compiler 進行編譯，若解題正確即可獲得獎品</li>
					<li>有任何活動相關疑問皆可向 Debugger 詢問，但除了規則及活動本身相關問題外，搜尋夥伴以及題目解決問題鼓勵參與者自行向身邊夥伴交流解決</li>
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
			<section>
				<p>程式拼圖負責人：阿哲</p>
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
				<section onClick={() => { fancybox(GameArena) }}>遊戲擂台賽</section>
				<section onClick={() => { fancybox(Unconf) }}>Unconf</section>
				<section onClick={() => { fancybox(Angel) }}>天使計畫</section>
				<section onClick={() => { fancybox(CodePuzzle) }}>程式碼拼圖</section>
			</div>
		)
	}
}

