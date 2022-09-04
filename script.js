window.addEventListener('DOMContentLoaded', () => {
  const tabsParent = document.querySelector('.tabheader__items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    loader = document.querySelector('.loader')

  // Loader
  setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
    }, 500)
  }, 2000)

  // Tabs
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
  }

  hideTabContent()
  showTabContent()

  tabsParent.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent()
          showTabContent(idx)
        }
      })
    }
  })

  // Timer


  // function showTime() {
  //   var date = new Date();
  //   var h = date.getHours();
  //   var m = date.getMinutes();
  //   var s = date.getSeconds();
  //   var session = "AM";

  //   if(h == 0) {
  //     h = 24;
  //   } 
  //   h = (h < 24) ? "1" + h : h;
  //   m = (m < 10) ? "0" + m : m;
  //   s = (s < 10) ? "0" + s : s;

  //   var time = h + ":" + m + ":" + s + "" + session;
  //   document.getElementById("MyClockDisplay").innerText = time;
  //   document.getElementById("MyClockDisplay").textContent = time;

  //   setTimeout(showTime, 1000);
  // }

  // showTime();

})
