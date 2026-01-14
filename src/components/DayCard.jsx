{/*1. campo de texto para escrever o plano do dia, 2.upload de uma foto, 3. escolha um adesivo, --TODO COMPONENTE DE REACT COMEÇA COM UMA FUNÇÃO QUE RETORNA JSX - HTML DENTRO DO JS */}
import { useState } from "react";
import { FaPaintBrush } from "react-icons/fa";

function DayCard({ day }) {
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  const [sticker, setSticker] = useState(null);
  const [showSelector, setShowSelector] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  // estilo padrão para botões
  const estiloDoBotao = {
    backgroundColor: "#99cb43ff",
    color: "black",
    padding: "5px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // corrigido
        gap: "15px",
        
        padding: "10px",
        margin: "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          border: "1px solid #709e40ff",
          borderRadius: "8px",
          padding: "15px",
          margin: "10px",
          backgroundColor: "#fcf8e0ff",
        }}
      >
        {/* Ícone de pincel */}
        <FaPaintBrush
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            color: "#555",
          }}
          onClick={() => setShowEditor(!showEditor)}
        />

        {/* Painel de edição */}
        {showEditor && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #709e40ff",
              borderRadius: "6px",
              backgroundColor: "#fef5b9ff",
            }}
          >
            {/* Upload de foto */}
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <label htmlFor={`fileUpload-${day}`} style={estiloDoBotao}>
                foto!
              </label>
              <input
                id={`fileUpload-${day}`}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
              />

              {/* Botão para abrir seletor */}
              <button
                onClick={() => setShowSelector(!showSelector)}
                style={estiloDoBotao}
              >
                {showSelector ? "fechar" : "adesivos!"}
              </button>
            </div>

            {/* Seletor de adesivos */}
            {showSelector && (
              <div
                style={{
                  border: "1px solid #aaa",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <h4>Selecione um adesivo:</h4>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="/stickers/°❀_ೃ࿔_.png"
                    alt="flor"
                    width="50"
                    onClick={() => {
                      setSticker("/stickers/°❀_ೃ࿔_.png");
                      setShowSelector(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src="/stickers/download (3).png"
                    alt="estrela"
                    width="50"
                    onClick={() => {
                      setSticker("/stickers/download (3).png");
                      setShowSelector(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src="/stickers/download (4).png"
                    alt="joaninha"
                    width="50"
                    onClick={() => {
                      setSticker("/stickers/download (4).png");
                      setShowSelector(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Título do dia */}
        <h3>Dia {day}</h3>

        {/* Texto */}
        <textarea
          style={{ border: "3px solid #3d4c07ff" }}
          placeholder="O que vamos fazer?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          cols={30}
        />
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {photo && <img src={photo} alt="foto" width="150" />}
        </div>  

          {sticker && (
            <div
              style={{
                width: "100px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-5px",
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "60px",
                height: "60px",
                objectFit: "contain",
                zIndex: 10,
                transform: "rotate(-10deg)",

              }}
            >
              <img
                src={sticker}
                alt="adesivo escolhido"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>
      </div>
  );
}

export default DayCard;


//evento + estado 
