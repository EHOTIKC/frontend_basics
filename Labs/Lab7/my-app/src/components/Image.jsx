import React, { useState } from "react";

function Image() {
  const [visible, setVisible] = useState(true);
  const [scale, setScale] = useState(1);

  const handleAdd = () => setVisible(true);
  const handleDelete = () => setVisible(false);
  const handleInc = () => setScale((s) => s + 0.1);
  const handleDec = () => setScale((s) => (s > 0.2 ? s - 0.1 : s));

  return (
    <div className="image-section">
      <a
        href="https://lviv.travel/ua/news/na-odin-den-do-lvova"
        target="_blank"
        rel="noreferrer"
      >
        {visible && (
          <img
            src="/images/Lviv.png"
            alt="Фото Львова"
            style={{
              width: "400px",
              transform: `scale(${scale})`,
              transition: "transform 0.3s",
              borderRadius: "10px",
              display: "block",
              margin: "20px auto",
            }}
          />
        )}
      </a>

      <div className="buttons" style={{ textAlign: "center", marginTop: "15px" }}>
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleInc}>Збільшити</button>
        <button onClick={handleDec}>Зменшити</button>
        <button onClick={handleDelete}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
