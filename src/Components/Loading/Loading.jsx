import Lottie from "lottie-react";
import LoadingAnime from '../../Anim/Animation -  Loading2.json';
import "./loading.css";

function Loading() {
  return (
    <div>
      <div id='loading'>
      <Lottie
              animationData={LoadingAnime}
              loop={true}
              autoplay={true}
              className="loading"
            />
      </div>
    </div>
  )
}

export default Loading