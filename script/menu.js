
		function myFunction(){
			document.getElementById("oculto").classList.toggle("show");
			var perica = document.getElementById('imagen').src;
			if (perica.indexOf('menu.png')!=-1){
				document.getElementById('imagen').src='./media/picture/menuop.png';
			}
			else{
				document.getElementById('imagen').src='./media/picture/menu.png';
			}
		}
	//	
		window.onclick=function(event){
			if (!event.target.matches('.fixio')&&!event.target.matches('.accordion')){
				var dropdowns = document.getElementsByClassName("desp-oculto");
				var i;
				for(i = 0; i < dropdowns.length; i++){
				var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')){
					document.getElementById('imagen').src='./media/picture/menu.png'
					openDropdown.classList.remove('show');
					}
				}
			}
			var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].onclick = function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		  }
		}
		}