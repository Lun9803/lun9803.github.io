import React from "react";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	root: {
			flexGrow:1
	},
});


function FavoriteDrawer() {
	const classes = useStyles();

  return (
		<div className={classes.root}>

		</div>
	);
}

export default FavoriteDrawer;