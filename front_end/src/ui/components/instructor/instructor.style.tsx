import { experimentalStyled as styled } from "@material-ui/core";
import { Avatar, Rating } from "@material-ui/core";

export const InstructorContent = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar desc";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
`;

export const InstructorName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const InstructorDescription = styled("div")`
  grid-area: desc;
  color: ${({ theme }) => theme.palette.text.secondary};
  color: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const InstructorAvatar = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;
export const InstructorRating = styled(Rating)`
  grid-area: rating;
  font-size: 1rem;
`;
