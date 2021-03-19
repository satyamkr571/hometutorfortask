import React from "react";
import "./service.scss";
import { Card } from "antd";
const { Meta } = Card;

export default function Service() {
  return (
    <div className="serviceBox">
      <h1 className="serviceText" style={{ textAlign: "center" }}>
        {" "}
        Service
      </h1>
      <div className="container serviceContainer">
        <div className="serviceSubContainer">
          <Card
            className="card-containers"
            title={<h3>Budget friendly</h3>}
            hoverable>
            <div>
              <p>
                We ask your budget first, How much a student can afford based on
                that we try our best to connect with best professor.
              </p>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="serviceSubContainer">
          <Card
            className="card-containers"
            title={<h3> Device friendly</h3>}
            hoverable>
            <div>
              <p>
                Our website/ App works on any device, so you can get your doubts
                solved anytime, even when you are travelling etc.
              </p>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="serviceSubContainer">
          <Card
            className="card-containers"
            title={<h3> Plagiarism free</h3>}
            hoverable>
            <div>
              <p>
                Our solutions are not copied from internet or any other possible
                sources, our experts provide the original solutions.
              </p>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="serviceSubContainer">
          <Card
            className="card-containers"
            title={<h3>Topnotch experts</h3>}
            hoverable>
            <div>
              <p>
                Our experts studied from top colleges mostly masters and PhD's
                and they are professionals working in great companies in their
                expertise area.
              </p>
            </div>
            <Meta title="" description="www.perfectprops.com.com" />{" "}
          </Card>
        </div>

        <div className="serviceSubContainer">
          <Card
            className="card-containers"
            title={<h3>24/7 support </h3>}
            hoverable>
            <div>
              <p>
                {" "}
                Reach us out anytime via Whatsapp or any other messanger, call,
                or mail.{" "}
              </p>
            </div>
            <Meta title="" description="www.perfectprops.com" />{" "}
          </Card>
        </div>
      </div>
    </div>
  );
}
