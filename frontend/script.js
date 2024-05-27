const apiUrl = 'http://127.0.0.1:8000/items/';

async function createItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: itemName, price: parseFloat(itemPrice) })
    });
    
    const result = await response.json();
    showMessage(result.message || 'Item created successfully!');
    fetchItems();
}

async function fetchItems() {
    const response = await fetch(apiUrl);
    const items = await response.json();
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <div class="item-buttons">
                <button onclick="updateItem(${item.id}, '${item.name}', '${item.price}')"><i class="fas fa-edit"></i></button>
                <button class="delete-button" onclick="deleteItem(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        itemsList.appendChild(itemDiv);
    });
}


async function deleteItem(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
        await fetch(`${apiUrl}${itemId}`, {
            method: 'DELETE'
        });
        showMessage('Item deleted successfully!');
        fetchItems();
    }
}

async function updateItem(itemId) {
    const newName = prompt("Enter new name for the item");
    const newPrice = prompt("Enter new price for the item");

    if (newName && newPrice) {
        const response = await fetch(`${apiUrl}${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName, price: parseFloat(newPrice) })
        });

        const result = await response.json();
        showMessage(result.message || 'Item updated successfully!');
        fetchItems();
    } else {
        showMessage('Update cancelled or invalid input');
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    setTimeout(() => {
        messageDiv.textContent = '';
    }, 3000);
}

function searchItems() {
    var query = document.getElementById('searchQuery').value;
    fetch('http://localhost:8000/items/search/' + encodeURIComponent(query)) // Ensure this URL is correct
        .then(response => response.json())
        .then(data => {
            var itemsList = document.getElementById('itemsList'); // Corrected ID
            itemsList.innerHTML = ''; // Clear current items

            if (data.length === 0) {
                // No items found
                itemsList.innerHTML = '<p>Item not found</p>';
            } else {
                // Display search results
                data.forEach(item => {
                    var itemElement = document.createElement('div');
                    itemElement.className = 'item'; // Add class for styling
                    itemElement.innerHTML = `<span>${item.name} - $${item.price.toFixed(2)}</span>`;
                    itemsList.appendChild(itemElement);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            var itemsList = document.getElementById('itemsList');
            itemsList.innerHTML = '<p>Error fetching search results</p>';
        });
}



// Fetch items when the page loads
fetchItems();
