import Gambar1 from "../img/foto.jpg";
import "../App.css";
import { Link } from "react-router-dom";

function Awal() {
  return (
    <div className="Grid-container">
      <div>
        <img src={Gambar1} alt="" className="Gambar" />
      </div>
      <div className="Teks">
        <h1>The Best Handphones</h1>
        <h4 className="Release">November Release</h4>
        <h4 className="Release1">Number : 123456789</h4>
        <p className="Release">
          Headphones are more than just a way to listen to music, they’ve matured into a wearable device, a way to augment your smartphone experience. It can be hard to decode all of the specifications and even harder to understand the
          importance of some software features over others, especially if you’re new to buying headphones. We’re here to reduce the feeling of analysis paralysis with our ultimate headphone buying guide. Now, you dedicate less time to
          research, and more time to music enjoyment.
        </p>
        <h3 className="ReleaseD">Size</h3>
        <table className="Tables">
          <tr>
            <th className="Th">XS</th>
            <th className="Th">S</th>
            <th className="Th">M</th>
            <th className="Th">L</th>
          </tr>
        </table>
        <div className="Beli">
          <button className="Buy">BUY NOW</button>
          <button className="Add">ADD TO WISHLIST</button>
        </div>
        <p className="Only">*Only one Available</p>
        <Link to="Tugas">
          <button className="">Tugas 2</button>
        </Link>
      </div>
    </div>
  );
}

export default Awal;
