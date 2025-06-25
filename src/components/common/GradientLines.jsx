import Button from "./Button";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function GradientLines({ title, text, buttons }) {
  const lines = [
    "w-[90%] animated-gradient",
    "w-[95%] animated-gradient",
    "w-full animated-gradient",
  ];

  return (
    <Container>
      <FadeIn   >
        <div className=" flex flex-col items-center gap-[0.5rem] ">
          {lines.map((line, index) => (
            <div key={index} className={`h-[4px] ${line}`}></div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-[1rem] py-[7.8rem]">
          <h2 className="text-center">{title}</h2>
          {text && <p className="grey text-center">{text}</p>}
          {buttons && (
            <div className="flex w-full lg:w-auto flex-col lg:flex-row items-center gap-[1.5rem]">
              {buttons.map((item, index) => (
                <Button
                  key={index}
                  text={item}
                  className={"w-full lg:w-auto"}
                  arrow={buttons.length === 1 ? true : false}
                  transparent={index >= 1 && true}
                  href="https://app.sftyhub.com/"
                />
              ))}
            </div>
          )}
        </div>
        <div className=" flex flex-col items-center gap-[0.5rem] ">
          {lines.reverse().map((line, index) => (
            <div key={index} className={`h-[4px] ${line}`}></div>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
}
