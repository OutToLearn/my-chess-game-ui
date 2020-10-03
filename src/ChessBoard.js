import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

//    overflow: 'hidden',
//    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 550,
    height: 550
  },
  hoveredGridItem: {
        boxShadow: '3px 3px 2px 1px rgba(0, 0, 255, .2)'
  }
});

class ChessBoard extends Component {
    //const { classes } = props;

    tileClicked = (element) => {
        console.log(element.target);
    }

    createTileContent = (tileData) => {
        if (tileData.img)
        return (<GridListTile key={tileData.title} cols={tileData.cols || 1} className={    styles.gridItem}
                                mouseOver = {(element) => console.log('Moused over: ' + element.target)}
                                onClick = {this.tileClicked}><img src={tileData.img} alt={tileData.title} /></GridListTile>);
        return (<GridListTile key={tileData.title} cols={tileData.cols || 1} >
                                <div>{tileData.text}</div></GridListTile>);
    };

    render() {
        return (<div className={styles.root}>
            <GridList cols={9} cellHeight={50} className={styles.gridList}>
                {this.props.boardData.map(this.createTileContent)}
            </GridList>
        </div>
    )};
}

export default withStyles(styles)(ChessBoard);