import React, { Component } from "react";
/*
    rubric80
    Used jQuery or Angular for data binding
*/
import $ from "jquery";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    optionsSort: "all",
    inStock: false,
    categoryNames: [],
    subcategoriesArray: [],
    selectCategory: "Baby care",
    itemsCount: 9,
    filteredCount: 9,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartShipping: 10,
    cartTotal: 0
  };

  componentDidMount() {
    /*
            rubric81 
            Data was accessed using the Azure Web API and not a local file
        */
    fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json")
      .then(res => res.json())
      .then(json => {
        let products = this.formatData(json);
        console.log(products);
        let categoryNames = json.map(item => item.category);
        let featuredProducts = [
          products[70],
          products[24],
          products[72],
          products[10],
          products[85],
          products[48],
          products[2],
          products[25],
          products[69],
          products[24],
          products[26],
          products[68],
          products[77],
          products[79],
          products[83],
          products[3],
          products[5]  
        ];
        this.setState({
          products,
          featuredProducts,
          categoryNames: categoryNames,
          sortedProducts: products,
          loading: false
        });
      });
  }
  /*
        rubric60
        The send button should create an alert based on the message
        sent 
    */
  onSubmitContact = () => {
    let areaMsg = $("#msgArea").val();
    alert("Message: \n" + areaMsg);
  };

  /*
        rubric51
        The checkout button should create an alert based on the users
        shipping details and total cost. 
    */
  onSubmitCheckout = () => {
    let name = $("#name").val();
    let address = $("#address").val();
    let city = $("#city").val();
    let phone = $("#phone").val();
    let totalCost = $("#totalCost").val();
    alert(
      `-- Shipping Details --\n` +
        `Name: ${name}\n` +
        `Address: ${address}\n` +
        `City: ${city}\n` +
        `Phone: ${phone}\n` +
        `Total cost: $ ${this.state.cartTotal}`
    );
  };

  formatData(items) {
    $(".carousel").carousel({
        interval: 2000
      });
    let productsArray = [];
    let subcategoriesArray = [];
    items.map(item => {
      return item.subcategories.map(item => {
        return item.items.map(item => {
          let name = item.name;
          let description = item.description;
          let price = item.price;
          let imagelink = item.imagelink;
          let rating = item.rating;
          let stock = item.stock;
          let category = item.category;
          let subcategory = item.subcategory;

          let product = {
            name,
            description,
            price,
            imagelink,
            rating,
            stock,
            category,
            subcategory
          };
          let subcategories = subcategory;
          subcategoriesArray.push(subcategories);
          productsArray.push(product);
        });
      });
    });
    let uniq = [...new Set(subcategoriesArray)];
    this.setState({
      subcategoriesArray: uniq
    });
    productsArray.forEach((product, i) => {
      product.id = i + 1;
      product.total = 0;
      product.inCart = false;
      product.count = 0;
    });
    return productsArray;
  }

  getProduct = name => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.name === name);
    return product;
  };

  handleChange = event => {
    const target = event.target;
    const type = event.target.type;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterProducts
    );
  };
  /*
        rubric26
        Clicking on a subcategory should repopulate the grid of products
        with items from the subcategory that was just clicked. 
    */
  testChange = event => {
    const target = event.target;
    /* 
            rubric27
            Clicking on a subcategory should change the name of the selected
            category in the controls bar
        */
    const value = target.innerText;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterProducts
    );
  };

  filterProducts = () => {
    let { products, optionsSort, inStock, selectCategory } = this.state;

    let tempProducts = [...products];
    /* 
            rubric28 
            The section of the controls bar that displays the number of items
            shown out of the total number of items in the selected category
            should update whenever a new subcategory is selected or
            whenever the “In Stock Only” switch is toggled. 
        */
    let itemsCount;
    switch (selectCategory) {
      case this.state.subcategoriesArray[0]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[0]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[1]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[1]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[2]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[2]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[3]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[3]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[4]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[4]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[5]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[5]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[6]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[6]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[7]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[7]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[8]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[8]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[9]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[9]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[10]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[10]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[11]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[11]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[12]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[12]
        );
        itemsCount = tempProducts.length;
        break;
      case this.state.subcategoriesArray[13]:
        tempProducts = tempProducts.filter(
          product => product.subcategory === this.state.subcategoriesArray[13]
        );
        itemsCount = tempProducts.length;
        break;
    }
    /*
            rubric33
            Changing the selected sorting method should reorder the
            products in the grid  
        */
    if (optionsSort !== "all") {
      if (optionsSort === "alphabetical") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (optionsSort === "price") {
        tempProducts = tempProducts.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
      } else if (optionsSort === "rating") {
        tempProducts = tempProducts.sort((a, b) =>
          a.rating > b.rating ? 1 : -1
        );
      }
    }
    /* 
            rubric29
            If the “In Stock Only” toggle is checked, only items that are in
            stock should be shown in the products grid. 
        */
    if (inStock) {
      tempProducts = tempProducts.filter(product => product.stock > 0);
    }
    let filteredItemsNumber = tempProducts.length;

    this.setState({
      sortedProducts: tempProducts,
      filteredCount: filteredItemsNumber,
      itemsCount: itemsCount
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  /*
        rubric30
        Clicking on the “Add” button inside a grid cell should add 1 unit of
        the associated product to the shopping cart 
    */
  /* 
        rubric44
        Clicking the “Add” button should add the number of units
        specified in the “Qty” input field of the selected product to the
        shopping cart
   */
  addToCart = id => {
    // let productQty = parseInt($('#productQty').val());
    let productQty = $("#productQty").val();

    let tempProducts = [...this.state.products];
    const testItem = this.getItem(id);
    if (testItem.inCart === false) {
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.inCart = true;
      if (productQty !== undefined) {
        product.count = parseInt(productQty);
      } else {
        product.count += 1;
      }
      const price = product.price;
      product.total = price;
      let productPrice = parseFloat((product.count * product.price).toFixed(2));
      product.total = productPrice;

      this.setState(
        () => {
          return {
            products: tempProducts,
            cart: [...this.state.cart, product]
          };
        },
        () => {
          this.addTotals();
        }
      );
    } else if (testItem.inCart === true) {
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      if (productQty !== undefined) {
        product.count = parseInt(productQty);
      } else {
        product.count += 1;
      }
      const price = product.price;
      product.total = price;
      let productPrice = parseFloat((product.count * product.price).toFixed(2));
      product.total = productPrice;

      this.setState(
        () => {
          return { products: tempProducts, cart: [...this.state.cart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
    // const index = tempProducts.indexOf(this.getItem(id));
    // const product = tempProducts[index];
    // product.inCart = true;
    // product.count = 1;
    // const price = product.price;
    // product.total = price;
  };
  /*
        rubric55
        The cost column in the table should update if the quantity input
        field is changed 
    */
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;

    let productPrice = parseFloat((product.count * product.price).toFixed(2));
    product.total = productPrice;

    this.setState(
      () => {
        return {
          cart: tempCart
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: tempCart
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  /*
        rubric54
        The remove button should remove an item from the shopping
        cart 
    */
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  /*
        rubric53
        The cost details section should update if any items are removed
        from the shopping cart of if any of the item quantities are
        updated
    */
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    subTotal = parseFloat(subTotal.toFixed(2));
    const tempTaxt = parseFloat(subTotal.toFixed(2)) * 0.1;
    const tax = parseFloat(tempTaxt.toFixed(2));
    const total =
      parseFloat((subTotal + tax).toFixed(2)) + this.state.cartShipping;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
          testChange: this.testChange,
          filterProducts: this.filterProducts,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          onSubmitCheckout: this.onSubmitCheckout,
          onSubmitContact: this.onSubmitContact
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer, ProductContext };
