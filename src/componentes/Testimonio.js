import '../stylesheet/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img 
        className="img-testimonio"
        src={require(`../imagenes/img-${props.img}.jpeg`)}
        alt="img"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">{props.texto}</p>
      </div>
    </div>
  );
};

export default Testimonio;