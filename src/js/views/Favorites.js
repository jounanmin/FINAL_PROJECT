import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default class Favorites extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.loggedInUser.length < 1) {
						return (
							<div className="card">
								<div className="card-body">
									<h2 className="card-title">Login to see Favorites</h2>
								</div>
							</div>
						);
					} else
						return store.loggedInUser.favorites.map((place, index) => {
							return (
								<div className="container" key={index}>
									<div className="jumbotron row">
										<Link to={`/details/${place.id}`}>
											<div
												id="carouselExampleControls"
												className="carousel slide col-md-5  col-sm-12 detailscarosuel"
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
										</Link>

										<div className="detailstext col-md-6 col-sm-10">
											<h3>Name</h3>
											<h6>Place</h6>
										</div>
									</div>
								</div>
							);
						});
				}}
			</Context.Consumer>
		);
	}
}
