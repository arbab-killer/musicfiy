import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/5.png";
import Trandingcompont from "../Trandingcompont";
import Hadding from "../Hadding";
import Albumcomponenet from "../Album";
import Weeklytop from "../Weeklytop";
import { Allsong } from "../../constext/useContext";
import { useContext, useEffect, useState } from "react";
import { formatDate} from "../../helper/format"
const Artistcomponent = () => {
  const { Album } = useContext(Allsong);
 const [data, setData] = useState([]);

  // const data = [

  //   {
  //     name: "Surfcorn",
  //     artistname: "The neighbourhood",
  //     relisedata: "Nov 3,2022",
  //     duration: "3:35",
  //     Album: "Hard to Imagine the Neighbourhood Ever Changing",
  //     rank: "#1",
  //   },
  //   {
  //     name: "Skyfall Beats",
  //     artistname: "Nightmairs",
  //     relisedata: "dec 12,2023",
  //     duration: "2:35",
  //     Album: "Skyfall Beats",
  //     rank: "#2",
  //   },
  //   {
  //     name: "Love in me",
  //     artistname: "jack harvloy",
  //     relisedata: "jun 1,2020",
  //     duration: "3:35",
  //     Album: "Love in me",
  //     rank: "#3",
  //   },
  //   {
  //     name: "Greedy",
  //     artistname: "Tata mcgill",
  //     relisedata: "feb 2,2012",
  //     duration: "3:35",
  //     Album: "Greedy",
  //     rank: "#4",
  //   },
  //   {
  //     name: "Pan the round redd",
  //     artistname: "Dojo cat",
  //     relisedata: "Mar 3,2014",
  //     duration: "3:35",
  //     Album: "Pan the round redd",
  //     rank: "#5",
  //   },
  // ];
  useEffect(() => {
    if (Album.length > 0) {
      setData(Album);
    }
  },[Album]);
  
  console.log(data[Math.floor(Math.random() * data.length)]?.songs[0]?.themnail);
  return (
    <div className="w-[1060px] bg-gradient-to-tl to-[#3b3b3b91] from-[#302e2b34]  ">
      <div className="h-[430px]   bg-gradient-to-r  from-[#0E9EEF] to-[#2779c559] w-full relative mt-4 mb-[50px]  overflow-x-hidden  ">
        <div className="w-1/3 bottom-5 left-9 h-1/4  absolute">
          <h1 className="text-white whitespace-nowrap overflow-hidden pl-2 pr-2 capitalize text-[50px]">
            {data[Math.floor(Math.random() * data.length)]?._id}
          </h1>
        </div>
        <div className="w-full absolute h-[60px]   flex justify-between items-center pr-3 pl-3 ">
          <div className="h-[60px] w-[60px]  flex justify-center items-center">
            <FaArrowLeft onClick={()=>{
              window.history.back()
            }} color={"white"} size={"30px"} />
          </div>
          <div className="h-full w-[45%]  flex justify-center items-center">
            <div className="btn w-full h-[38px] flex justify-center items-center   gap-[46px]">
              <Link
                to={"/about"}
                className="transition-all ease-in text-white text-xl hover:font-mono hover:text-xl hover:text-[#FF26C2] "
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-[19px] hover:text-[#FF26C2]  "
              >
                Contect
              </Link>
              <Link
                to={"/premium"}
                className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-xl hover:text-[#FF26C2] "
              >
                Premium
              </Link>
              <Link to={"/profile"} className=" w-[35px] h-[35px]  ">
               {localStorage.getItem("profilpic") && <img
                  className="object-cover contrast-75 rounded-full w-full -2 -[#FF26C2] h-full"
                  src={ localStorage.getItem("profilpic") }
                  alt=""
                />}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full  bg-red-700 ">
          <img className=" w-full h-full object-cover" src={data[Math.floor(Math.random() * data.length)]?.songs[0]?.themnail} alt="" />
        </div>
      </div>
      <div className="w-[1060px] bg-gradient-to-l to-[#1E1E1E] from-[#383838a5]  ">
        <Hadding name={"Tranding"} lastname={"Song"} />
        <div className=" dates w-[70%] h-[31px] ml-auto flex justify-between pl-8 pr-10  items-center">
          <div>
            <h4 className="font-sans text-white text-[15px]">Relises Date</h4>
          </div>
          <div>
            <h4 className="font-sans text-white text-[15px]">Album </h4>
          </div>
          <div>
            <h4 className="font-sans text-white text-[15px]">Views</h4>
          </div>
        </div>
        {/* trandingcompont */}
        {data.sort(() => 0.5 - Math.random()).map((ele ,index) => {
          // console.log(ele.songs[0]);
          let date = formatDate(ele.songs[0].releaseDate);
          // console.log(ele);
          return (data ? 
            <Trandingcompont
              key={index}
              id={ele.songs[0]._id}
              rank={index+1}
              name={ele.songs[0].title}
              artistname={ele.songs[0].artist}
              relisedata={date}
              duration={ele.songs[0].views >1000 ? (ele.songs[0].views / 1000).toFixed(1) + "K" : ele.views}
              Album={ele.songs[0].title}
              tranding={ele.songs[0].themnail}

            />:"no data"
          );
        })}
      </div>
      {/* <Albumcomponenet /> */}
      <hr />
      <Weeklytop firsthadding={"Sing "} secondhadding={"Songs"} />
    </div>
  );
};

export default Artistcomponent;
