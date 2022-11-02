import "../App.css";
import Gambar2 from "../img/gambar2.avif";
import { Link } from "react-router-dom";

export default function Tugas2() {
  return (
    <div className="Grid-container">
      <div>
        <img src={Gambar2} alt="" className="Gambar" />
      </div>
      <div className="Teks">
        <h4 className="ReleaseB">Headphones</h4>
        <h1 className="Oki">OKI 207</h1>
        <p className="Release">
          Headphones are more than just a way to listen to music, they’ve matured into a wearable device, a way to augment your smartphone experience. It can be hard to decode all of the specifications and even harder to understand the
          importance of some software features over others, especially if you’re new to buying headphones. We’re here to reduce the feeling of analysis paralysis with our ultimate headphone buying guide. Now, you dedicate less time to
          research, and more time to music enjoyment.
        </p>
        <p>____________________________________________________________________________</p>
        <h3 className="Release">Color</h3>
        <div className="ButtonCenter">
          <button className="Button1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </button>
          <button className="Button2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </button>
          <button className="Button3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </button>
        </div>
        <p className="Cable">Cable Configurasi</p>
        <div className="KontainerBuy">
          <button>Straight</button>
          <button>Coiled</button>
          <button>long-coiled</button>
        </div>
        <div className="Akhir">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>{" "}
          How to configurate your headphones
        </div>{" "}
        <Link to="/">
          <button className="Moleh">Home</button>
        </Link>
      </div>
    </div>
  );
}
