import { Grid } from "@mui/material";
import LoadingIcon from "../svg/LoadingIcon";
import "./styledCustom.scss";

interface LoadingProps {
  loading: boolean;
  message: string;
}

const LoadingCustom: React.FC<LoadingProps> = ({ loading, message }) => {
  return (
    loading && (
      <Grid
        size={12}
        className="flex justify-center items-center container-loading"
      >
        <LoadingIcon width="250" height="250" />
        <h2>{message ?? "Cargando...."}</h2>
      </Grid>
    )
  );
};

export default LoadingCustom;
