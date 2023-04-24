let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}




// const searchBtn = () => { 

//     const searchbox = document.getElementById('search-box').value.toUpperCase();
//     const storeitem = document.getElementById('procof');
//     const product = document.querySelectorAll('.content');
//     const pname = storeitem.document.getElementsByTagName("h3");

//     for (var i = 0; i < pname.length; i++) { 
//         let match = product[i].getElementsByTagName('h3')[0];

//         if (match) { 
//             let textvalue = match.textContent || match.innerHTML

//             if (textvalue.toUpperCase().indexOf(searchbox) > -1){ 
//                 product[i].style.display = "";
//             }else { 
//                 product[i].style.display = "none";
//             }
//         }
//     }

// }


function searchBtn() {
    var searchInput = document.getElementById("search-box").value;
    if (searchInput == "") {
      alert("Search field is required");
      return false;
    }
    return true;
  }
  