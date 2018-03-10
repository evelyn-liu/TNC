class setPopBlock {
	constructor() {
		this.setBlock();
	}

	setBlock() {
		let that = this;
		let returnBtn = document.getElementById('return-img');
		let popBlock = document.getElementsByClassName('popBlock')[0];

		returnBtn.addEventListener('click',function(e){
			returnBtn.style += ';left:100%;';
			popBlock.style += ';left:115%;';

			document.getElementsByClassName('pop-body')[0].innerHTML='';
		})

		let home_btn = document.getElementsByClassName('home_more')[0];
		let china_btn = document.getElementsByClassName('china_btn');
		let wd_btn = document.getElementsByClassName('wd_text');

		home_btn.addEventListener('click', function (e) {
			let pid = 1;
			that.getContent(pid);
			that.setDP(returnBtn, popBlock);
		})

		let cl = china_btn.length-1;
		for (let i = 0; i < cl; i++) {
			let pid = i + 2;
			china_btn[i].addEventListener('click', function (e) {
				that.getContent(pid);
				that.setDP(returnBtn, popBlock);
			})
		}

		let wl = wd_btn.length;
		for (let i = 0; i < wl; i++) {
			let pid = i + 4;
			wd_btn[i].addEventListener('click', function (e) {
				that.getContent(pid);
				that.setDP(returnBtn, popBlock);
			})
		}

		let bmore = document.getElementsByClassName('B_more');
		let bm =bmore.length;
		console.log(bmore)
		for (let i =0;i<bm;i++){
			let pid = i + 9;
			console.log()
			bmore[i].addEventListener('click', function (e) {
				console.log(pid)
				that.getContent(pid);
				that.setDP(returnBtn, popBlock);
			})
		}
	}


	setDP(returnBtn, popBlock) {
		// returnBtn.style += ';display:block;';
		// popBlock.style += ';display:block;';
		returnBtn.style += ';left:15%;';
			popBlock.style += ';left:35%;';
	}

	getContent(pid) {
		let that = this;
		fetch(`http://localhost:3002/server/init?pid=${pid}`, {
				method: 'get',
			})
			.then(response => response.json())
			.then(data => {
				that.setContent(data);
			})
			.catch(error => console.log('error is', error));

	}

	setContent(data) {
		let ph_span = document.getElementsByClassName('pop-hs')[0];
		let p_b = document.getElementsByClassName('pop-body')[0];
		let treeData = data.treeData;
		// console.log(p_b);
		let pb_h = document.createElement('h1');
		pb_h.className = 'pb_h';
		let pb_img = document.createElement('img');
		pb_img.className = 'pb_img';
		let pb_text, pb_p, pb_span, pb_sh;
		pb_text = document.createElement('div');
		pb_text.className = 'pb_text';



		let title = treeData.title;
		let img = treeData.img;
		let text = treeData.text;
		// console.log(text);

		ph_span.innerText = title;
		pb_h.innerText = treeData.bodytitle;
		pb_img.src = img;
		let tl = text.length;
		for (let i = 0; i < tl; i++) {
			pb_p = document.createElement('p');
			pb_p.className = 'pb_p';
			pb_span = document.createElement('span');
			pb_span.innerText = text[i].t;
			pb_sh = document.createElement('span');
			pb_sh.className = 'pb_sh';
			pb_sh.innerText = text[i].h;

			pb_p.appendChild(pb_sh);
			pb_p.appendChild(pb_span);
			pb_text.appendChild(pb_p);
		}

		p_b.appendChild(pb_h);
		p_b.appendChild(pb_img);
		p_b.appendChild(pb_text);

		pb_h = null;

	}

}


new setPopBlock();