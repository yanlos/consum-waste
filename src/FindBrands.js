import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import allbirds from './Ourbrands/allbirds.jpg';
import yttp from './Ourbrands/YTTP.png';
import lbp from './Ourbrands/lbp.png';
import veja from './Ourbrands/veja.png';
import toms from './Ourbrands/toms.png';
import greats from './Ourbrands/greats.png';
import nuggets from './Ourbrands/nuggets.jpg';
import regrained from './Ourbrands/Regrained.jpeg';
import bobo from './Ourbrands/bobo.png';
import snack1 from './Ourbrands/snack1.PNG'
import organics from './Ourbrands/organics.jpg'
import hazelnut from './Ourbrands/hazelnut.jpg'
import "typeface-montserrat";
import "typeface-roboto";
import "./App.css";



const tileData = [
    {
        img: allbirds,
        title: 'AllBirds',
        author: 'Sustainable Shoes From Wool',
    },
    {
        img: veja,
        title: 'VEJA',
        author: 'Built from recycled plastic bottles, wild rubber and organic plants',
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
        img: organics,
        title: 'Organic Basics',
        author: 'Organic cotton, 100% eco-certified'
    },
    {
        img: snack1,
        title: 'Nature\’s Path',
        author: 'Made in a zero-waste facility'
    }
];


const shoes = [
    {
        img: allbirds,
        title: 'AllBirds',
        author: 'Sustainable Shoes From Wool',
    },
    {
        img: veja,
        title: 'VEJA',
        author: 'Built from recycled plastic bottles and wild rubber',
    },
    {
        img: toms,
        title: 'TOMS Earthwise',
        author: 'Created with plant-derived materials'
    },
    {
        img: greats,
        title: 'Greats Royale Knit',
        author: 'Made with yarn'
    }
]

const snacks = [
    {
        img: nuggets,
        title: 'Quinn Snacks',
        author: 'Organic and GMO-free'
    },
    {
        img: regrained,
        title: 'Regrained',
        author: 'Tasty snack bars from upcycled grains'
    },
    {
        img: hazelnut,
        title: 'Justin\'s',
        author: 'Made with clean and simple organic ingredients'
    },

    {
        img: snack1,
        title: 'Nature\’s Path',
        author: 'Made in a zero-waste facility'
    }

]


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
    const [product, setProduct] = useState('');


    const textRef = useRef();

    // const handleClick = () => {
    //     console.log(product);
    //     console.log(product)
    //   };

    //   const handleChange = (product) => {
    //     setProduct(product);
    //     console.log(product);
    //   }


      function myFunction() {
        var x = document.getElementById("text-select").value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
    }


    function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].title === nameKey) {
                return myArray[i];
            }
        }
    }

    function displayProduct(value) {

        if ((search(value, top10Products) != null)) {
            
            if (value == 'Shoes') {
                let tile = tileData[0];
                
            return (
                    <GridList cellHeight={300} className={classes.gridList} cols={1}>
                    {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto', background: '#357a38' }}>
                        {/* <ListSubheader className = {classes.words} component="div">Our Featured Sustainable Products</ListSubheader> */}
                        {/* <Typography component="h1"> Our Featured Sustainable Products </Typography> */}
                    {/* </GridListTile> */}
                    {shoes.map((tile) => (
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
            );
        }

        else if (value == 'Skin Care') {
            const tile = tileData[2];
            
        return (
            <div>
                <GridList cellHeight={300} className={classes.gridList} cols={1}>
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
                </GridList>
            </div>
        );
    }

    else if (value == 'Foods & Snacks') {
        return (
            <div>
                <GridList cellHeight={300} className={classes.gridList} cols={1}>
                {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto', background: '#357a38' }}>
                    {/* <ListSubheader className = {classes.words} component="div">Our Featured Sustainable Products</ListSubheader> */}
                    {/* <Typography component="h1"> Our Featured Sustainable Products </Typography> */}
                {/* </GridListTile> */}
                {snacks.map((tile) => (
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
        );
    }
    }
    }


    return (
        <div id="findBrands">
        <main id="main-findBrands">
            {/* <h2 style="color: red">
            Our Featured Sustainable Products

        </h2> */}

<br>
            </br>
            <br>
            </br>

        <h1 style={{ color: 'green', fontFamily:'"Montserrat"' }}>Our Featured Sustainable Products</h1>


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

            <br>
            </br>
            <h1 id="search-own" style={{ color: 'green', fontFamily:'"Montserrat"' }}>Or Search For Your Own</h1>
    
    <div style={{ width: 300 }}>
      <Autocomplete value={product} onChange={(event, newValue) => {
            {setProduct(newValue)}
          }}
        id="free-solo-demo"
        freeSolo
        options={top10Products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField  inputRef={textRef} {...params} label="Environmentally Friendly" margin="normal" variant="outlined" 
          />
        )}
        
      />
      
      <div id="search-products">
        {displayProduct(product)}
      </div>
{/* {
    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        //  className={classes.submit}
            onClick={handleClick}
        >
            Find Product
        </Button> } */}

    </div>
        </main>
        </div>
    );
}
