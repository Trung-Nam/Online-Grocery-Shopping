import React from 'react'
import "./Blog.scss"
import { FaRegBookmark, FaRegClock } from 'react-icons/fa'
import { LuPill } from 'react-icons/lu'


const Blog = () => {
    return (
        <div className="blog-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-9 content-primary">
                        <div className="site-posts">
                            <article className="post">
                                <figure className="post-thumbnail">
                                    <a href="/">
                                        <img src={require("../../assets/images/blogs/blog-3.jpg")} alt="But I must explain to you how all this mistaken idea" />
                                    </a>
                                </figure>

                                <div className="post-wrapper">
                                    <div className="entry-meta">
                                        <span className="meta-item entry-published">
                                            <FaRegClock />
                                            <a href="/">May 3, 2021</a>
                                        </span>

                                        <span className="meta-item entry-published">
                                            <FaRegBookmark />
                                            <a href="/" rel="category tag">Tips &amp; Tricks</a>
                                        </span>

                                        <span className="meta-item entry-tags">
                                            <LuPill />
                                            <a href="/" rel="tag">food</a>,{" "}
                                            <a href="/" rel="tag">store</a>,{" "}
                                            <a href="/" rel="tag">themeforest</a>
                                        </span>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="/">
                                            But I must explain to you how all this mistaken idea
                                        </a>
                                    </h2>

                                    <div className="entry-content">
                                        <div className="content-post">
                                            <p>
                                                Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet
                                                velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue
                                                tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu
                                                ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula.
                                                Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien
                                                mauris sodales
                                            </p>
                                            <div className="read-more entry-button">
                                                <a className="button" href="/">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog