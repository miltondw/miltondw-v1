import CardServices from "./CardServices";
import services from "./services.json";
export default function Services() {
  return (
    <div className="services">
      <h2 className="Title">Servicios</h2>
      {services.map((s) => (
        <CardServices
          key={s.id}
          src={s.src}
          title={s.title}
          description={s.description}
        />
      ))}
    </div>
  );
}
