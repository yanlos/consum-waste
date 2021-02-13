import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import allbirds from './Ourbrands/allbirds.jpg';
import yttp from './Ourbrands/YTTP.png';
import lbp from './Ourbrands/lbp.png';



const tileData = [
    {
        img: allbirds,
        title: 'AllBirds',
        author: 'Sustainable Shoes From Wool',
    },
    {
        img: yttp,
        title: 'Youth to the People',
        author: 'Plant-Powered Skin-Care',

    },
    {
        img: lbp,
        title: 'Love Beauty and Planet',
        author: 'Recycled Plastic, Plant Based Ingredients',
    },
    {
        img: allbirds,
        title: 'AllBirds',
        author: 'Sustainable Shoes From Wool',
    },
    {
        img: yttp,
        title: 'Youth to the People',
        author: 'Plant-Powered Skin-Care',

    },
    {
        img: lbp,
        title: 'Love Beauty and Planet',
        author: 'Recycled Plastic, Plant Based Ingredients',
    },
    {
        img: allbirds,
        title: 'AllBirds',
        author: 'Sustainable Shoes From Wool',
    },
    {
        img: yttp,
        title: 'Youth to the People',
        author: 'Plant-Powered Skin-Care',

    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 700,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },

    
}));

const top10Products = [
    { title: 'Shoes'},
    { title: 'Hair Care'},
    { title: 'Clothes'},
    { title: 'Mattresses'},
    { title: 'Textiles'},
    { title: 'Skin Care'},
    { title: 'Underwear'},
    { title: 'Foods & Snacks'},
    { title: 'Furniture'},
    { title: 'Environmentally Friendly Brands'},
    
]

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {
    const classes = useStyles();

    return (
        <main>
            {/* <h2 style="color: red">
            Our Featured Sustainable Products

        </h2> */}

        <h1 style={{ color: 'green', fontFamily:'"Helvetica Neue"' }}>Our Featured Sustainable Products</h1>

        {/* <h2 class="red-text" style="color: red;">CatPhotoApp</h2> */}

            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto', background: '#357a38' }}>
                        {/* <ListSubheader className = {classes.words} component="div">Our Featured Sustainable Products</ListSubheader> */}
                        {/* <Typography component="h1"> Our Featured Sustainable Products </Typography> */}
                    {/* </GridListTile> */} 
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>


            <h1 style={{ color: 'green', fontFamily:'"Helvetica Neue"' }}>Or Search For Your Own</h1>


    <div style={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top10Products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="search" margin="normal" variant="outlined" />
        )}
      />
      
    </div>
        </main>

    );
}
