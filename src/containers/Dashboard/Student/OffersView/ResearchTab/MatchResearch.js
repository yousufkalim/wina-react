import React, { useState } from "react";
import MultiCarouselPage from "./MultiCarouselPage";
import OfferCardDetail from "../OfferCardDetail";
export default function MatchResearch() {
  const [isDetail, setisDetail] = useState(false);

  const handleDetail = (btn) => {
    setisDetail(btn);
  };

  return (
    <div className="matchResearch">
      <div className="carosoulProfileBox">
        <div className="genProfile text-center">
          {isDetail === false ? (
            <MultiCarouselPage handleDetail={handleDetail} />
          ) : (
            <OfferCardDetail />
          )}
        </div>
      </div>
    </div>
  );
}
