function updateTable() {
    ordersTableBody.innerHTML = '';
    let totalWithoutDelivery = 0;
    let totalWithDelivery = 0;

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.number}</td>
            <td>${order.totalPrice}</td>
            <td>${order.deliveryPrice}</td>
            <td>${order.priceWithoutDelivery}</td>
            <td><button onclick="removeOrder(${index})">مسح</button></td> <!-- زر المسح -->
        `;
        ordersTableBody.appendChild(row);
        totalWithoutDelivery += order.priceWithoutDelivery;
        totalWithDelivery += order.totalPrice;
    });

    totalPriceWithoutDeliveryElement.textContent = totalWithoutDelivery;
    totalPriceWithDeliveryElement.textContent = totalWithDelivery;
}

function removeOrder(index) {
    const confirmRemove = confirm('هل أنت متأكد أنك تريد مسح هذا الطلب؟');
    if (confirmRemove) {
        orders.splice(index, 1); // إزالة الطلب من المصفوفة
        localStorage.setItem('orders', JSON.stringify(orders));
        updateTable(); // تحديث الجدول
    }
}
