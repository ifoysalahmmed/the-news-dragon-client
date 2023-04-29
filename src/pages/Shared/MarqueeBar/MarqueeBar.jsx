import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
  return (
    <div className="d-flex p-3 mb-3">
      <Button variant="danger">Latest</Button>
      <Marquee speed={50} className="text-danger">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain —
        as it happened !
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
