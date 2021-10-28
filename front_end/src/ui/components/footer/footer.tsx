import React from "react";
import {
  FooterContent,
  FooterContainer,
  FooterTitle,
  Apps,
} from "./footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <FooterContent>
        <FooterContainer>
          <Box sx={{ maxWidth: "400px" }}>
            <FooterTitle>Quem Somos</FooterTitle>
            <Typography variant={"body2"} sx={{ marginTop: "16px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              deserunt ipsum quaerat consectetur magni repellat quasi molestias
              quisquam at, pariatur debitis possimus cumque labore animi
              deleniti voluptatibus? Perferendis, delectus eligendi.
            </Typography>
          </Box>
          <div>
            <FooterTitle>Baixe nosso app</FooterTitle>
            <Apps>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/app_store.png"} alt={"App Store"} />
                </a>
              </li>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/google_play.png"} alt={"Google Play"} />
                </a>
              </li>
            </Apps>
          </div>
        </FooterContainer>
      </FooterContent>
    </div>
  );
};

export default Footer;
