import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export default class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	render(props) {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let locale = store.locations[this.props.match.params.theid];
					if (store.loggedInUser.length < 1) {
						return (
							<div className="container">
								<div className="jumbotron row">
									<div
										id="carouselExampleControls"
										className="carousel slide col-md-5 detailscarosuel"
										data-ride="carousel">
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													className="d-block w-100"
													src="https://markhampark.com/wp-content/uploads/2018/02/barkham.jpg"
													alt="First slide"
												/>
											</div>
											<div className="carousel-item">
												<img
													className="d-block w-100"
													src="https://s3-media2.fl.yelpcdn.com/bphoto/5WpScvacAgJ0YsIS63-pOw/o.jpg"
													alt="Second slide"
												/>
											</div>
											<div className="carousel-item">
												<img
													className="d-block w-100"
													src="https://s3.amazonaws.com/south-florida-finds/styles/sff_slideshow/public/sff_media/394/markham-park-%26-target-range_2_2921.jpg?itok=_BEcwNI1"
													alt="Third slide"
												/>
											</div>
										</div>
										<a
											className="carousel-control-prev"
											href="#carouselExampleControls"
											role="button"
											data-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true" />
											<span className="sr-only">Previous</span>
										</a>
										<a
											className="carousel-control-next"
											href="#carouselExampleControls"
											role="button"
											data-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true" />
											<span className="sr-only">Next</span>
										</a>
									</div>
									<div className="detailstext">
										<h3>{locale.title}</h3>
										<h6>
											{locale.address}
											<br />
											Fenced: {locale.fenced}
										</h6>
										<h4>
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
										</h4>
									</div>
								</div>
							</div>
						);
					} else
						return (
							<div className="container">
								<div className="jumbotron row">
									<div
										id="carouselExampleControls"
										className="carousel slide col-md-5 detailscarosuel"
										data-ride="carousel">
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img
													className="d-block w-100"
													src="https://markhampark.com/wp-content/uploads/2018/02/barkham.jpg"
													alt="First slide"
												/>
											</div>
											<div className="carousel-item">
												<img
													className="d-block w-100"
													src="https://s3-media2.fl.yelpcdn.com/bphoto/5WpScvacAgJ0YsIS63-pOw/o.jpg"
													alt="Second slide"
												/>
											</div>
											<div className="carousel-item">
												<img
													className="d-block w-100"
													src="https://s3.amazonaws.com/south-florida-finds/styles/sff_slideshow/public/sff_media/394/markham-park-%26-target-range_2_2921.jpg?itok=_BEcwNI1"
													alt="Third slide"
												/>
											</div>
										</div>
										<a
											className="carousel-control-prev"
											href="#carouselExampleControls"
											role="button"
											data-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true" />
											<span className="sr-only">Previous</span>
										</a>
										<a
											className="carousel-control-next"
											href="#carouselExampleControls"
											role="button"
											data-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true" />
											<span className="sr-only">Next</span>
										</a>
									</div>
									<div className="detailstext">
										<h3>{locale.title}</h3>
										<h6>
											{locale.address}
											<br />
											Fenced: {locale.fenced}
										</h6>
										<h4>
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
											<span className="fa fa-star checked" />
										</h4>
										<h4>Add to Favorites</h4>
									</div>
								</div>
							</div>
						);
				}}
			</Context.Consumer>
		);
	}
}
Details.propTypes = {
	match: PropTypes.object
};
