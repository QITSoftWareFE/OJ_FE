import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Index from "../../components/Home/home";
import Search from "../../components/Search/search";
import Support from "../../components/Support/support";
import Info from "../../components/Info/info";
import Lounge from "../../components/Lounge/lounge";
import Builder from "../../components/Builder/builder";
import Subscriber from "../../components/Subscriber/subscriber";
import Footer from "../../components/Footer/footer";

export default function Home() {
	return (
		<div>
			<Navbar></Navbar>
			<Index></Index>
			<Search></Search>
			<Support></Support>
			<Info></Info>
			<Lounge></Lounge>
			<Builder></Builder>
			<Subscriber></Subscriber>
			<Footer></Footer>
		</div>
	);
}
