import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";


function Favorites(){
    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favoites yet, start adding some?</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return (
       <section>
        <h1>My Favorites</h1>
        <MeetupList meetups={favoritesCtx.favorites} />
        {content}
       </section>
    )
}

export default Favorites