import React from "react";

// Import Image ==>
import imageGrid from "../../Assets/Logo.png";

const Lounge = () => {
	return (
		<div className="lounge container section">
			<div className="sectionContainer grid">
				<div className="imgDiv">
					<img src={imageGrid} alt="loungeImage" className="loungeImg" />
				</div>

				<div className="textDiv">
					<h2>Unaccompanied Minor Lounge</h2>
					<div className="grids grid">
						<div className="singleGrid">
							<span className="gridTitle">Help Through the Community</span>
							<p>
								You can bal ab al ba ba lab al ba owj eoi ae fined test df web
								kit jie jte ert err ete edt sge ge.
							</p>
						</div>

						<div className="singleGrid">
							<span className="gridTitle">Help Through the Community</span>
							<p>
								You can bal ab al ba ba lab al ba owj eoi ae fined test df web
								kit jie jte ert err ete edt sge ge.
							</p>
						</div>

						<div className="singleGrid">
							<span className="gridTitle">Help Through the Community</span>
							<p>
								You can bal ab al ba ba lab al ba owj eoi ae fined test df web
								kit jie jte ert err ete edt sge ge.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lounge;
