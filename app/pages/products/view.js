const React = require('react');
const Script = require("nordic/script");
const serialize = require("serialize-javascript"); //parsea la información que recibe de un json

function View (props){
    const {message, products } = props;
    return(
        <>
       
        {/* Carga Carga las props en el objeto window parseadas por serialize*/}
        <Script>
                {/* conecta los provedores con el client pasado atraves de las props*/}
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
                    isJSON: true,
                })}
                    console.log('%cPRoductspage is loaded!', 'color: blue')
                `}
            </Script>

          
            {/* Carga las dependencias necesarias*/}
            <Script src="vendor.js" />
            {/* Carga el archivo app/client/products.js en el navegador del usuario (cliente)*/}
            <Script src="products.js" />


            <h2>{message}</h2>

        </>
        

    )
}

module.exports = View;