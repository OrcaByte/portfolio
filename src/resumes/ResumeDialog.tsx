import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { IoMdClose } from 'react-icons/io';
import { useStateListner } from '../Homepage/Utils';
// @ts-ignore
import ReactToPdf from 'react-to-pdf';
import { FaFileDownload } from 'react-icons/fa';
import SideBarInfo from '../Homepage/SideBarInfo';
import SkillsLanguages from '../Homepage/SkillsLanguages';
import ProjectsPage from '../Homepage/ProjectsPage';
import WorkExperience from '../Homepage/WorkExperience';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResumeDialog() {
  const classes = useStyles();
  const [state, dispatcher] = useStateListner();

  return (
    <Dialog
      fullScreen
      open={state.isResumeDialog}
      onClose={() => dispatcher({ isResumeDialog: false })}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => dispatcher({ isResumeDialog: false })}
            aria-label="close"
          >
            <IoMdClose />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            PDF downloadable
          </Typography>
          <ReactToPdf
            targetRef={state.pdfOptions.parentRef}
            filename={`${state.profile.name}.pdf`}
            options={state.pdfOptions.options}
          >
            {({ toPdf }: any) => (
              <button
                className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-blue-400 py-2 px-4 border border-blue hover:border-transparent rounded text-yellow-400"
                onClick={toPdf}
              >
                <FaFileDownload />
              </button>
            )}
          </ReactToPdf>
        </Toolbar>
      </AppBar>
      <div ref={state.pdfOptions.parentRef}>
        <SideBarInfo />
        <SkillsLanguages />
        <ProjectsPage />
        <WorkExperience />
      </div>
    </Dialog>
  );
}
