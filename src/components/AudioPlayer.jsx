import { useCallback, useContext, useEffect, useRef, useState } from "react";
import "../index.css";
import { FaPlay } from "react-icons/fa";
import { FaPause, FaShuffle } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { useParams, useNavigate } from "react-router-dom";
import { Allsong } from "../constext/useContext";
import { IoAdd } from "react-icons/io5";
import Trandingcompont from "./Trandingcompont";
import Hadding from "./Hadding";
import axios from "axios";
import { BACKEND_URL } from "../../context";
import { formatDate } from "../helper/format";
const AudioPlayer = () => {
  const [allowshaffle, setallowshaffle] = useState(false);
  const [currentsongindex, setcurrentsongindex] = useState(null);
  const [Currentsongplay, setCurrentsongplay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [themnail, setthemnail] = useState(null);
  const [artiest, setartiest] = useState(null);
  const [views, setviews] = useState(null);
  const [othersong, setothersong] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const { type, id } = useParams();
  const { weeklytop } = useContext(Allsong);
  const navigate = useNavigate();

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    audio.currentTime = event.target.value;
    setCurrentTime(audio.currentTime);
  };

  const songendedhandler = () => {
    if (allowshaffle) {
      const random = Math.floor(Math.random() * othersong.length);
      navigate(`/${type}/${othersong[random]._id}`);
      setcurrentsongindex(random + 1);
    } else {
      if (currentsongindex == othersong.length) {
        setcurrentsongindex(0);
      }

      navigate(`/${type}/${othersong[currentsongindex + 1]._id}`);
      setcurrentsongindex(currentsongindex + 1);
    }
  };
  const handleNext = useCallback(() => {
    let next = othersong[currentsongindex + 1]._id;
    navigate(`/${type}/${next}`);
    setcurrentsongindex(currentsongindex + 1);
  }, [currentsongindex, navigate, othersong, setcurrentsongindex, type]);
  const handleback = useCallback(() => {
    let next = othersong[currentsongindex - 1]._id;
    navigate(`/${type}/${next}`);
    setcurrentsongindex(currentsongindex - 1);
  }, [currentsongindex, navigate, othersong, setcurrentsongindex, type]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && Currentsongplay) {
      audio.play();
      setIsPlaying(true);
    }
  }, [Currentsongplay]);
  useEffect(() => {
    if (weeklytop.length > 0) {
      setothersong(weeklytop);
      weeklytop.forEach((element, index) => {
        if (element._id === id) {
          setCurrentsongplay(element.url);
          setthemnail(element.themnail);
          setviews(element.views);
          setartiest(element.artist);
          setcurrentsongindex(index);
        }
      });
    }
  }, [id, weeklytop]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/songs/singlesong?id=${id}`);
  }, [id]);
  useEffect(() => {
    const handleKeyPress = (e) => {
      const audio = audioRef.current;
      switch (e.key) {
        case "p":
          handlePlayPause();
          break;
        case "ArrowRight":
          audio.currentTime += 10;
          break;
        case "ArrowLeft":
          audio.currentTime -= 10;
          break;
        case "AudioVolumeUp":
          audio.volume = Math.min(1, audio.volume + 0.1);
          break;
        case "AudioVolumeDown":
          audio.volume = Math.max(0, audio.volume - 0.1);
          break;
        case ",":
          handleback();
          break;
        case ".":
          handleNext();
          break;
        case "s":
          setallowshaffle((pre) => !pre);
          break;
        case "Escape":
          navigate("/");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [
    isPlaying,
    handlePlayPause,
    handleback,
    navigate,
    handleNext,
    currentsongindex,
    othersong,
    Currentsongplay,
  ]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${themnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex backdrop:z-40 bg-opacity-[0.1] flex-col justify-center mt-4  mx-auto w-[90%]  overflow-hidden items-center  text-white p-4 rounded-lg shadow-lg "
      >
        <div className="">
          <audio
            onEnded={songendedhandler}
            ref={audioRef}
            src={Currentsongplay}
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
        <div className="w-[250px]  p-2 h-[250px] rounded-full flex justify-center items-center   relative"></div>
        <div className="text-center w-full font-bold t  h-[100px]  flex justify-between px-10 items-center   mb-4 mt-4">
          <div>
            <p className="text-xl">
              Views:{" "}
              <span className="text-xl">
                {views > 1000 ? (views / 1000).toFixed() + " K" : views}
              </span>
            </p>
          </div>
          <div className=" ">
            <h3 className="text-xl font-bold capitalize ">{artiest} </h3>

            <p className="text-[17px] bg-gradient-to-bl  from-[#EE10B0] to-[#0E9EEF] inline-block text-transparent bg-clip-text">
              Musicify
            </p>
          </div>
          <div className=" h-[100px] w-[100px] mb-8">
            {isPlaying && (
              <iframe
                className=""
                width={"100px"}
                height={"100px"}
                src="https://lottie.host/embed/f8b12f60-0296-441e-8b18-d9420f67c622/5C6Jm7KMUP.json"
              ></iframe>
            )}
          </div>
          {/* <div className=" mb-9"><iframe src="https://lottie.host/embed/5eb82fc0-6319-4b92-9b14-605c1dbcf658/J9D0iUdu2D.json"></iframe></div> */}
        </div>
        <div className="flex  flex-col justify-center pt-5 items-center w-full mb-4">
          <input
            type="range"
            min="0"
            color="gray"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full  m-0  h-1 rounded-lg"
          />
          <div className="flex    justify-between w-full text-sm ">
            <span>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </span>
            <span>
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex justify-around w-full mb-4">
          <button
            onClick={() => setallowshaffle((pre) => !pre)}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            <FaShuffle color={allowshaffle ? "white" : "purple"} />
          </button>
          <button
            onClick={handleback}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            <FaStepBackward />
          </button>
          <button
            onClick={handlePlayPause}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            {isPlaying ? (
              <FaPause color={isPlaying == true ? "white" : "purple"} />
            ) : (
              <FaPlay />
            )}
          </button>
          <button
            onClick={handleNext}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            <FaStepForward />
          </button>
          <button
            onClick={() => setallowshaffle((pre) => !pre)}
            className=" hover:text-white text-fuchsia-700 text-2xl"
          >
            <ImLoop color={allowshaffle == false ? "white" : "purple"} />
          </button>
        </div>
      </div>
      <div className="w-[95%]">
        {type === "newrelisesong" && (
          <Hadding name={"New Relises "} lastname={"Song"} />
        )}
        {type === "weeklytopsong" && (
          <Hadding name={"Weekly Top "} lastname={"Song"} />
        )}
        {type === "tranding" && (
          <Hadding name={"Tranding "} lastname={"Song"} />
        )}
        {id === "arijit_sigh" && (
          <Hadding name={"arijit_sigh "} lastname={"Song"} />
        )}

       
        {/* trandingcompont */}
        {othersong.length > 0 &&
          othersong.map((ele, index) => {
            const date = formatDate(ele.updatedAt);

            return (
              <Trandingcompont
                key={ele._id}
                id={ele._id}
                type={type}
                rank={index + 1}
                name={ele.title}
                artistname={ele.artist}
                relisedata={date}
                duration={
                  ele.views > 1000
                    ? (ele.views / 1000).toFixed(1) + "K"
                    : ele.views
                }
                Album={ele.title}
                tranding={ele.themnail}
              />
            );
          })}
     
      </div>
    </>
  );
};

export default AudioPlayer;
