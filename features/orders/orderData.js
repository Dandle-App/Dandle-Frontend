import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const orderData = [
    {
        order_id: '20180101203000',
        orderDate: '2018-01-01:20:30:00',
        orderStatus: 'Pending',
        customerId: 1,
        customerName: 'Mbami Luka',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        customerPhone: '+1-212-555-1212',
        org_id: 'DANDL3ION',
        org_name: 'Dandelion',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                productId: 1,
                productName: 'Pasta',
                productSKU: 'SKU-001',
                productPrice: '$5.00',
                productQuantity: 1,
                productTotal: '$5.00',
                prodictImage: 'https://www.pexels.com/photo/food-plate-dinner-lunch-5807019/'
            },
            {
                productId: 2,
                productName: 'Kebab',
                productSKU: 'SKU-002',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
                prodictImage: 'https://www.pexels.com/photo/food-dinner-lunch-meal-5191852/'
            },
        ],
    },

    {
        order_id: '20180101203003',
        orderDate: '2018-01-01:20:30:03',
        orderStatus: 'Pending',
        customerId: 1,
        customerName: 'Bradley Isaacs',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        customerPhone: '+1-212-555-1212',
        org_id: 'MSUDENVER',
        org_name: 'Dandelion',
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
                prodictImage: 'https://www.pexels.com/photo/deliciously-baked-apple-pie-7790871/',
            },
        ],
    },

    {
        order_id: '20180101203005',
        orderDate: '2018-01-01:20:30:05',
        orderStatus: 'Pending',
        customerId: 1,
        customerName: 'Greg Dews',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        customerPhone: '+1-200-550-1210',
        org_id: 'DANDL3ION',
        org_name: 'Dandelion',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                id: 5,
                productId: 5,
                productName: 'Pasta',
                productSKU: 'SKU-005',
                productPrice: '$5.00',
                productQuantity: 1,
                productTotal: '$5.00',
                prodictImage: 'https://www.pexels.com/photo/food-plate-dinner-lunch-5807019/',
            },
            {
                id: 6,
                productId: 6,
                productName: 'Kebab',
                productSKU: 'SKU-006',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
                prodictImage: 'https://www.pexels.com/photo/food-dinner-lunch-meal-5191852/',
            },
        ],
    },
    {
        order_id: '20180101203007',
        orderDate: '2018-01-01',
        orderStatus: 'Pending',
        customerId: 4,
        customerName: 'Dustin Crain',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                id: 7,
                productId: 7,
                productName: 'Pizza',
                productSKU: 'SKU-007',
                productPrice: '$15.00',
                productQuantity: 1,
                productTotal: '$5.00',
                prodictImage: 'https://www.pexels.com/photo/pizza-with-red-pepper-and-cheese-1049620/',
            },
            {
                id: 8,
                productId: 8,
                productName: 'Apple pie',
                productSKU: 'SKU-008',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
                prodictImage: 'https://www.pexels.com/photo/deliciously-baked-apple-pie-7790871/',
            },
        ],
    },

    {
        order_id: '20190101203008',
        orderDate: '2018-01-01',
        orderStatus: 'Pending',
        customerId: 5,
        customerName: 'Naji Shamas',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                id: 9,
                productId: 9,
                productName: 'Pasta',
                productSKU: 'SKU-009',
                productPrice: '$5.00',
                productQuantity: 1,
                productTotal: '$5.00',
                prodictImage: 'https://www.pexels.com/photo/food-plate-dinner-lunch-5807019/',
            },
            {
                id: 10,
                productId: 10,
                productName: 'Kebab',
                productSKU: 'SKU-010',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
                prodictImage: 'https://www.pexels.com/photo/food-dinner-lunch-meal-5191852/',
            },
        ],
    },
    {
        order_id: '20190101203009',
        orderDate: '2018-01-01',
        orderStatus: 'Pending',
        customerId: 6,
        customerName: 'Willem Duvenham',
        customerCity: 'New York',
        customerState: 'New York',
        customerCountry: 'USA',
        orderTotal: '$1,000.00',
        orderItems: [
            {
                id: 11,
                productId: 11,
                productName: 'Pizza',
                productSKU: 'SKU-011',
                productPrice: '$15.00',
                productQuantity: 1,
                productTotal: '$5.00',
                prodictImage: 'https://www.pexels.com/photo/pizza-with-red-pepper-and-cheese-1049620/',
            },
            {
                id: 12,
                productId: 12,
                productName: 'Apple pie',
                productSKU: 'SKU-012',
                productPrice: '$10.00',
                productQuantity: 1,
                productTotal: '$10.00',
                prodictImage: 'https://www.pexels.com/photo/deliciously-baked-apple-pie-7790871/',
            },
        ],
    }

];

export function generateOrder(arr,n){
    // generate 1000 orders
    const start = new Date().getTime();

    for (let i = 0; i < n; i++) {
        const order = {
            order_id: `0000000${i}`,
            orderDate: `2018-01-01:20:30:${i}`,
            orderStatus: 'Pending',
            customerId: i,
            customerName: 'John Doe',
            customerCity: 'New York',
            customerState: 'New York',
            customerCountry: 'USA',
            customerPhone: '+1-200-550-1210',
            org_id: 'DANDL3ION',
            org_name: 'Dandelion',
            orderTotal: '$1,000.00',
            orderItems: [
                {
                    id: i,
                    productId: i,
                    productName: 'Pasta',
                    productSKU: 'SKU-005',
                    productPrice: '$5.00',
                    productQuantity: 1,
                    productTotal: '$5.00',
                    prodictImage: 'https://www.pexels.com/photo/food-plate-dinner-lunch-5807019/',
                },
                {
                    id: i,
                    productId: i,
                    productName: 'Kebab',
                    productSKU: 'SKU-006',
                    productPrice: '$10.00',
                    productQuantity: 1,
                    productTotal: '$10.00',
                    prodictImage: 'https://www.pexels.com/photo/food-dinner-lunch-meal-5191852/',
                },
            ],
        };
        arr.push(order);
    }
    // time taken to generate 1000 orders
    const end = new Date().getTime();
    console.log(`Time to load orders: ${end - start}ms`);
}

