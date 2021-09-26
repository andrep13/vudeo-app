$(document).on('click','.login-btn,.sign-up-btn',function(){
        $('.main').addClass('main-active')
    });
 
    $(document).on('click','.login-btn',function(){
        $('.side-login').addClass('side-login-active')
    });
 
    $(document).on('click','.sign-up-btn',function(){
        $('.side-sign-up').addClass('side-sign-up-active')
    });
 
    $(document).on('click','.sign-up-cancel-btn,.login-cancel-btn',function(){
        $('.main').removeClass('main-active')
    });
    $(document).on('click','.login-cancel-btn',function(){
        $('.side-login').removeClass('side-login-active')
    });
    $(document).on('click','.sign-up-cancel-btn',function(){
        $('.side-sign-up').removeClass('side-sign-up-active')
    });









    const viewBtn = document.querySelector(".view-modal"),
    popup = document.querySelector(".popup"),
    close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");
    viewBtn.onclick = ()=>{
      popup.classList.toggle("show");
    }
    close.onclick = ()=>{
      viewBtn.click();
    }
    copy.onclick = ()=>{
      input.select(); //select input value
      if(document.execCommand("copy")){ //if the selected text copy
        field.classList.add("active");
        copy.innerText = "Copied";
        setTimeout(()=>{
          window.getSelection().removeAllRanges(); //remove selection from document
          field.classList.remove("active");
          copy.innerText = "Copy";
        }, 3000);
      }
    }