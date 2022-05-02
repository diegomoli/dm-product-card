# DM-PRODUCT-CARD

Paquete de prueba de despliegue en NPM

### Diego Molinelli

## Ejemplo

```
import {ProductCard,
ProductImage,
ProductTitle,
ProductButtons} from dm-product-card
```

```
 <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
