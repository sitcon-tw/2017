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
					<li>遊戲所需時間：以5～10分鐘為佳</li>
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
			</section>
			<section>
				<h2>投稿方式</h2>
				<p>SITCON Unconference 投稿在 02/17 ~ 03/03，只要你是SITCON 2017的會眾，就能以報名序號填寫 Unconference 的投稿表單。</p>
				<p>在投稿截止後，03/04 ~ 03/11 開放投票。 只要報名SITCON 2017 後，就可以憑著 SITCON 2017 票券，填寫 Unconference 投票表單選出自己喜歡的議程或活動喔！</p>
				<p>投票結束後將會在 03/12 公布選上的 Unconference，我們期待你在年會的分享。</p>
				<p><a href="https://goo.gl/6O6ddT" target="blank">投稿連結由此去</a></p>
			</section>
			<section>
				<h2>注意事項</h2>
				<ol>
					<li>投稿及票選 Unconference 議程皆須以 SITCON 2017 票卷的 KKTIX 檢查碼為憑。</li>
					<li>議程組會初步審核 Unconference 內容，除有重大違規，否則議程組不會干涉 Unconference 投稿內容。</li>
					<li>Unconference 議程的品質議程組不予負責。</li>
				</ol>
			</section>
			<section>
				<p>Unconference 負責人：宛諭</p>
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
				<p>天使計畫負責人：小學生</p>
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
			<section>
				<p>程式拼圖負責人：阿哲</p>
			</section>
		</div>
	)
}

const MovieTheater = () => {
	let iframe = function () {
      return {
          __html: '<iframe style="width: 70vw; height:39.375vw;" src="https://www.youtube.com/embed/Y1MszXx6EK8" frameborder="0" allowfullscreen></iframe>'
      }
  }
	return (
		<div>
			<section>
				<h2>SITCON 電影院</h2>
				<p>這世界上，有人努力為環境發聲、有人為弱勢團體發聲、有人為女性發聲。這部片的導演則是透過 Aaron Swartz 和 Edward Snowden 兩名青年，為捍衛自由和開放的網路而發聲。</p>
				<p>為什麼 Aaron Swartz 和 Edward Snowden 決定跳出來捍衛網路？又或者說，為什麼網路需要你我的發聲和捍衛？分享資訊、分享知識這些看起來再平常不過，生活中都能看到甚至都會做的事，卻讓他們惹上大麻煩？</p>
				<p>為讓會眾更深入理解「網路中立與資訊自由」是為了讓在網路上的資訊取得與流通變得更方便，今年 SITCON 大會特別安排「SITCON 電影院」，精選一部為捍衛網路自由而發聲的紀錄片。</p>
				<p>影片內容將會探討通信、網路文化、言論自由、創意、民主等重要價值。現今的網路是否將被少數的強大集團壟斷，還是我們能起身捍衛屬於我們的權益？</p>
			</section>
			<section>
				<h2>《捍衛網權》(Killswitch: The Battle To Control the Internet)</h2>
				<ul>
					<li>放映地點： R0 國際會議廳</li>
					<li>放映時間：19：30 - 20：42</li>
					<li>注意事項：中文字幕，播映 72 分鐘，場內禁止喧嘩，可自由進出。</li>
				</ul>
				<div style={{margin: "0 auto"}} dangerouslySetInnerHTML={ iframe() } />
			</section>
		</div>
	)
}

const Communicate = () => {
	return (
		<div>
			<section>
				<h2>晚間講者交流</h2>
				<p>對於白天的議程，還意猶未盡嗎？</p>
				<p>今年晚上特別安排各講者與會眾能獨立的交談時光，期待分享能激盪出更棒的點子。</p>
			</section>
			<section>
				<h2>講者將按時出席，欲交流者可查詢講者出席時間表</h2>
				<p>時間：18:40-19:00 / 19:30-20:00 </p>
				<p>地點：三樓右側沙發區</p>
				<p>注意事項：</p>
				<ul>
					<li>講者隨時都可自由分享，盡情討論到最晚 20:40。</li>
					<li>講者出席時間表將擇日公告，還請稍候。</li>
				</ul>
			</section>
		</div>
	)
}

const BoF = () => {
	return (
		<div>
			<section>
				<h2>Birds of a Feather</h2>
				<p>BoF 這個慣用語是俗語「物以類聚 (Birds of a Feather)」的簡化，後來被延伸用於形容有共同喜好的人群聚的討論會，更多語源相關資訊可以參考 wiki。</p>
				<p>這是一個主題導向的交流活動。舉凡各大社群聚會、同校同學會、技術同好的經驗分享會、社會議題的討論、各種愛好者聚會、甚至帶有喜感的主題，都非常歡迎！</p>
				<ul>
					<li>當天設有 BoF 活動攤位，提供 BoF 活動相關諮詢</li>
					<li>BoF 活動時間為 18：40～20：40</li>
				</ul>
			</section>
			<section>
				<h3>發起一個新主題吧！</h3>
				<ul>
					<li>第一步，請填寫「<a href='https://goo.gl/pWGZne' target="blank">發起人表單</a>」，留下姓名、主題、信箱、手機號碼，便於主辦單位在大會中聯繫。發起人預設是該主題的負責人，如欲更換負責人請填寫「<a href="https://goo.gl/fwAfu8" target="blank">更動表單</a>」。</li>
					<li>第二步，在「<a href="https://goo.gl/VCJVG6" target="blank">BoF 共筆</a>」文件下方，填寫主題並進行說明，就完成囉。請於 15:40 (點心時間)，至 4F 交誼廳前集合，協調 BoF 場地。</li>
				</ul>
				<h3>來報名 BoF 吧！</h3>
				<p>到「<a href="https://goo.gl/VCJVG6" target="blank">BoF 共筆</a>」文件找找有哪些感興趣的主題吧，接下來就是在主題說明下方留下大名就可以囉。準備一邊享用大會的食物，一邊和同好暢談交流吧。</p>
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
				<section onClick={() => { fancybox(MovieTheater) }}>SITCON 電影院</section>
				<section onClick={() => { fancybox(Communicate) }}>晚間講者交流</section>
				<section onClick={() => { fancybox(BoF) }}>BoF</section>
			</div>
		)
	}
}
