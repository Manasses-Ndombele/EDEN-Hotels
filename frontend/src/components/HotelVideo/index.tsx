import video from "../../assets/hotelvideo.mp4";

function HotelVideo() {
  return (
    <div className="overlay mx-auto w-[100%] md:w-[80%] max-w-[700px] h-auto">
        <video
          autoPlay={true}
          muted={true}
          controls={true}
          className="w-full h-auto"
        >
          <source src={video} type="video/mp4" />
        </video>
    </div>
  );
}

export default HotelVideo;
