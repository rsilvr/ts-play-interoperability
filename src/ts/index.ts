import Order from './Order'

const myOrder = new Order('Denis', new Date(), 9.111)
console.log(`${myOrder.customer} bought something for ${myOrder.total} at ${myOrder.date}`)