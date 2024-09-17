import { HashLoader } from "react-spinners";
import { Container } from "./styles";
import { COLORS } from "../../styles/colors";

function Loader() {
  return (
    <Container>
      <HashLoader 
        color={COLORS.gray}
        loading={true}
        size={70}
      />
    </Container>
  );
}

export default Loader;
