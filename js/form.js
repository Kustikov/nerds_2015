
		var link = document.querySelector('.contact-us');
		var popup = document.querySelector('.write-us');
		var close = popup.querySelector('.close');
		var form = popup.querySelector('form');
		var login = form.querySelector('.input-name');
		var password = form.querySelector('.input-email');
		var storage = localStorage.getItem('login');

		link.addEventListener('click', function(event) {
    	event.preventDefault();
    	popup.classList.add('show');
    	    if (storage) {
    	    login.value = storage;
    	    email.focus();
    	    } else {
    	    login.focus();
    	    }
    	    }, false);

		close.addEventListener('click', function(event) {
    		event.preventDefault();
    		popup.classList.remove('show');
  			}, false);
    
		 form.addEventListener('submit', function(event) {
    		if (!login.value || !password.value) {
      		event.preventDefault();
      		popup.classList.add('login-popup-error');
    		} else {
      		localStorage.setItem('login', login.value);
   		 	}
  				}, false);

		 window.addEventListener('keydown', function(event) {
    	   if (event.keyCode == 27 && popup.classList.contains('show')) {
      	         popup.classList.remove('show');
    	           }
  		            }, false);
