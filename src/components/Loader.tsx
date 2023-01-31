import {Fade, LinearProgress, Typography} from "@mui/material";
import classNames from './Components.module.scss'

type LoaderOptions = {
    isLoaded: boolean
};

const Loader = ({ isLoaded }:LoaderOptions) => {
  return (
    <Fade
      in={!isLoaded}
      unmountOnExit
      timeout={500}
    >
      <div className={classNames.root}>
        <div className={classNames.loader}>
          <Typography sx={{textAlign: 'center'}} variant="h3">Загрузка...</Typography>
          <LinearProgress sx={{ width: '200px', margin: 'auto'}} />
        </div>
      </div>
    </Fade>
  )
}
export default Loader