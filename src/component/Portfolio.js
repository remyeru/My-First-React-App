const Portfolio =() => {
    return (
            <section className="content-section" id="portfolio">
                <div class="container">
                    <div className="portfolio">
                        <h1 class="p-1">Portfolio</h1>
                        <h2 class="p-2">Recent Projects</h2>
                    </div>
                    <div className="row ">
                        <div>
                            <a className="portfolio-items" href="./RecreatedWWW/">
                                <div>
                                    <div>
                                        <div class="h1">Worlds First Website</div>
                                        <p class="p-1">Recreation of the World's first Website</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a>
                                <div>
                                    <div>
                                        <div></div>
                                        <a></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Portfolio;