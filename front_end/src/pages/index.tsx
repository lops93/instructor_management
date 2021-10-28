import Head from "next/head";
import ProtectedZone from "ui/components/protected_zone/protected_zone";
import Txt_Title from "ui/components/data_display/txt_title/txt_title";
import Instructor from "ui/components/instructor/instructor";
import Searchfield from "ui/components/inputs/searchfield/searchfield";
import {
  Button,
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import {
  FormContent,
  InstructorContent,
  InstructorContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex";

export default function Home() {
  const {
    search,
    setSearch,
    validSearch,
    searchInstructors,
    error,
    Instructors,
    showInstructors,
    searching,
    RemainingInst,
  } = useIndex();

  return (
    <div>
      <ProtectedZone />
      <Txt_Title
        title={"Available Instructors"}
        subtitle={
          <p>check out the available instructors and start your lesson</p>
        }
      ></Txt_Title>
      <Container>
        <FormContent>
          <Searchfield
            label={"Search by specialty"}
            fullWidth
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "30%" }}
            disabled={!validSearch || searching}
            onClick={() => searchInstructors(search)}
          >
            {searching ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormContent>

        {showInstructors &&
          (Instructors.length > 0 ? (
            <InstructorContent>
              <InstructorContainer>
                {Instructors.map((item, index) => {
                  return (
                     <Instructor
                      key={index}
                      name={item.fullname}
                      picture={item.avatar}
                      rating={item.rating}
                      desc={item.specialty}
                    />
                  )
                })}
            
              </InstructorContainer>

              <Container sx={{ textAlign: "center" }}>
                {RemainingInst > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    Check out another {RemainingInst} 
                    {RemainingInst > 1 ? 'instructor' : 'instructors'}{' '} found
                  </Typography>
                )}
                <Button 
                  sx={{ mt: 5 }} 
                  variant={"contained"}
                  color={"secondary"}
                >
                  Select a Instructor
                </Button>
              </Container>
            </InstructorContent>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              No results
            </Typography>
          ))}
      </Container>
    </div>
  );
}
