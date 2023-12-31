import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import About from "./About";
import Resume from "./Resume";
import Skill from "./Skill";
import Project from "./Project";
import * as S from "../styled/main.style";
import { init, setPosition } from "../reduce/action";
import { useDispatch } from "react-redux";
import { FaAngleDown } from "react-icons/fa6";
import { onClickButton } from "../module/share";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const aboutLocationRef = useRef<any>(null);
  const resumeLocationRef = useRef<any>(null);
  const skillLocationRef = useRef<any>(null);

  useEffect(() => {
    dispatch(init());

    const about = aboutLocationRef.current?.getBoundingClientRect().top;
    const resume = resumeLocationRef.current?.getBoundingClientRect().top;
    const skill = skillLocationRef.current?.getBoundingClientRect().top;

    dispatch(setPosition(about, resume, skill));
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.thumbnailBox>
        <S.thumbnailTitle>my-portfolio</S.thumbnailTitle>
        <S.thumbnailContent>
          안녕하세요. 프론트엔드 개발자를 꿈꾸는 김무성입니다.
        </S.thumbnailContent>
        <S.NextBtn onClick={() => onClickButton("about")}>
          <FaAngleDown />
        </S.NextBtn>
      </S.thumbnailBox>

      <div>
        <Element name="about">
          <About />
        </Element>
        <div ref={aboutLocationRef} />
      </div>

      <div>
        <Element name="resume">
          <Resume />
        </Element>
        <div ref={resumeLocationRef} />
      </div>

      <div>
        <Element name="skill">
          <Skill />
        </Element>
        <div ref={skillLocationRef} />
      </div>

      <div>
        <Element name="project">
          <Project />
        </Element>
      </div>
    </S.Wrapper>
  );
};

export default Main;
