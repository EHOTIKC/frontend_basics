const button = document.getElementById('loadUserBtn');
const container = document.getElementById('userContainer');

button.addEventListener('click', () => {
    fetch('https://randomuser.me/api')
        .then(response => {
            if (!response.ok) throw new Error('Помилка мережі');
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            container.innerHTML = `
                <div class="user-card">
                    <img src="${user.picture.large}" alt="Користувач">
                    <div>
                        <p><strong>Ім'я:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                        <p><strong>Місто:</strong> ${user.location.city}</p>
                        <p><strong>Країна:</strong> ${user.location.country}</p>
                        <p><strong>Поштовий індекс:</strong> ${user.location.postcode}</p>
                    </div>
                </div>
            `;
        })
        .catch(err => {
            container.innerHTML = `<p style="color:red;">Помилка: ${err.message}</p>`;
        });
});
