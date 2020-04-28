import React from 'react';

export default () => (
    <div className="main-content">
            {/* <div className="orange-line"></div>
            <div className="index-top-container">
                <div className="index-top-container-text">
                    <i className="fas fa-water index-wave"></i>
                    <i className="fas fa-cloud index-cloud"></i>
                    <span className="index-skywave">WAVESKY</span>
                </div>
                <div className="index-top-container-buttons">
                    <button className="sign-in-button">Sign In</button>
                    <button className="create-account-button">Create Account</button>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide party-img" data-ride="carousel">
                <ol className="carousel-indicators">
                    <button data-target="#carouselExampleIndicators" data-slide-to="0"
                        className="slideshow-indicator active"></button>
                    <button data-target="#carouselExampleIndicators" data-slide-to="1"
                        className="slideshow-indicator"></button>
                </ol>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="./images/party-1.jpg" className="d-block w-100 party-single-img" alt="party-1"/>

                        <div className="carousel-caption">
                            <div className="carousel-text">
                                <h3>The music you love and enjoy</h3>
                                    <p>Listen to the best songs from around the globe!
                                        <br/>Upload your own and share with friends!
                                        <br/>Just chill and feel the vibe.
                                    </p>
                                    <button className="carousel-text-button">Start listening</button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="./images/party-2.jpg" className="d-block w-100 party-single-img party-2" alt="party-2"/>

                        <div className="carousel-caption">
                            <div className="carousel-text git">
                                <h3>This project is the clone of SoundCloud</h3>
                                    <p>My name is <span className="name">Dias Iskrayev</span>.
                                        <br/>I am a creator of this fun little project.
                                        <br/>Link to GitHub repo for this project is down below!
                                    </p>
                                    <button className="carousel-text-button"><a href="https://github.com/iskraev/WaveSky"
                                            className="github">GitHub</a></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="index-search-container">
                <ul className="index-search">
                    <li>
                        <div className="search-zoom">
                            <input className="index-search-bar" type="text"
                                placeholder="Search for artists, tracks, playlists"/>
                            <a className="search-button" href="#"><i className="fas fa-search"></i></a>
                        </div>
                    </li>
                    <li><span style="font-size: medium; font-weight: 400;">or</span></li>
                    <li><button className="index-search-upload">Upload your own</button></li>
                </ul>
            </div>

            <div className="index-trending-container">
                <h3>Hear what’s trending in the WaveSky community</h3>
                <div className="index-trending-tracks">
                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <div className="index-trending-single-track">
                        <img className="track-img" src="./images/party-1.jpg"/>
                        <h4><a href="#">Name of the Song</a></h4>
                        <p><a href="#">creatorname</a></p>
                    </div>

                    <button className="index-trending-signup">Sign up now!</button>

                </div>
            </div>
            <div className="orange-line"></div>

            <div className="index-container-other">
                <div className="index-container-other-img">
                    <img src="./images/apple.png" alt=""/>
                </div>
                <div className="index-container-other-text">
                    <h3>Not mobile friendly</h3>
                    <div className="hr-line"></div>
                    <p>Unfortunately, we are not mobile friendly. Sorry for the inconvenience</p>
                </div>
            </div>

            <div className="index-container-singer">
                <div className="index-container-singer-img">
                    <img src="./images/singer.jpg" alt="singer"/>
                </div>
                <div className="index-container-singer-text">
                    <div className="index-container-singer-text-single">
                        <button className="index-singer-signup">Sign Up!</button>
                    </div>

                    <div></div>

                    <div className="index-container-singer-text-single">
                        <h3>Music brings the joy!</h3>
                        <p>We are always in need of something new and special.
                            <br/>Our community will make sure that you receive all the love you deserve!</p>
                    </div>
                </div>
            </div>

            <div className="index-container-bottom">
                <div className="index-container-bottom-text">
                    <h3>Thanks for listening. Now join in.</h3>
                        <p>Save tracks, follow artists and build playlists. All for free.</p>
                        <div>
                            <button className="index-container-bottom-button">Create Account</button>
                        </div>

                        <div className="index-container-bottom-signin-container">
                            <span>Already have an account?</span>
                            <button className="index-container-bottom-button-signin">Sign in</button>
                        </div>
                </div>
            </div>

            <hr/> */}
            <div className="index-container-footer">
                <ul className="index-footer-list">
                    <li><a href="">About us</a></li>
                    <li>-</li>
                    <li><a href="">Sign in</a></li>
                    <li>-</li>
                    <li><a href="">Sing up</a></li>
                    <li>-</li>
                    <li><a href="https://github.com/iskraev/WaveSky">GitHub</a></li>
                </ul>

                <p className="last-item"> Created by Dias Iskrayev</p>


            </div>
    </div>

)


