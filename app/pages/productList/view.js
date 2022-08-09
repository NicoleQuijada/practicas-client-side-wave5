const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { useEffect, useState } = React;
const Image = require('nordic/image');

const restclient = require('nordic/restclient')(
    {
        timeout: 5000,
        baseURL: '/api'
    }
);

function View(props) {
    const { products } = props;
    const [productsList, setProductsList] = useState([]);
    const preloadedState = { products };
    console.log(products);
    const [current, setCurrent] = useState(10);
    
    function nextPage(){
        setCurrent((current)=> current + 10)
        restclient.get(`/get-products?offset=${current}`)
        .then(response =>{
            console.log(response)
           return setProductsList(response.data)  
        } )
        .catch(error => console.log(error))
      
    }
    useEffect(()=>{
        setProductsList(products)
    },[products])
    
    return (
        <>
            <Script>
                {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Product List page is loaded!');
         `}
            </Script>
            <Script src="vendor.js" />
            <Script src="productsList.js" />


        <button onClick={nextPage}>
            proxima pagina
        </button>
        <h1>página {current/10}</h1>

            {
                
                productsList.length > 0 ?
                    productsList.map(p => {
                        return (
                            <div key={p.id}>
                                <p>{p.title}</p>
                                <p>{p.price}</p>
                                < Image src={p.thumbnail} lazyload = 'off' /> 
                            </div>
                           
                        )
                    }) : null
            }
        </>
    )
}



module.exports = View;
