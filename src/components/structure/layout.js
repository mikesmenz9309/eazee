import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import eaziwash_logo from "../../assets/eazee-wash-logo.png";
import netfresh_logo from "../../assets/netfresh-logo.jpeg";
import mlo_logo from "../../assets/mlo-logo.png";
import payfast_logo from "../../assets/pay-fast-logo.png";

import { ExternalLink, NavLink, SiteTopNav } from "../navigation";
import OrderProvider from "../../utils/contexts-providers/order-provider";
import { config } from "../../config";

export default function Layout({ children }) {
  const { eazeewash_tel } = config(process.env.NODE_ENV);

  return (
    <div className="flex flex-col justify-between">
      <div className="bg-sky-400 flex justify-center items-center w-full sticky top-0">
        <div className="w-2/3">
          <div className="flex justify-between">
            <div className="w-20">
              <NavLink to="/">
                <img src={eaziwash_logo} alt="logo not available" />
              </NavLink>
            </div>

            <OrderProvider>
              <SiteTopNav />
            </OrderProvider>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
        <div className="w-2/3">{children}</div>
      </div>
      <div className="flex justify-center items-center bg-gray-400 w-full">
        <div className="flex flex-col items-center w-2/3">
          <div>
            <div className="flex flex-col items-center p-10">
              <h2 className="font-semibold">Our Partner(s)</h2>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-lg w-36">
                  <img src={netfresh_logo} alt="Logo not available" />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
              <div>
                <div className="w-20">
                  <NavLink to="/">
                    <img src={eaziwash_logo} alt="logo not available" />
                  </NavLink>
                </div>
              </div>

              <div>
                <h2 className="font-bold">Pickup and Delivery Times :</h2>
                <p className="flex flex-col">
                  <span>Monday???Friday:</span>
                  <span>6am ??? 5pm</span>
                  <span>Saturday:</span>
                  <span>8am ??? 4pm</span>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>

              <div>
                <h2 className="font-bold">Services</h2>
                <div>Dry Cleaning</div>
                <div>Laundry &amp; Ironing</div>
              </div>

              <div>
                <h2 className="font-bold">Legal</h2>
                <Link to="/terms-and-conditions/" className="text-blue-500">
                  Terms and Conditions
                </Link>
              </div>

              <div>
                <h2 className="font-bold">Contact US</h2>
                <div>Tel {eazeewash_tel}</div>
                <p className="flex space-x-4">
                  <span>
                    <ExternalLink
                      text="Twitter"
                      link="https://twitter.com/eazeewash"
                    />
                  </span>
                  <span>
                    <ExternalLink
                      text="Facebook"
                      link="https://www.facebook.com/Eazeewash-108778155055179/"
                    />
                  </span>
                  <span>
                    <ExternalLink
                      text="Instagram"
                      link="https://www.instagram.com/eazeewash/"
                    />
                  </span>
                </p>
                <span>
                  <img src={payfast_logo} alt="logo not available" />
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <p className="flex justify-center items-center space-x-2">
              <span>&copy; {new Date().getFullYear()}</span>
              <span>
                <img
                  className="w-5 h-5"
                  src={mlo_logo}
                  alt="logo not available"
                />
              </span>
              <span>Mlo Solutions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  alertMessage: PropTypes.string,
  children: PropTypes.node,
};
