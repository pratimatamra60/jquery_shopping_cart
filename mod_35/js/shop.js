//its all moved to shoppingManager
/* //https://cmatskas.com/get-url-parameters-using-javascript/
var parseQueryString = function(url) {
    var urlParams = {};// empty obj
    //file:///C:/Users/Pratima/Desktop/mod_35/mod_35/category.html?catID=1
    //'?' above is for concatinate string
    url.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) {
        urlParams[$1] = $3;
      }
    );    
    return urlParams;
  }
   var urlParams = parseQueryString(location.search);
   console.log(urlParams);   */

//Catagories

function CategoryManager(){

 this.categories = []; //empty array to store something
 this.url = "http://api.origin.berlin/category";// to load stuff from api
 this.menu = $("#category-menu");
 this.currentCategory = false;

 this.init = function() {
    this.loadCategories();
  }


 //sending ajax request to the url gets the data back and stores data to catagories
 this.loadCategories  = function(){
     var that = this; //scope
     //$.getJSON(url, callback)
     //console.log("test");

    $.getJSON(this.url, function(data){
         /* console.log(data);
        console.log(this);
        console.log(that);  */
        that.categories = data;
        that.addMenuItems();// call this here to make sure it gets data inorder to add 
        that.setCurrentCategory();
    })
    $(document).trigger("category_load");
 }
//iterating through all catagories and storing the reference and entering it to html
 this.addMenuItems = function(){
     var that = this;
    //1. go through categories // jquery for loop with each
     $.each(this.categories, function(index, category){
    // console.log(category);

    //2. add it(the name as button) to the menu
    // <li class="nav-item">
    //     <a class="nav-link" href="#">Link</a>
    // </li>

    var li = $("<li>").addClass("nav-item");
    // anchor tag appendto li or li append anchor tag both are okay
    var a = $("<a>").addClass("nav-link").attr("href","category.html?catID=" + category.id).text(category.name).appendTo(li);
        that.menu.append(li);
     });
     $(document).trigger("category_menuAdded");
 }

//
 this.setCurrentCategory = function(){
    var that = this;
    if(!shopManager.urlParams.catID) return; // break if there is now param in the URL!
    // OR
    /* if(urlParams.catID){
        console.log("category selected"); 
    } else {
        console.log("category not selected");
    } */
    //console.log("should search for category...");
    $.each(this.categories, function(index, category){
        //console.log(category.id);
        if (category.id == shopManager.urlParams.catID) {
            that.currentCategory = category;
            $(".category-name").text(category.name);
          }
        });
    
        $(document).trigger("category_currentSet");
      }
}



function BookManager(){
    this.url = "http://api.origin.berlin/book";//
    this.books = [];
    this.container = $("#book-container");
    this.currentBook = false; //by default no book is chosen

    this.init = function (){
        var that = this ;
        $(document).on("category_currentSet", function(){
            that.addBooks;
        })
        that.loadBooks();
    }
    
    this.loadBooks = function(){
        var that = this;
        $.getJSON(this.url, function(data){
            that.books = data;
            //console.log(that);
            /* 
            needs to wait until category is ready */ //that.addBooks();
            that.setCurrentBook();
            that.addBooks();
        });
    }
    this.addBooks = function() {
        var that = this;
        //below is the snippet of html how we want to display our data
        /* <div class="col-3">
                <img src="http://placehold.it//100x150" alt="">
                <p><a href="detail.html">book title</a></p>
            </div> */
            $.each(this.books, function(index, book){
               // console.log(book.image);
                
               if (book.category_id == shopManager.categoryManager.currentCategory.id || shopManager.categoryManager.currentCategory == false) {
                var div = $("<div>").addClass("col-3");
                $("<img>").attr("src", book.image).addClass("img-fluid").appendTo(div);
                var p = $("<p>").appendTo(div);
                $("<a>").attr("href", "detail.html?book=" + book.slug).text(book.title).appendTo(p);
                that.container.append(div);
              }
        });
    }

    this.setCurrentBook = function() {
        var that = this;
        if(!shopManager.urlParams.book) return; // break if there is now param in the URL!
         
        $.each(this.books, function(index, book){

			if(book.slug == shopManager.urlParams.book){
				that.currentBook = book;
				$(".book-image").attr("src",that.currentBook.image);
				$(".book-title").text(that.currentBook.title);
				$(".book-author").text(that.currentBook.author);
				$(".book-price").text(that.currentBook.price);
				$(".book-year").text(that.currentBook.date);
				$(".book-reviews").text("("+that.currentBook.reviews+" reviews)");
                $(".book-ratings").text(that.currentBook.rating);
                return; //so once it finds the book, it stop searching anymore.
			}
		});
    }

}


