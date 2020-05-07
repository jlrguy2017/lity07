import React from 'react';
import FirstFormContainer from '../session/first_form_container'
import Carousel from "./carousel"


export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.songs = []
    }
    componentWillUnmount(){
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "auto";
    }

    componentDidMount(){
        this.props.fetchRandomNoInfoSongs();
    }

    handleClick(e){
        e.preventDefault();

        document.getElementsByClassName("modal-form")[0].style.display = "block";
        document.body.style.overflowY = "hidden";
        document.body.style.overflowX = "hidden";

        
    }

    renderImage(song){
        if(song.imageUrl){
            return song.imageUrl
        }else{
            if(song.profilePhoto){
                return song.profilePhoto
            }else{
                return "https://www.unitedfamilies.org/wp-content/uploads/2015/09/unknown.png"
            }
        }
    }

    renderTrack(song, i){
        if(song){
           return(
               <div key={`song-index-${song.id}`} className="index-trending-single-track">
                   <img className="track-img" src={this.renderImage(song)} />
                   <h4>{song.title}</h4>
                   <p>{song.username}</p>
               </div>

           )
        }else{
            return(
                <div key={`song-index-non-${i}`} className="index-trending-single-track">
                    <div className="track-img"/>
                    <h4>Comming soon</h4>
                    <p>Comming soon</p>
                </div>
            )
        }
    }

    renderAllTracks(){
        
        if (Object.keys(this.props.songs).length !== 0){

            this.songs = this.songs.concat(this.props.songs)
            while (this.songs.length !== 12) {
                this.songs.push(null)
            }
        }

        return this.songs.map((song, i) => (
            this.renderTrack(song, i)        
        ))
            
    }
    render(){
        return(
            <div className="main-content">

               <FirstFormContainer />

                <div className="orange-line"></div>
                <div className="index-top-container">
                    <div className="index-top-container-text">
                        <i className="fas fa-water index-wave"></i>
                        <span> </span>
                        <i className="fas fa-cloud index-cloud"></i>
                        <span className="index-skywave">WAVESKY</span>
                    </div>
                    <div className="index-top-container-buttons">
                        <button onClick={this.handleClick} className="sign-in-button">Sign In</button>
                        <button onClick={this.handleClick} className="create-account-button">Create Account</button>
                    </div>
                </div>

                <Carousel />

                <div className="index-search-container">
                    <ul className="index-search">
                        <li>
                            <div className="search-zoom">
                                <input className="index-search-bar" type="text"
                                    placeholder="Search for artists, tracks, playlists" />
                                <a className="search-button" href="#"><i className="fas fa-search"></i></a>
                            </div>
                        </li>
                        <li><span style={{ fontSize: 'medium', fontWeight: 400 }}>or</span></li>
                        <li><button onClick={this.handleClick} className="index-search-upload">Upload your own</button></li>
                    </ul>
                </div>

                <div className="index-trending-container">
                    <h3>Hear what’s trending in the WaveSky community</h3>
                    <div className="index-trending-tracks">



                    {this.renderAllTracks()}




                        {/* <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div>

                        <div className="index-trending-single-track">
                            <img className="track-img" src={window.party1} />
                            <h4><a href="#">Name of the Song</a></h4>
                            <p><a href="#">creatorname</a></p>
                        </div> */}

                        <button className="index-trending-signup">Sign up now!</button>

                    </div>
                </div>
                <div className="orange-line"></div>

                <div className="index-container-other">
                    <div className="index-container-other-img">
                        <img src={window.apple} alt="" />
                    </div>
                    <div className="index-container-other-text">
                        <h3>Not mobile friendly</h3>
                        <div className="hr-line"></div>
                        <p>Unfortunately, we are not mobile friendly. Sorry for the inconvenience</p>
                    </div>
                </div>

                <div className="index-container-singer">
                    <div className="index-container-singer-img">
                        <img src={window.singer} alt="singer" />
                    </div>
                    <div className="index-container-singer-text">
                        <div className="index-container-singer-text-single">
                            <button className="index-singer-signup">Sign Up!</button>
                        </div>

                        <div></div>

                        <div className="index-container-singer-text-single">
                            <h3>Music brings the joy!</h3>
                            <p>We are always in need of something new and special.
                            <br />Our community will make sure that you receive all the love you deserve!</p>
                        </div>
                    </div>
                </div>

                <div className="index-container-bottom">
                    <div className="index-container-bottom-text">
                        <h3>Thanks for listening. Now join in.</h3>
                        <p>Save tracks, follow artists and build playlists. All for free.</p>
                        <div>
                            <button onClick={this.handleClick} className="index-container-bottom-button">Create Account</button>
                        </div>

                        <div className="index-container-bottom-signin-container">
                            <span>Already have an account?</span>
                            <button onClick={this.handleClick} className="index-container-bottom-button-signin">Sign in</button>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="index-container-footer">
                    <ul className="index-footer-list">
                        <li><a href="">About us</a></li>
                        <li>-</li>
                        <li><a onClick={this.handleClick}>Sign in</a></li>
                        <li>-</li>
                        <li><a onClick={this.handleClick}>Sing up</a></li>
                        <li>-</li>
                        <li><a href="https://github.com/iskraev/WaveSky">GitHub</a></li>
                    </ul>

                    <p className="last-item"> Created by Dias Iskrayev</p>


                </div>
            </div>

        )
    }
}



