##### Besides providing exceptional transportation services, Cabify also runs a physical store which sells (only) 3 products:

``` 
Code         | Name                |  Price
-------------------------------------------------
VOUCHER      | Cabify Voucher      |   5.00€
TSHIRT       | Cabify T-Shirt      |  20.00€
MUG          | Cafify Coffee Mug   |   7.50€
```

Various departments have insisted on the following discounts:

 * The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on `VOUCHER` items.

 * The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€.

Cabify's checkout process allows for items to be scanned in any order, and should return the total amount to be paid. The interface for the checkout process looks like this:

```javascript
const co = new Checkout(pricingRules);
co.scan("VOUCHER").scan("VOUCHER").scan("TSHIRT");
const price = co.total();
```

Examples:

    Items: VOUCHER, TSHIRT, MUG
    Total: 32.50€

    Items: VOUCHER, TSHIRT, VOUCHER
    Total: 25.00€

    Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
    Total: 81.00€

    Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
    Total: 74.50€
    

Using modern JavaScrpt (ES6 or if you prefer, Typescript), you should implement a checkout process that fulfills the requirements. In order to provide a solution, you should take into acocunt the following aspects:

- Deliver production-ready code
- Provide a solution that could be easy to grow and easy to add new functionality.
- Have notes attached, explaining the solution and why certain things are included and others are left out.

