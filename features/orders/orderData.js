const orderData = [
    {
        order_id: 1,
        orderNumber: 'A001',
        orderDate: '2018-01-01:20:30:00',
        orderStatus: 'Pending',
        customerId: 1,
        customerName: 'John Doe',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                productId: 1,
                productName: 'Product 1',
                productSKU: 'SKU-001',
                productPrice: '$5.00',
                productQuantity: 1,
                productTotal: '$5.00',
            },
            {
                productId: 2,
                productName: 'Product 2',
                productSKU: 'SKU-002',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
            },
        ],
    },

    {
        order_id: 2,
        orderNumber: 'A002',
        orderDate: '2018-01-01',
        orderStatus: 'Pending',
        customerId: 2,
        customerName: 'Jane Doe',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                id: 3,
                productId: 3,
                productName: 'Pizza',
                productSKU: 'SKU-003',
                productPrice: '$15.00',
                productQuantity: 1,
                productTotal: '$5.00',
                prodictImage: 'https://www.pexels.com/photo/pizza-with-red-pepper-and-cheese-1049620/',
            },
            {
                id: 4,
                productId: 4,
                productName: 'Apple pie',
                productSKU: 'SKU-004',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
            },
        ],
    },
];

for (let i = 0; i < orderData.length; i++) {
    console.log(orderData[i]);
}

//export default orderData;