function CartManager() {

    this.cart = [];
    this.checkoutButton = $("#checkoutButton");
    this.container = $("#shoppingCart");
    this.cartButton = $(".cart-amount");
  
    this.init = function() {
      var that = this;
        /*shortcut way below*///that.cart = JSON.parse(localStorage.getItem("cart"));
        that.cart = (localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
    that._updateCartIcon();
    $(".cart-amount").text(this.cart.length);

    $(".cart-add").on("click", function() {
      that.addItem(shopManager.bookManager.currentBook);
    });
    $(".cart-checkout").on("click", function() {
      that.checkout();
    });
    $(".cart-clear").on("click", function() {
      that.clear();
    });
    $(document).on("click", ".cart-delete-item", function() {
      that.deleteItem($(this).data("index"));
    });
    that.display();
  }

  this.display = function() {
    var that = this;
    var total = 0;
    that.container.html("");
    $.each(that.cart, function(index, item) {
            /* <tr>
                  <td>ID</td>
                  <td><img> </td>
                  <td>title</td>
                  <td>author</td>
                  <td>price</td>

                </tr> */
                var row = $("<tr>");
                $("<td>").text(item.id).appendTo(row);
                $("<td>").html($("<img>").attr("src", item.image)).appendTo(row);
                $("<td>").text(item.title).appendTo(row);
                $("<td>").text(item.author).appendTo(row);
                $("<td>").text(item.price).appendTo(row);
                var closeButton = $("<button>").addClass("btn btn-outline-warning cart-delete-item").html("&times;").attr("data-index", index);
                $("<td>").html(closeButton).appendTo(row);
                that.container.append(row);
                total += item.price;
              });
              $(".cart-total").text(total);
            }
          
            this.deleteItem = function(itemIndex) {
              this.cart.splice(itemIndex, 1);
              this._updateStorage();
            }


    this.addItem = function (item){
        /* console.log("addItems");
        console.log(item); */
        this.cart.push(item);//storing items to the cart
        //console.table(item);
       // localStorage.setItem("name", "pratima")//localstorage example
        this._updateStorage(); //localStorage.setItem("cart", JSON.stringify(this.cart));// stringify as localStorage only stores in string version
        window.location.href = "cart.html";
    }

    this.clear = function(){
        this.cart = [];
        this._updateStorage(); //localStorage.setItem("cart", JSON.stringify(this.cart));
        window.location.href = "index.html";
    }

    this.checkout = function (){     
        alert("Thanks");
        this.clear();
    }

    //to avoid repetition of localStorage.setItem("cart", JSON.stringify(this.cart)); line fro addItem() and clear()
    this._updateStorage = function() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this._updateCartIcon();
        this.display();
      }
    
      this._updateCartIcon = function() {
        this.cartButton.text(this.cart.length);
        this.cartButton.parent().toggleClass("text-success", this.cart.length != 0)
      }
    
}
function ShopManager() {

    this.cartManager = new CartManager();
    this.bookManager = new BookManager();
    this.categoryManager = new CategoryManager();
    this.urlParams = {};
  
    this.init = function() {
        console.log("hhh");
      this.parseURL();
      this.cartManager.init();
      this.bookManager.init();
      this.categoryManager.init();
    }
  
    this.parseURL = function() {
      var that = this;
      window.location.search.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) {
          that.urlParams[$1] = $3;
        }
      );
    } 
  }
var shopManager = new ShopManager();
shopManager.init();
  