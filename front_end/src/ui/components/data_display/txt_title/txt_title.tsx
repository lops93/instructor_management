import React  from "react";
import { TitleContent, TitleStyle, SubTitleStyle } from './txt_title.style';

interface Txt_Titleprops{
    title:string;
    subtitle?:string | JSX.Element;
}

const Txt_Title : React.FC<Txt_Titleprops> = (props) => {
    return <TitleContent>
        <TitleStyle>{props.title}</TitleStyle>
        <SubTitleStyle>{props.subtitle}</SubTitleStyle>
    </TitleContent>;
}

export default Txt_Title;