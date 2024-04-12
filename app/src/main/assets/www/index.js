const buy = document.querySelectorAll('.buy')
    for (let i = 0; i < buy.length; i++) {
        buy[i].onclick = function() {
          document.location = 'index.html#footer';
          console.log("Нажали")
        }
    }