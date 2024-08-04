
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHander(meetupId){
        setUserFavorites(prevUserFavorite => {
            return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
        });
    }
    function itemIsFavoriteHander(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHander,
        itemIsFavorite: itemIsFavoriteHander
    };

     return <FavoritesContext.Provider value={context}>
        {props.children}
     </FavoritesContext.Provider>
}

export default FavoritesContext