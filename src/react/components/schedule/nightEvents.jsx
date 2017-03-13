import React, { Component } from 'react'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

const GameArena = () => {
	return (
		<div>
			<section>
				<h2>遊戲擂台賽</h2>
				<p>想讓你開發的遊戲獲得展現的舞台亦或是想觀摩其他人開發的遊戲嗎？今年 SITCON 規劃了晚上活動——遊戲擂台賽。</p>
				<p>現場會眾可自由遊玩所有遊戲，並可留下對遊戲的建議及評語供開發者參考！</p>
			</section>
			<section>
				<h2>注意事項：</h2>
				<ol>
					<li>遊戲所需設備（例如主機及螢幕）需自備，現場將備有桌椅和電源，不提供有線網路</li>
					<li>我們歡迎任何種類的游戲，但禁止太過血腥、暴力、色情的遊戲，我們特別期待學生的投稿</li>
					<li>2016/02/17 （五） 開放投稿</li>
					<li>2017/03/03 （五） 23:59 投稿截止</li>
					<li>2017/03/10 （五） 通知甄選結果</li>
				</ol>
			</section>
			<section>
				<h2>投稿方式：</h2>
				<p>請填寫<a href='https://goo.gl/uZYU9y' target="blank">投稿表單</a></p>
			</section>
			<section>
				<h2>甄選標準：</h2>
				<ol>
					<li>遊戲內容：是否創新、有趣、酷炫</li>
					<li>玩遊戲所需時間：以 5 ~ 10 分鐘為佳</li>
				</ol>
			</section>
		</div>
	)
}

const MovieTheater = () => {
	let iframe = function () {
      return {
          __html: '<iframe style="width: 70vw; height: 39.375vw; max-width: 907px; max-height: 510px;" src="https://www.youtube.com/embed/Y1MszXx6EK8" frameborder="0" allowfullscreen></iframe>'
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
				<h2>《捍衛網權》(Killswitch: The Battle to Control the Internet)</h2>
				<ul>
					<li>放映地點：R0 國際會議廳</li>
					<li>放映時間：19:30 ~ 20:42</li>
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
				<h3>講者出沒時刻表</h3>
				<p>
					<strong>18:40 - 18:45</strong><br />
					黃勝雄 博士 、Karl Lin、民2、 Tony & Clara(SITCON x HK)、ㄅㄌ
				</p>
				<p>
					<strong>18:45 - 18:50</strong><br />
					yenWu、licson、ming、阿哲、PineApple
				</p>
				<p>
					<strong>18:50 - 19:00</strong><br />
					何明諠 先生、飛魚、Terry Cheong、Yukai Huang、Jason Pan、Louie Lu
				</p>
				<p>
					<strong>19:30 - 20:00</strong><br />
					LegBone、Sakamoto、Inndy、adr、游宭鎬、Shouko
				</p>
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
				<p>BoF 這個慣用語是俗語「物以類聚 (Birds of a Feather)」的簡化，後來被延伸用於形容有共同喜好的人群聚的討論會，更多語源相關資訊可以參考<a href='https://en.wikipedia.org/wiki/Birds_of_a_feather_(computing)' target="blank">維基百科</a>。</p>
				<p>這是一個主題導向的交流活動。舉凡各大社群聚會、同校同學會、技術同好的經驗分享會、社會議題的討論、各種愛好者聚會、甚至帶有喜感的主題，都非常歡迎！</p>
				<ul>
					<li>BoF 活動時間為 18:35 ~ 20:40</li>
				</ul>
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
				<section onClick={() => { fancybox(MovieTheater) }}>SITCON 電影院</section>
				<section onClick={() => { fancybox(Communicate) }}>晚間講者交流</section>
				<section onClick={() => { fancybox(BoF) }}>BoF</section>
			</div>
		)
	}
}
