import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

import GroupButton from "./GroupButton";

const useStyles = makeStyles({
	component: {
		display: "flex",
		borderRadius: 0,
		borderTop: "1px solid #f0f0f0",
	},
	leftComponent: {
		margin: 20,
		display: "flex",
		flexDirection: "column",
	},
	rightComponent: {
		margin: 20,
	},
	smallText: {
		fontSize: 14,
	},
	greyTextColor: {
		color: "#878787",
	},
	price: {
		fontSize: 18,
		fontWeight: 600,
	},
	image: {
		height: 110,
		width: 110,
	},
	remove: {
		marginTop: 20,
		fontSize: 16,
	},
});
const CartItem = ({ item, removeItemFromCart }) => {
	const classes = useStyles();
	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	return (
		<Card className={classes.component}>
			<Box className={classes.leftComponent}>
				<img src={item.url} alt='' className={classes.image} />
				<GroupButton />
			</Box>
			<Box className={classes.rightComponent}>
				<Typography>{item.title.longTitle}</Typography>
				<Typography
					className={clsx(classes.smallText, classes.greyTextColor)}
					style={{ marginTop: 10 }}
				>
					Seller: SuperComNet
					<span>
						<img src={fassured} alt='' style={{ width: 50, marginLeft: 10 }} />
					</span>
				</Typography>
				<Typography style={{ margin: "20px 0" }}>
					<span className={classes.price}>₹{item.price.cost}</span>{" "}
					<span className={classes.greyTextColor}>
						&nbsp;&nbsp;&nbsp;
						<strike>₹{item.price.mrp}</strike>&nbsp;&nbsp;&nbsp;
					</span>
					<span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
				</Typography>
				<Button
					className={classes.remove}
					onClick={() => removeItemFromCart(item.id)}
				>
					Remove
				</Button>
			</Box>
		</Card>
	);
};

export default CartItem;
