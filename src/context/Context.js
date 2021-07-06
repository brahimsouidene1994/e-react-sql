import React, {useState,useEffect } from 'react';
import { detailProduct } from './../data';
import axios from 'axios';

//1-create context
export const ProductContext = React.createContext();

//2-Provider
const ProductProvider =(props)=>{
    const [products, setProducts]=useState([]);
    const [productDetail, setProductDetail]= useState(detailProduct);
    const [cart, setCart]= useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);

    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    //const [newPhone, setNewPhone]=useState({});
    useEffect(()=>{        
        fillProducts();
    },[]);

   

    const  fillProducts = () => {
        let tempProducts = [];
        axios.get(`http://localhost:3010/phone-list`)
        .then(res => {
           // console.log(res);
            const { err, rows } = res.data;
                if (!err) {
                    //console.log(rows);
                    rows.forEach(element =>{
                        tempProducts = [...tempProducts,{...element}];
                    });
                    setProducts(tempProducts);              
                }else
                {
                    console.log(err, 'failed to load data')
                }
          });
    }

    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product;
    }

    const handleProduct = (id) => {
        const product = getItem(id);
        setProductDetail(product);
    }

     const  addToCart = id => {
        let tempProducts = products;
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price * product.count;
        //console.log('product selected', product);
        setProducts(tempProducts);
        setCart([...cart,product]);
        if(cart.length > 0)
        addTotals();
    }

    const openModal = id =>{
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    }

    const closeModal=()=>{
        setModalOpen(false);
    }

    const increment=(id)=>{
        let tempCart = [...cart];
        let selectedProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count++;
        product.total = product.count * product.price;
        tempCart[index]=product;

        setCart(tempCart);
        addTotals();
    }
    const decrement=(id)=>{
        
        let tempCart = [...cart];
        let selectedProduct = tempCart.find((item)=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count--;
        if(product.count <= 0){

            removeItem(id);
        }else{
            product.total = product.count * product.price;
            tempCart[index]=product;
    
            setCart(tempCart);
            addTotals();
        }
    }
    const removeItem=(id)=>{
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter((item)=> item.id !== id)
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        setProducts(tempProducts);
        setCart(tempCart);
        addTotals()
    }
    const clearCart = () =>{
        setCart([]);
        //console.log('hi ')
        fillProducts();
        addTotals();
        
    }
    

    const addTotals=()=>{
        let subtotals=0;
            cart.map(item=>{
                return subtotals += item.total
            });
            //console.log('subtotl',subtotals)
            const tempTax = subtotals * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total= subtotals + tax;
            setCartSubTotal(subtotals);
            setCartTax(tax);
            setCartTotal(total);       
    }
    const addNewPhone =(phone)=>{
        //setNewPhone(phone);
        axios.post(`http://localhost:3010/phone/add`,phone)
            .then((err)=>{
                if(!err)
                console.log("ok");
                else
                console.log(err)
            });
    }
    return (
        <ProductContext.Provider value={{
            products:products,
            productDetail:productDetail, 
            cart:cart,
            modalOpen:modalOpen,
            modalProduct:modalProduct,
            cartSubTotal:cartSubTotal,
            cartTax:cartTax, 
            cartTotal:cartTotal,
            //newPhone:newPhone,
            handleProduct: handleProduct,
            addToCart: addToCart,
            openModal : openModal,
            closeModal : closeModal,
            increment : increment,
            decrement : decrement,
            removeItem :removeItem,
            clearCart : clearCart,
            addPhone : addNewPhone
        }}>
            {props.children}
        </ProductContext.Provider>
    );
}


//3-Consumer
export const ProductConsumer = ProductContext.Consumer;

export { ProductProvider};


//4- import the ProviderContext in this case we have ProductProvider, in index.js and wrapp everything under it like :
//<ProviderContext>
//<Router>
//<App />
//</Router>
// </ProviderContext>

//5-import the ConsumerContext (ProductConsumer) in any component u want 