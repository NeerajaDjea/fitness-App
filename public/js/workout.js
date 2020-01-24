function setupTabs () {
    document.querySelectorAll(".tabs__btn").forEach(button => {
      button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

        // console.log(sideBar);
        // console.log(tabsContainer);
        // console.log(tabNumber);
        // console.log(tabToActivate);

        sideBar.querySelectorAll(".tabs__btn").forEach(button => {
          button.classList.remove("tabs__btn--active");
        });

        tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
          tab.classList.remove("tabs__content--active");
        });

        button.classList.add("tabs__content--active");
        tabToActivate.classList.add("tabs__content--active");


      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {

    setupTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
      tabsContainer.querySelector(".tabs__sidebar .tabs__btn").click();
    });

});





// const workoutBtn = document.querySelector('.btn');

// const url = 'https://wger.de/api/v2/exercise'

// let myHeader = new Headers();
// myHeader.append('Accept', 'application/json');
// myHeader.append ('Authorization', 'Token 4ff9840d0d3f16b16c78421b1ec037bc256a1a6d')

// let req = new Request(url, {
//     method: 'GET',
//     headers: myHeader,
//     mode: 'cors'
// })


// workoutBtn.addEventListener('click', () => {
//     fetch(req)
//     .then( (response) => {
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('BAD HTTP stuff');
//         }
//     })
//     .then( (jsonData) => {
//         console.log(jsonData);
//     })
//     .catch( (err) => {
//         console.log('Error:', err.message);
//     });

// });

