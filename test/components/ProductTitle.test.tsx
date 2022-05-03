import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostar el componente correctamente con el título personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <span
        className="productDescription custom-class"
      >
        Custom Product
      </span>
    `);
  });

  test('Debe de mostrar el componente con el nombre del producto.', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <span
          className="productDescription undefined"
        >
          Coffe Mug - Sin imagen
        </span>
      </div>
    `);
  });
});
