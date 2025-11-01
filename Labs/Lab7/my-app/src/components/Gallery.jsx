import React, { useState } from "react";

function Gallery() {
  const initialItems = [
    {
      id: 1,
      name: "BMW M3 E46",
      description: "Легендарна модель BMW з гри NFS Most Wanted (2005).",
      image: "/images/m3e46.png",
    },
    {
      id: 2,
      name: "Toyota Supra MK4",
      description: "Ікона японського автопрому - Supra.",
      image: "/images/supra.png",
    },
    {
      id: 3,
      name: "Ford Mustang GT",
      description: "Класичний американський мускул-кар з потужним V8.",
      image: "/images/mustang.png",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [detailsVisible, setDetailsVisible] = useState({});

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddAll = () => {
    setItems(initialItems);
  };

  const toggleDetails = (id) => {
    setDetailsVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="gallery">
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Галерея автомобілів</h2>
      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            {detailsVisible[item.id] && <p>{item.description}</p>}

            <div className="card-buttons">
              <button onClick={() => toggleDetails(item.id)}>
                {detailsVisible[item.id] ? "Сховати" : "Детальніше"}
              </button>
              <button onClick={() => handleDelete(item.id)}>Видалити</button>
            </div>
          </div>
        ))}
      </div>

      {items.length < initialItems.length && (
        <div className="restore-section">
          <button onClick={handleAddAll}>Повернути всі</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
