function deliveryCheck() {
    const rbs = document.querySelectorAll('input[name="bring"]');
    const address = document.querySelector(".shops-address");
    
    function prevAll(element) {
      let result = [];
  
      while (element = element.previousElementSibling)
          result.push(element);
      return result;
    }

    let inputs = prevAll(address);
    console.log(inputs)

    rbs[0].addEventListener("click", () => {
      rbs[0].checked = true;
      address.classList.add("active");
      console.log(rbs[0].checked)
      inputs.forEach(item => {
        item.classList.add("hide");
      })
    })
    rbs[1].addEventListener("click", () => {
      rbs[1].checked = true;
      address.classList.remove("active");
      console.log(rbs[1].checked)
      inputs.forEach(item => {
        item.classList.remove("hide");
      })
    })

}

  deliveryCheck();

  function basketModal() {
    const modal = document.querySelector(".basket-modal");
    const button = document.querySelector(".basket-page__prices button");
    const close = document.querySelector(".basket-modal__close")


    button.addEventListener("click", () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  }

  basketModal();

  function checkBoxModal() {
    const input = document.getElementById("myCheck").parentNode;
    const modal = document.querySelector(".checkbox-modal");
    const close = document.querySelector(".checkbox-modal__close");
    console.log(input)

    input.addEventListener("click", () => {
      console.log(input);
      modal.classList.add("active");
    }, {once : true});

    close.addEventListener("click", () => {
      modal.classList.remove("active");
    })

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }



  }

  checkBoxModal();

