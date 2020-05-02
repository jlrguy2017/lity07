import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        
        this.playing = false;
        this.ended = this.ended.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.songUrl = "";
        this.seeked = this.seeked.bind(this);
        this.eventListener = null;
        this.songPlaying = null;
        this.handlePlayClick = this.handlePlayClick.bind(this)
        this.handleDotClick = this.handleDotClick.bind(this)
        this.onListen = this.onListen.bind(this)
        this.dotPosition = 0;
        this.handleOnDrag = this.handleOnDrag.bind(this)
        
        
        
    }

    handleClick(e) {
        e.preventDefault();
        this.props.receiveCurrentSong({})
    }

    

    play(currentTime){
        // console.log(e.currentTarget.currentTime)
        this.playing = true;
        this.props.receiveCurrentSong(Object.assign({}, this.props.currentSong, { playing: true, drawing: true }, { songPosition: currentTime}))
    }

    pause(currentTime){
        this.playing = false;
        this.props.receiveCurrentSong(Object.assign({}, this.props.currentSong, { playing: false, drawing: false }, { songPosition: currentTime }))
    }

    componentDidUpdate(){
       
        let audio = document.getElementById("player")

        // if (!this.eventListener && audio.duration){

        // audio.addEventListener("playing", ()=>{
        //     audio.play()
        //         .then(() => this.play(audio.currentTime))
        // })
        // audio.addEventListener("waiting", ()=>{
        //     audio.pause()
        //     this.pause(audio.currentTime)

        // })
        // }
        if(this.props.currentSong){
            if (this.songPlaying !== this.props.currentSong.id) {

                this.playButton.innerHTML = "<i class='fas fa-pause'></i>"
                this.songPlaying = this.props.currentSong.id;
                audio.play()
                    .then(() => this.play(audio.currentTime))
            }

            if (this.playing !== this.props.currentSong.playing) {
                this.playing = this.props.currentSong.playing
                if (this.playing) {
                    this.playButton.innerHTML = "<i class='fas fa-pause'></i>"
                    audio.play()
                        .then(() => this.play(audio.currentTime))//this.props.receiveCurrentSong(Object.assign({}, this.props.currentSong, { playing: this.playing }, { drawing: false })))


                } else {
                    this.playButton.innerHTML = "<i class='fas fa-play'></i>"
                    audio.pause()
                    this.pause(audio.currentTime)
                    //this.props.receiveCurrentSong(Object.assign({}, this.props.currentSong, { playing: this.playing }, { drawing: false }))
                }
            }
        }

       
    }

    componentDidMount(){
        let audio = document.getElementById("player")
        this.playButton = document.getElementById("player-play")
        this.dot = document.getElementById("player-playback-dot")
       


        this.bar = document.getElementById("player-playback-bar")

        if (!this.eventListener) {
            this.eventListener = true;
            audio.addEventListener("playing", () => {
                
                // if (this.playing !== this.props.currentSong.playing) {
                //     this.playing = this.props.currentSong.playing
                    if (!this.playing){
                        this.playButton.innerHTML = "<i class='fas fa-pause'></i>"
                        audio.play()
                            .then(() => this.play(audio.currentTime))
                    }
                
            })
            // audio.addEventListener("pause", () => {
            //     if(this.playing){
            //         audio.pause()
            //         this.pause(audio.currentTime)
            //     }
            // })
            audio.addEventListener("waiting", () => {
                if (this.playing) {
                    this.playButton.innerHTML = "<i class='fas fa-play'></i>"
                    // audio.pause();//////////////////////////
                    this.pause(audio.currentTime)
                }
            })
        }

    }
    
    ended(){

        
    }

    seeked(e){
        this.props.receiveCurrentSong(Object.assign({}, this.props.currentSong, {songPosition: e.target.currentTime}))
    }


    checkUrl() {
        if (this.props.currentSong) {
            this.songUrl = this.props.currentSong.musicUrl
        } else {
            this.songUrl = ""
        }
    }
    handlePlayClick(){
        if(this.props.currentSong){
            let audio = document.getElementById("player")
            if (this.playing){
                this.playButton.innerHTML = "<i class='fas fa-play'></i>"
                audio.pause();
                this.pause(audio.currentTime)

            } else {
                this.playButton.innerHTML = "<i class='fas fa-pause'></i>"
                audio.play()
                    .then(() => this.play(audio.currentTime))

            }
        }

    }
    onListen(currentTime){
        
        this.dotPosition = (currentTime / this.props.currentSong.duration) * this.bar.offsetWidth;
        console.log(this.dotPosition)
        this.dot.style.left = `${this.dotPosition}px`

    }
    handleDotClick(e){
        
    }
    handleOnDrag(e){
        e.persist()
        console.log(e)
        // this.dot.style.left = `${this.dotPosition}px`
    }
    render() {
        return (
            <div className="player-container">
                <div>
                    <div onClick={this.handlePlayClick} id="player-play"><i class='fas fa-play'></i></div>


                </div>

                <div className="player-playback">
                    <div onDrag={this.handleOnDrag}onClick={this.handleDotClick} id="player-playback-dot"></div>
                    <div id="player-playback-bar"></div>

                </div>

                {this.checkUrl()}
                <ReactAudioPlayer
                    listenInterval = {200}
                    className="player-audio"
                    id="player"
                    controls
                    src={this.songUrl}
                    onSeeked={this.seeked}
                    // id={`audio-${this.props.i}`}
                    // onAbort={this.pause}
                    onEnded={this.ended}
                    // onPause={this.pause}
                    // onPlay={this.play}
                    onListen={this.onListen}
                />
                 
            </div>
        )
    }
}