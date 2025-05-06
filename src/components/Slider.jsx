import { useState } from "react";

function Slider() {
  const images = [
    { url: "/img1.jpg", title: "Фото 1" },
    { url: "/img2.jpg", title: "Фото 2" },
    { url: "/img3.jpg", title: "Фото 3" },
    { url: "/img4.jpg", title: "Фото 4" },
    { url: "/img5.jpg", title: "Фото 5" },
    { url: "/IMG_9378.JPG", title: "Фото 6" },
    { url: "/IMG_9441.JPG", title: "Фото 7" },
    { url: "/main.jpg", title: "Главное фото" }
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const changeImage = (direction) => {
    setFade(false); // Начать исчезновение
    setTimeout(() => {
      setCurrent((prev) =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setFade(true); // Вернуть плавность после смены
    }, 300); // Скорость исчезновения
  };

  return (
    <div style={{ width: "800px", margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          transition: "opacity 0.3s ease-in-out",
          opacity: fade ? 1 : 0
        }}
      >
        <img
          src={images[current].url}
          alt={images[current].title}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
          }}
        />
        <h3 style={{ margin: "10px 0" }}>{images[current].title}</h3>
      </div>
      <div>
        <button onClick={() => changeImage("prev")} style={btnStyle}>← Назад</button>
        <button onClick={() => changeImage("next")} style={{ ...btnStyle, marginLeft: "10px" }}>
          Вперёд →
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px"
};

export default Slider;
