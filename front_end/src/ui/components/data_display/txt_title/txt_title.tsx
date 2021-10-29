import React  from "react";
import { TitleContent, TitleStyle, SubTitleStyle, TitleLogo } from './txt_title.style';

interface Txt_Titleprops{
    title:string;
    subtitle?:string | JSX.Element;
}

const Txt_Title : React.FC<Txt_Titleprops> = (props) => {
    return <TitleContent>
        <TitleLogo src={"/img/logos/coruja_teacher.png"} />
        <TitleStyle>{props.title}</TitleStyle>
        <SubTitleStyle>{props.subtitle}</SubTitleStyle>
    </TitleContent>;
}

export default Txt_Title;