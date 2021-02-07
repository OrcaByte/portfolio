import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { IoMdClose } from 'react-icons/io';
import { useStateListner } from '../Homepage/Utils';
import { GlobalContext } from '../globalContext';
// @ts-ignore
import ReactToPdf from 'react-to-pdf';
import { FaFileDownload } from 'react-icons/fa';

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
  const { pdfOptions, profile } = useContext(GlobalContext);
  const [state, dispatcher] = useStateListner();

  return (
    <div>
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
              Sound
            </Typography>
            <ReactToPdf
              targetRef={pdfOptions.parentRef}
              filename={`${profile.name}.pdf`}
              options={pdfOptions.options}
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
        <List ref={pdfOptions.parentRef}>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
