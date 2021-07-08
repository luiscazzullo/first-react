import { useState } from 'react';
import { age, test } from '../../config/constants';
import Form from '../Form/Form';
import Button from '../Button/Button';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import Footer from '../Footer/Footer';

const Body = ({ students }) => {
  const defaultProducts = [{ id: 1, name: 'Camisa', price: 50 }, { id: 2, name: 'Remera', price: 75 }];
  const [products, setProducts] = useState(defaultProducts);

  return (
    <main>
      <Button 
        onClick={() => setProducts([...products, { id: 3, name: 'Zapatillas', price: 200 }])}
        text="Añadir producto" 
      />
      <Button
        onClick={() => setProducts(products.filter(p => p.price < 100))}
        text="Filtrar producto"
      />
      <List>
        {products.map((product, index) => <ListItem key={index} student={product.name} />)}
      </List>
      <Footer list={products} setList={setProducts}  />
    </main>
  );
}
 
export default Body;