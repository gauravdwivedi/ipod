import React from 'react';
import './ipod.css';
import Screen from './screen';
import Wheel from './wheel';
import ZingTouch from 'zingtouch';
import './images/playlist.jpg';



class Ipod extends React.Component{

    constructor(props){
        super(props);

        this.state={
            Menu:true,
            album:false,
            songs:true,
            playlist:false,
            artist:false,
            showHide:false
        }
    }
      
    //Tracking Wheel rotation
    wheelRotate=(props)=>{
        let angle =0;
        const target =document.getElementById('outerwheel');
        const region =new ZingTouch.Region(target);
        region.bind(target, 'rotate', (e) =>{
           
            angle = angle+ e.detail.distanceFromLast;
            
            if(angle<0 && this.state.Menu===true){
                //Songs
                
                let songs =document.getElementById('songs');
                songs.style.backgroundColor="blue";
                songs.style.color="white";


                let Album =document.getElementById('Album');
                Album.style.backgroundColor="white";
                Album.style.color="black";


                let Artist =document.getElementById('Artist');
                Artist.style.color="black";
                Artist.style.backgroundColor="white";

                let Playlists =document.getElementById('Playlists');
                Playlists.style.backgroundColor="white";
                Playlists.style.color="black";

                //trace the wheel
                this.setState({
                    Menu:true,
                    album:false,
                    songs:true,
                    artist:false,
                    playlist:false
                })
               // console.log(this.state.songs);
            }

            

            if(angle<15 && angle>0 && this.state.Menu===true){
                //Album
                    let Album =document.getElementById('Album');
                    Album.style.backgroundColor="blue";
                    Album.style.color="white";

                    let songs =document.getElementById('songs');
                    songs.style.backgroundColor="white";
                    songs.style.color="black";

                    let Playlists =document.getElementById('Playlists');
                    Playlists.style.backgroundColor="white";
                    Playlists.style.color="black";

                    let Artist =document.getElementById('Artist');
                    Artist.style.color="black";
                    Artist.style.backgroundColor="white";

                    this.setState({
                        Menu:true,
                        album:true,
                        songs:false,
                        artist:false,
                        playlist:false
                    })

                   // console.log(this.state.album);
                }

            if(angle<30 && angle>15 && this.state.Menu===true){
                //Artist
                let Artist =document.getElementById('Artist');
                Artist.style.backgroundColor="blue";
                Artist.style.color="white";

                    let songs =document.getElementById('songs');
                    songs.style.backgroundColor="white";
                    songs.style.color="black";

                    let Playlists =document.getElementById('Playlists');
                    Playlists.style.backgroundColor="white";
                    Playlists.style.color="black";
                    
                    let Album =document.getElementById('Album');
                    Album.style.backgroundColor="white";
                    Album.style.color="black";
                    this.setState({
                        Menu:true,
                        album:false,
                        songs:false,
                        artist:true,
                        playlist:false
                    })
    
                  //  console.log(this.state.artist);

            }

            if(angle<45 && angle>30 && this.state.Menu===true){
                //Playlist

                let Album =document.getElementById('Album');
                Album.style.backgroundColor="white";
                Album.style.color="black";

                let songs =document.getElementById('songs');
                songs.style.backgroundColor="white";
                songs.style.color="black";

                let Playlists =document.getElementById('Playlists');
                Playlists.style.backgroundColor="blue";
                Playlists.style.color="white";

                let Artist =document.getElementById('Artist');
                Artist.style.color="black";
                Artist.style.backgroundColor="white";

                this.setState({
                    Menu:true,
                    album:false,
                    songs:false,
                    artist:false,
                    playlist:true
                })

               // console.log(this.state.playlist);
            }
            

        });

    }


    enterItem= (props)=>{
       //click on menu item

        if(this.state.songs===true && this.state.Menu===true ){
           this.setState({Menu:false},()=>{
               console.log(this.state.Menu);
           })

            // console.log(this.state.Menu);
           let screen =document.getElementById('mainScreen');
           let list=document.getElementById('list');
           list.style.visibility="hidden";
           list.style.display="none";

           let h1 =document.createElement('img');
           h1.id="h1-screen";
           //h1.textContent="Songs";
            h1.setAttribute("src",require('./images/player.jpg'));
           h1.style.height="100%";
           h1.style.width="100%";

           screen.appendChild(h1);
        }


        if(this.state.artist===true && this.state.Menu===true){
            
            this.setState({Menu:false},()=>{
                console.log(this.state.Menu);
            })
            
            let screen =document.getElementById('mainScreen');
           let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";

           let h1 =document.createElement('img');
           h1.id="h1-screen";
           //h1.textContent="Artist";
           h1.setAttribute("src",require('./images/artist.jpg'));
           h1.style.height="100%";
           h1.style.width="100%";
           h1.style.margin="auto";
           screen.appendChild(h1);
        }
        
        if(this.state.album===true && this.state.Menu===true){
            
            this.setState({Menu:false},()=>{
                console.log(this.state.Menu);
            })
            
            let screen =document.getElementById('mainScreen');
           let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";

           let h1 =document.createElement('h1');
           h1.id="h1-screen";
           //h1.textContent="Album";
           
           h1.setAttribute("src",require('./images/album.png'));
           h1.style.height="100%";
           h1.style.width="100%";
           screen.appendChild(h1);

        }

        
        if(this.state.playlist===true && this.state.Menu===true){
            
            this.setState({Menu:false},()=>{
                console.log(this.state.Menu);
            })
            

            let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";

           let h1 =document.createElement('h1');
           h1.id="h1-screen";
           //h1.textContent="PlayList";
           
           h1.setAttribute("src","playlist.jpg");
           h1.style.height="100%";
           h1.style.width="100%";
           screen.appendChild(h1);

        }


    }


    setImage=(props)=>{

        console.log("Inside Set Image ");
    }

    // Menu btn to get black to menu
    itemCLick=(props)=>{
        console.log(this.state.Menu);

       if(this.state.Menu===false){

                //console.log(this.state.Menu);

            let prev =document.getElementById('h1-screen');
                //console.log(prev);
            prev.remove();
            let MenuItems =document.getElementById('list');
            MenuItems.style.display="block"
            MenuItems.style.visibility="visible";

            //reset the state to initial state
            this.setState({
            Menu:true,
            album:false,
            songs:true,
            artist:false,
            playlist:false
           })
       }
    }

    render() {
        return (
            <div className="main">
            <Screen className="ipodScreen" />
            <Wheel  rotate ={this.wheelRotate}  screen={this.itemCLick} innerBtn={this.enterItem}/>
            </div>
        );
    }
}

export default Ipod;