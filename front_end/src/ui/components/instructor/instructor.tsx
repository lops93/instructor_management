import React from "react";
import {
  InstructorContent,
  InstructorName,
  InstructorDescription,
  InstructorAvatar,
  InstructorRating,
} from "./instructor.style";

interface InstructorProps {
  picture: string;
  name: string;
  rating: number;
  desc?: string;
}

const Instructor: React.FC<InstructorProps> = ({
  name,
  picture,
  rating,
  desc,
}) => {
  return (
    <InstructorContent>
      <InstructorAvatar src={picture}>{name[0]}</InstructorAvatar>
      <InstructorName>{name}</InstructorName>
      <InstructorRating readOnly value={rating} />
      <InstructorDescription>{desc}</InstructorDescription>
    </InstructorContent>
  );
};

export default Instructor;
