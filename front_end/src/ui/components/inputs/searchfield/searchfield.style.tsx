import { experimentalStyled as styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import theme from "ui/themes/theme";

export const SearchFieldContent = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutilineInput-notchedOutline {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
