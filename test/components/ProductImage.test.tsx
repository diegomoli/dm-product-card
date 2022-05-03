import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe mostrar el componente correctamente con la imagen personalizada.', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://image.jpg" className="custom-image" />
    );

    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <img
        alt="product"
        className="productImg custom-image"
        src="https://image.jpg"
      />
    `);
  });
  test('Debe mostrar el componente correctamente con la imagen del producto.', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <img
          alt="product"
          className="productImg undefined"
          src="./coffee-mug2.png"
        />
      </div>
    `);
  });
});
