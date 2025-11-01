import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleList: false,
      toggleCity: false,
    };
  }

  handleListClick = () => {
    this.setState((prev) => ({ toggleList: !prev.toggleList }));
  };

  handleCityClick = () => {
    this.setState((prev) => ({ toggleCity: !prev.toggleCity }));
  };

  render() {
    const listStyle = {
      backgroundColor: this.state.toggleList ? "black" : "white",
      color: this.state.toggleList ? "white" : "black",
      padding: "10px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
    };

    const cityStyle = {
      backgroundColor: this.state.toggleCity ? "darkgreen" : "white",
      color: this.state.toggleCity ? "yellow" : "black",
      padding: "10px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
    };

    return (
      <main>
        <h3>Моє хобі</h3>
        <ul>
          <li>Програмування</li>
          <li>Автомобілі</li>
          <li>Відеоігри</li>
        </ul>

        <h3>Мої улюблені книги / фільми</h3>
        <ol style={listStyle} onClick={this.handleListClick}>
          <li>«Алгоритми: побудова та аналіз» Томас Х. Кормен та ін.</li>
          <li>«Eloquent JavaScript» Марейн Хавербек</li>
          <li>«Гаррі Поттер» Дж. К. Роулінг</li>
          <li>«Володар перснів» Дж. Р. Р. Толкін</li>
        </ol>

        <h3>Моє улюблене місто</h3>
        <p style={cityStyle} onClick={this.handleCityClick}>
          Найбільше мені сподобалося місто Львів. Воно має унікальну архітектуру,
          атмосферу та смачну каву.
        </p>
      </main>
    );
  }
}

export default Content;
