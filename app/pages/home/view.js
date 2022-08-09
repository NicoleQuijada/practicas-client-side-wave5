const React = require('react');
const Form = require('../../components/form');


function View(props) {
    const { products } = props;
    return (
        <>
            <header>
            <p>Hola soy el header</p>
            </header>
            <main>
                {
                    products.map(el => (
                        <div key={el.id}>
                            <li>{el.title}</li>
                            <span>${el.price}</span>
                            <a href={el.permalink}>
                                <img src={el.thumbnail} alt={el.name} lazyload="off" />
                            </a>
                        </div>
                    ))
                }
                < Form />
            </main>
            <footer>
                <p>Holi soy un pie de página</p>
            </footer>
        </>
    )
}

module.exports = View;