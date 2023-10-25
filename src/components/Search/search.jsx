import React from "react";

// Imported Icons ==>
import { TbListSearch } from "react-icons/tb";

const Search = () => {
	return (
		<div className="search container section">
			<div className="sectionContainer grid">
				<div className="btns flex">
					<div className="singleBtn">
						<p>Economy</p>
					</div>

					<div className="singleBtn">
						<p>Business Class</p>
					</div>

					<div className="singleBtn">
						<p>First Class</p>
					</div>
				</div>

				<div className="searchInputs flex">
					{/* Single Input */}
					<div className="searchInput flex">
						<div className="iconDiv">
							<TbListSearch className="icon" />
						</div>

						<div className="texts">
							<h4>Search</h4>
							<input type="text" placeholder="What do you want to know?" />
						</div>
					</div>

					<div className="searchInput flex">
						<div className="iconDiv">
							<TbListSearch className="icon" />
						</div>

						<div className="texts">
							<h4>Search</h4>
							<input type="text" placeholder="What do you want to know?" />
						</div>
					</div>

					<div className="searchInput flex">
						<div className="iconDiv">
							<TbListSearch className="icon" />
						</div>

						<div className="texts">
							<h4>Search</h4>
							<input type="text" placeholder="What do you want to know?" />
						</div>
					</div>

					<div className="searchInput flex">
						<div className="iconDiv">
							<TbListSearch className="icon" />
						</div>

						<div className="texts">
							<h4>Search</h4>
							<input type="text" placeholder="What do you want to know?" />
						</div>
					</div>
				</div>
				<button className="btn btnBlock">Search About</button>
			</div>
		</div>
	);
};

export default Search;
