const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })
}

navSlide();

axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => {
var data = response.data.categories;
console.log(data);
for (var i = 0; i < data.length; i++) {
  var foodType = data[i].strCategory;
  var thumbnail = data[i].strCategoryThumb;
  var description = data[i].strCategoryDescription;
  }
  console.log(foodType, thumbnail, description);
  var cardImage = document.getElementById("#card-image");
  cardImage.onload(function() {
    
  })
}
)
.catch(error => console.log(error));