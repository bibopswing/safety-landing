import Container from "../common/Container";
import Image from "next/image";
import dashboard from "../../assets/images/main-page/dashboard/Body2.png";
import logo from "../../assets/images/main-page/dashboard/SAFETY.svg";
import FadeIn from "../common/FadeIn";

export default function Dashboard(params) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <FadeIn start="top 80%" delay={0.3}>
          <Image src={logo} alt="company name" />
        </FadeIn>
        <FadeIn start="top 80%">
          <Image
            className="translate-y-[-10%]"
            src={dashboard}
            alt="dashboard"
          />
        </FadeIn>
      </div>
    </Container>
  );
}
