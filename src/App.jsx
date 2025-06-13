import "./App.css";

const foodTrucks = [
	{
		name: "Birria-Landia",
		cuisine: "Mexican",
		image: "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.2x.rhorizontal.w700.jpg",
		link: "https://birrialandia.com/menu/",
	},
	{
		name: "Nao's",
		cuisine: "Haitian",
		image: "https://fta.ams3.cdn.digitaloceanspaces.com/domains/nyfta.org/member/74/CTvjsN8LcMl3Owzl1QywJ6eogMyV91xf.png",
		link: "https://www.eatnaos.com/s/order",
	},
	{
		name: "Mystik Masala",
		cuisine: "Indian",
		image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ef/c3/f1/mysttik-masaala-foodcart.jpg?w=900&h=500&s=1",
		link: "https://www.instagram.com/mysttikmasaala/?hl=en",
	},
	{
		name: "The Halal Guys",
		cuisine: "Middle Eastern",
		image: "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?resize=1536,1029&quality=75&strip=all",
		link: "https://thehalalguys.com/",
	},
	{
		name: "The Oyster Lover",
		cuisine: "Seafood",
		image: "https://i0.wp.com/fourwheelfeasts.com/wp-content/uploads/2023/11/C0173T01.jpg?w=1280&ssl=1",
		link: "https://www.theoysterlover.com/",
	},
	{
		name: "Wafels & Dinges",
		cuisine: "Belgian",
		image: "https://crunchybottoms.wordpress.com/wp-content/uploads/2013/03/dsc_1220.jpg",
		link: "https://wafels.com",
	},
	{
		name: "Ms. Spudz",
		cuisine: "Everything Potato",
		image: "https://fta.ams3.cdn.digitaloceanspaces.com/domains/nyfta.org/member/73/iYBFBNTDnPdDMcB8DOZlMhCR2z97MRKI.png",
		link: "https://msspudzepng.com/",
	},
	{
		name: "Korilla BBQ",
		cuisine: "Korean",
		image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/1/1/XT_TGFTR2-Episode-1-08_s4x3.jpg.rend.hgtvcom.231.231.suffix/1371597696622.jpeg",
		link: "https://korillabbq.com/menu",
	},
	{
		name: "Glazed & Confused",
		cuisine: "Dessert",
		image: "https://fta.ams3.cdn.digitaloceanspaces.com/domains/ftala.org/member/378/ZNM7F5KVIiaB2CvDYFY8qiQlTEEEi4NU.png",
		link: "https://eatminidonuts.com/menu/",
	},
	{
		name: "Tong",
		cuisine: "Bangladeshi Street Food",
		image: "https://s3-media0.fl.yelpcdn.com/bphoto/rNwadLOeSvmnI0yOpc3Ojw/o.jpg",
		link: "https://www.instagram.com/tong_nyc/?hl=en",
	},
	{
		name: "Comme Ci Comme Ça",
		cuisine: "Moroccan",
		image: "https://i0.wp.com/newyorkstreetfood.com/wp-content/uploads/2011/03/truck-Samir.JPG?ssl=1",
		link: "https://www.instagram.com/theguttergourmet/p/DHoVajJv8_A/?img_index=1",
	},
	{
		name: "Chop Shop",
		cuisine: "Caribbean and American southern Flavors",
		image: "https://fta.ams3.cdn.digitaloceanspaces.com/domains/nyfta.org/member/30/yTHruabi21Fj9W5GslRNFvWp59xML4Mr.png",
		link: "https://nyfta.org/chop-shop-food-truck#menu",
	},
	{
		name: "GG's Fish and Chips",
		cuisine: "Soul Food",
		image: "https://fta.ams3.cdn.digitaloceanspaces.com/domains/nyfta.org/member/44/CRbb3cPbQN2X9P2cvjGlb1x01Lrqm4vX.png",
		link: "https://nyfta.org/gg-fish-and-chips#menu",
	},
];

const FoodTruckCard = ({ name, cuisine, image, link, onButtonClick }) => (
	<div className="card">
		<img src={image} alt={name} className="card-image" />
		<div className="card-content">
			<h3>{name}</h3>
			<p>{cuisine}</p>
			<a
				href={link}
				className="card-button"
				onButtonClick={onButtonClick}
				target="_blank"
			>
				View Menu
			</a>
		</div>
	</div>
);

export default function App() {
	return (
		<div className="app">
			<div className="header">
				<img
					src="https://www.petissimographicdesign.com/wp-content/uploads/2023/01/TENT-TOP-HOME2.png"
					alt="Market Awning"
					className="awning"
				/>
				<h1>NYC Food Truck Favorites</h1>
			</div>
			<div className="cards">
				{foodTrucks.map((truck, idx) => (
					<FoodTruckCard key={idx} {...truck} />
				))}
			</div>
		</div>
	);
}
