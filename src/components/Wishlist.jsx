import { Button } from "./Button";

export const Wishlist = ({ wishlist, clearWishlist }) => {
  return (
    <div className="wishlist">
      <h2> ⭐️ My Wishlist</h2>
      <ul>
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <li key={item.id}>
              🎬 <strong>{item.title}</strong> ({item.release_date})
            </li>
          ))
        ) : (
          <p>No items in wishlist.</p>
        )}
      </ul>
      {wishlist.length > 0 && (
        <Button onClick={clearWishlist} variant="destroy">
          Clear All
        </Button>
      )}
    </div>
  );
};
