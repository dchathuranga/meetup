import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../store/favorites-context";

function MeetupItem({ meetup }) {
  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(meetup.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(meetup.id);
    } else {
      favoriteCtx.addFavorite(meetup);
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
