import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';
const { act } = renderer;
describe('ProductCard', () => {
  test('Debe mostrar el componente correctamente con la imagen personalizada.', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <h1>
          Product Card
        </h1>
      </div>
    `);
  });
  test('Debe incrementar el contador.', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="productCard undefined"
      >
        <h1>
          Product Card
        </h1>
        <span>
          0
        </span>
        <button
          onClick={[Function]}
        />
      </div>
    `);
    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
