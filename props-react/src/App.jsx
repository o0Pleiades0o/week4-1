import './App.css';
import Header from './components/Header.jsx';
import Carousel from './components/Carousel.jsx';
import CardProducts from './components/CardProduct.jsx';
import Footer from './components/Footer.jsx';
import Products from './data.jsx';
function App() {
  const womanProducts = Products.filter(product => product.tag === 'women').slice(0, 4);
  const manProducts = Products.filter(product => product.tag === 'men').slice(0, 4);
  const kidsProducts = Products.filter(product => product.tag === 'kids').slice(0, 4);

  return (
    <>
      <Header />
      <Carousel />
      <div className='bg-light container-fluid py-5'>
        <div className='container'>

          {/* womanProduct */}
          <h1 className='fw-bold text-center'>Woman</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {womanProducts.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>

          {/* manProduct */}
          <h1 className='fw-bold text-center'>Man</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {manProducts.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>

          {/* kidsProduct */}
          <h1 className='fw-bold text-center'>Kids</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {kidsProducts.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>

          {/* allProduct */}
          <h1 className='fw-bold text-center'>All Products</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {Products.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;