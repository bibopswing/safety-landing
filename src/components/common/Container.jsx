import style from "../../assets/styles/modules/container.module.scss";

export default function Container({ children, className, customStyle }) {
  return (
    <section
      style={customStyle}
      className={style.container + " " + (className || "")}
    >
      {children}
    </section>
  );
}
