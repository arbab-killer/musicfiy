import { FaCirclePlus } from "react-icons/fa6";
import { Allsong } from "../constext/useContext";
import PropTypes from "prop-types";
import Card from "./Card";
import Hadding from "./Hadding";
import { Link } from "react-router-dom";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { useContext } from "react";

const Weeklytop = ({ secondhadding, firsthadding }) => {
  const { weeklytop } = useContext(Allsong);
  // console.log(weeklytop);
  return (
    <div className="flex justify-center items-center w-[1060px] mb-7 overflow-hidden ">
      <div className="cardsparant flex justify-between relative gap-1 w-full items-center">
        <div className="w-[92%] pr-8 pl-9  overflow-hidden ">
          <Hadding name={firsthadding} lastname={secondhadding} />
          <div className="flex mt-9 m-auto  mb-9 justify-center items-center w-full  h-[245px]  ">
            {weeklytop.length > 0
              ? weeklytop
                  .sort(() => 0.5 - Math.random())
                  .map((e, index) => {
                    if (index < 5) {
                      {
                        return (
                          <Card
                            key={e._id}
                            image={e.themnail}
                            icon={
                              <IoMusicalNotesOutline
                                color="white"
                                size={"15px"}
                              />
                            }
                            title={e.title}
                            artist={e.artist}
                            id={e._id}
                            url={e.url}
                            type={"weeklytopsong"}
                          />
                        );
                      }
                    }
                  })
              : "No Data"}
          </div>
        </div>
        <div className=" absolute h-full  flex justify-center items-center top-0 right-0">
          <Link className="w-[85px] h-[90px] flex justify-center items-center flex-col hover:text-purple-500  ">
            <FaCirclePlus size={"63px"} /> <h3>View All</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

Weeklytop.propTypes = {
  secondhadding: PropTypes.string.isRequired,
  firsthadding: PropTypes.string.isRequired,
};
export default Weeklytop;
