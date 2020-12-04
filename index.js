var date = new Date("Dec 4, 2020 16:00:00").getTime();
    var countdownfunction = setInterval(function() {
      var today = new Date().getTime();
      var distance = date - today ;  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("count").innerHTML = days + "d " +":"+ hours + "h "
      +":"+ minutes + "m " +":"+ seconds +"s ";

    }, 1000);