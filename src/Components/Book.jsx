import React, { Component } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import "./Book.css";

export default class Book extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (contextTheme) => {
                        const { isDarkMode, light, dark } = contextTheme;
                        const theme = isDarkMode ? dark : light;
                        return (
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <div className="portfolio-item">
                                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                        <div className="portfolio-hover" style={{ backgroundColor: theme.hover }}>
                                            <div className="portfolio-hover-content">
                                                <i className="fas fa-plus fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={this.props.book.imageURL} alt={this.props.book.title} className="img-fluid w-100" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">
                                            {this.props.book.title}
                                        </div>
                                        <div className="portfolio-caption-subheading text-muted">
                                            {this.props.book.author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}